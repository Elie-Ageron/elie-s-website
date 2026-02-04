import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Configuration
// To activate: Add your GA4 Measurement ID (G-XXXXXXXXXX) 
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Declare gtag on window
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Initialize GA4
const initGA = () => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  
  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll send manually for SPA
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
  });
};

// Track CTA clicks - Call this on button clicks
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    cta_location: ctaLocation,
  });
};

// Track Calendly booking intent
export const trackBookingIntent = (source: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'booking_intent', {
    event_category: 'conversion',
    event_label: 'calendly_click',
    source: source,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'scroll_depth', {
    event_category: 'engagement',
    depth_percentage: depth,
  });
};

// Analytics Provider Component
const Analytics = () => {
  const location = useLocation();

  // Initialize GA on mount
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default Analytics;
