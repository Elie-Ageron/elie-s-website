import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useCalendly } from '@/contexts/CalendlyContext';

export const CALENDLY_URL = 'https://calendly.com/web-elieageron/30min';

const iframeSrc = `${CALENDLY_URL}?embed_domain=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}&embed_type=Inline&hide_gdpr_banner=1`;

export function CalendlyPopup() {
  const { isOpen, closeCalendly } = useCalendly();

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeCalendly();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeCalendly]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Hidden preload iframe - always in DOM so Calendly loads on site entry */}
      <iframe
        src={iframeSrc}
        title="Calendly preload"
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: 'fixed',
          width: 0,
          height: 0,
          border: 0,
          opacity: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* Popup overlay */}
      <div
        className={`fixed inset-0 z-[300] flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen
            ? 'bg-black/70 backdrop-blur-sm opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => { if (e.target === e.currentTarget) closeCalendly(); }}
        role="dialog"
        aria-modal={isOpen ? true : undefined}
        aria-hidden={!isOpen}
        aria-label="Prendre rendez-vous"
      >
        <div
          className={`relative bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl transition-transform duration-300 ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
          style={{ height: 'min(700px, 85vh)' }}
        >
          <button
            onClick={closeCalendly}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Visible iframe inside popup - same URL = browser uses cached version */}
          <iframe
            src={iframeSrc}
            className="w-full h-full border-0"
            title="Prendre rendez-vous avec Elie Ageron"
          />
        </div>
      </div>
    </>
  );
}
