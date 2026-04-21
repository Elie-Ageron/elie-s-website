/**
 * ScrollVideoSection — Scroll-driven video animation
 * - 350vh sticky section : entre dessus → video avance → sort par le bas
 * - Extraction ~80 frames JPEG en mémoire → canvas 60fps
 * - Scroll tracking vanilla (getBoundingClientRect) → immune aux overflow parents
 */

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// ─── Texte 3 phases ───────────────────────────────────────────────────────────
const PHASES = {
  fr: [
    {
      label: '01. Découverte',
      line1: 'On comprend',
      line2: 'votre vision',
      body: "Un appel de 30 minutes pour cerner vos objectifs, votre audience et ce qui vous différencie. Votre site commence ici.",
    },
    {
      label: '02. Conception',
      line1: 'On construit',
      line2: 'couche par couche',
      body: "Design, structure, copywriting : chaque élément est pensé pour convertir. Vous validez à chaque étape.",
    },
    {
      label: '03. Lancement',
      line1: 'Votre site',
      line2: 'prêt à convertir',
      body: "Mise en ligne en 7 à 14 jours. SEO, performance, mobile : tout est optimisé avant que vos premiers visiteurs arrivent.",
    },
  ],
  en: [
    {
      label: '01. Discovery',
      line1: 'We understand',
      line2: 'your vision',
      body: "A 30-minute call to understand your goals, your audience, and what sets you apart. Your site starts here.",
    },
    {
      label: '02. Build',
      line1: 'We build',
      line2: 'layer by layer',
      body: "Design, structure, copywriting: every element is crafted to convert. You validate at each step.",
    },
    {
      label: '03. Launch',
      line1: 'Your site',
      line2: 'ready to convert',
      body: "Live in 7 to 14 days. SEO, performance, mobile: everything is optimised before your first visitors arrive.",
    },
  ],
} as const;

const FRAME_COUNT = 40;
const JPEG_QUALITY = 0.8;
const SCROLL_MULTIPLIER = 5; // hauteur = 5× 100vh — plus de temps par phase

// object-fit: cover sur canvas
function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, cw: number, ch: number) {
  const ir = img.naturalWidth / img.naturalHeight;
  const cr = cw / ch;
  let sx: number, sy: number, sw: number, sh: number;
  if (cr > ir) { sw = img.naturalWidth; sh = sw / cr; sx = 0; sy = (img.naturalHeight - sh) / 2; }
  else         { sh = img.naturalHeight; sw = sh * cr; sy = 0; sx = (img.naturalWidth  - sw) / 2; }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

// ─── Composant ────────────────────────────────────────────────────────────────
export const ScrollVideoSection = () => {
  const { language } = useLanguage();
  const phases = PHASES[language as 'fr' | 'en'] ?? PHASES.fr;

  const containerRef  = useRef<HTMLDivElement>(null);
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const hiddenVideo   = useRef<HTMLVideoElement>(null);
  const framesRef     = useRef<HTMLImageElement[]>([]);
  const lastIdxRef    = useRef(-1);
  const progressRef   = useRef(0);
  const rafRef        = useRef<number>();

  const [loading,  setLoading]  = useState(true);
  const [loadPct,  setLoadPct]  = useState(0);
  const [phase,    setPhase]    = useState(0);
  const [progress, setProgress] = useState(0); // 0–1 pour barre UI

  // ── 1. Extraction frames (progressive) ───────────────────────────────────
  useEffect(() => {
    const video = hiddenVideo.current;
    if (!video) return;
    let cancelled = false;

    const run = async () => {
      if (video.readyState < 1) {
        await new Promise<void>(res => video.addEventListener('loadedmetadata', () => res(), { once: true }));
      }
      if (cancelled) return;

      const { videoWidth: vw, videoHeight: vh, duration } = video;
      const off = document.createElement('canvas');
      off.width = vw; off.height = vh;
      const ctx = off.getContext('2d')!;

      for (let i = 0; i < FRAME_COUNT; i++) {
        if (cancelled) return;
        video.currentTime = (i / (FRAME_COUNT - 1)) * duration;
        await new Promise<void>(res => video.addEventListener('seeked', () => res(), { once: true }));
        if (cancelled) return;

        ctx.drawImage(video, 0, 0, vw, vh);
        const dataUrl = off.toDataURL('image/jpeg', JPEG_QUALITY);

        await new Promise<void>(res => {
          const img = new Image();
          img.onload = () => {
            framesRef.current.push(img);

            // Afficher dès la première frame : plus besoin d'attendre
            if (i === 0) {
              setLoading(false);
              const canvas = canvasRef.current;
              if (canvas) {
                const w = parseInt(canvas.style.width)  || canvas.width;
                const h = parseInt(canvas.style.height) || canvas.height;
                drawCover(canvas.getContext('2d')!, img, w, h);
              }
            }

            setLoadPct(Math.round((i + 1) / FRAME_COUNT * 100));
            res();
          };
          img.src = dataUrl;
        });
      }
    };

    run().catch(console.error);
    return () => { cancelled = true; };
  }, []);

  // ── 2. Canvas resize (retina-aware) ───────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = window.innerWidth  + 'px';
      canvas.style.height = window.innerHeight + 'px';
      const ctx = canvas.getContext('2d')!;
      ctx.scale(dpr, dpr);
      const frame = framesRef.current[Math.max(0, lastIdxRef.current)];
      if (frame) drawCover(ctx, frame, window.innerWidth, window.innerHeight);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // ── 3. Scroll vanilla → progress ─────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect     = el.getBoundingClientRect();
      const totalDist = el.offsetHeight - window.innerHeight;
      const scrolled  = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalDist));
      progressRef.current = p;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── 4. RAF : dessiner la frame courante ───────────────────────────────────
  useEffect(() => {
    const tick = () => {
      const p      = progressRef.current;
      const frames = framesRef.current;
      const canvas = canvasRef.current;

      if (frames.length && canvas) {
        // Utilise FRAME_COUNT comme dénominateur pour garder la synchro scroll↔frame
        // même si toutes les frames ne sont pas encore extraites
        const targetIdx = Math.floor(p * (FRAME_COUNT - 1));
        const idx = Math.min(targetIdx, frames.length - 1);
        if (idx !== lastIdxRef.current) {
          lastIdxRef.current = idx;
          const w = parseInt(canvas.style.width)  || canvas.width;
          const h = parseInt(canvas.style.height) || canvas.height;
          drawCover(canvas.getContext('2d')!, frames[idx], w, h);
        }
      }

      // UI state (batché, moins souvent)
      setProgress(p);
      if      (p < 0.35) setPhase(0);
      else if (p < 0.68) setPhase(1);
      else               setPhase(2);

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  return (
    /* ── Zone de scroll : SCROLL_MULTIPLIER × 100vh ── */
    <div
      ref={containerRef}
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh`, position: 'relative' }}
    >
      {/* ── Sticky viewport ───────────────────────────────────────────────── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'hsl(30 20% 98%)',
        }}
      >
        {/* Vidéo cachée pour extraction */}
        <video ref={hiddenVideo} src="/videos/site-animation.mp4"
          muted playsInline preload="auto" style={{ display: 'none' }} />

        {/* Canvas principal */}
        <canvas ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
                   opacity: loading ? 0 : 1, transition: 'opacity 0.7s ease' }} />

        {/* ── Loader ──────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {loading && (
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{ position: 'absolute', inset: 0, display: 'flex',
                       flexDirection: 'column', alignItems: 'center',
                       justifyContent: 'center', gap: 20,
                       background: 'hsl(30 20% 98%)' }}>
              <p style={{ fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.22em',
                           textTransform: 'uppercase', color: 'hsl(340 65% 47%)' }}>
                {language === 'fr' ? 'Préparation' : 'Loading'} {loadPct}%
              </p>
              <div style={{ width: 160, height: 1, background: 'hsl(30 10% 88%)', overflow: 'hidden', borderRadius: 2 }}>
                <motion.div style={{ height: '100%', background: 'hsl(340 65% 47%)', borderRadius: 2 }}
                  animate={{ width: `${loadPct}%` }} transition={{ duration: 0.1 }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Fondu haut — masque la délimitation avec la section du dessus ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '18%',
          pointerEvents: 'none', zIndex: 10,
          background: 'linear-gradient(to bottom, hsl(30 20% 98%) 0%, hsl(30 20% 98% / 0.7) 40%, transparent 100%)',
        }} />

        {/* ── Fondu bas — masque la délimitation avec la section du dessous ── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '18%',
          pointerEvents: 'none', zIndex: 10,
          background: 'linear-gradient(to top, hsl(30 20% 98%) 0%, hsl(30 20% 98% / 0.7) 40%, transparent 100%)',
        }} />

        {/* ── Carte texte — glass premium, côté gauche ─────────────────────── */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', zIndex: 5, pointerEvents: 'none',
        }}>
          <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>
            <motion.div
              style={{
                display: 'inline-flex', flexDirection: 'column',
                maxWidth: 460, padding: '2.5rem 2.8rem',
                background: 'hsl(30 20% 98% / 0.72)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                borderRadius: 20,
                border: '1px solid hsl(30 10% 88% / 0.9)',
                boxShadow: '0 8px 40px hsl(30 10% 15% / 0.06), 0 1px 0 hsl(0 0% 100% / 0.8) inset',
              }}
            >
              {/* Label */}
              <AnimatePresence mode="wait">
                <motion.p key={`lbl-${phase}`}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontSize: 10, fontFamily: 'monospace', letterSpacing: '0.22em',
                           textTransform: 'uppercase', marginBottom: 20, color: 'hsl(340 65% 47%)' }}>
                  {phases[phase].label}
                </motion.p>
              </AnimatePresence>

              {/* Headline */}
              <AnimatePresence mode="wait">
                <motion.h2 key={`h-${phase}`}
                  initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontWeight: 600, lineHeight: 1.02, letterSpacing: '-0.03em',
                           marginBottom: 16, fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                           color: 'hsl(30 10% 12%)' }}>
                  {phases[phase].line1}<br />
                  <span style={{ color: 'hsl(340 65% 47%)' }}>{phases[phase].line2}</span>
                </motion.h2>
              </AnimatePresence>

              {/* Body */}
              <AnimatePresence mode="wait">
                <motion.p key={`b-${phase}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 0.72 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.36, delay: 0.07 }}
                  style={{ fontSize: 14.5, lineHeight: 1.7, color: 'hsl(30 8% 30%)' }}>
                  {phases[phase].body}
                </motion.p>
              </AnimatePresence>

              {/* Séparateur */}
              <div style={{ height: 1, background: 'hsl(30 10% 85%)', margin: '20px 0' }} />

              {/* Dots de phase */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                {phases.map((_, i) => (
                  <motion.div key={i}
                    animate={{ width: i === phase ? 22 : 5, opacity: i === phase ? 1 : 0.25 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: 5, borderRadius: 3, background: 'hsl(340 65% 47%)' }} />
                ))}
                <span style={{ marginLeft: 10, fontSize: 10, fontFamily: 'monospace',
                               letterSpacing: '0.15em', color: 'hsl(30 5% 55%)',
                               textTransform: 'uppercase' }}>
                  {phase + 1} / {phases.length}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Barre de progression fine en bas ─────────────────────────────── */}
        <div style={{
          position: 'absolute', bottom: 36, left: 0, right: 0,
          padding: '0 clamp(1.5rem, 5vw, 5rem)', pointerEvents: 'none', zIndex: 11,
        }}>
          <div style={{ height: 1, background: 'hsl(30 10% 82% / 0.6)', borderRadius: 1, overflow: 'hidden' }}>
            <motion.div style={{ height: '100%', background: 'hsl(340 65% 47% / 0.7)', borderRadius: 1 }}
              animate={{ width: `${progress * 100}%` }} transition={{ duration: 0.05 }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScrollVideoSection;
