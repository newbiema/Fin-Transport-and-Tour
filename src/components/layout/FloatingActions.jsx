import { useEffect, useState } from 'react';
import { whatsapp } from '../../shared/config/contact';
import { copy } from '../../shared/content/siteContent';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setShowScrollTop(window.scrollY > 500);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  useEffect(() => {
    const footer = document.getElementById('footer');
    if (!footer || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: footerVisible ? 0 : 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.35, ease: 'easeOut' }} className={'floating-actions fixed right-4 sm:right-6 z-40 flex flex-col items-end gap-3 ' + (footerVisible ? 'floating-actions-hidden' : '')}>
    <AnimatePresence>{showScrollTop && <motion.button type="button" onClick={scrollToTop} initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : 8 }} transition={{ duration: reducedMotion ? 0 : 0.2 }} className="floating-action w-10 h-10 inline-flex items-center justify-center rounded-md border border-[#cfc2b1] bg-[#faf7f0] text-[#686c64] hover:border-[#24516c] hover:text-primary transition-colors" aria-label={copy.floating.scrollTopLabel}><i className="fas fa-arrow-up" aria-hidden="true" /></motion.button>}</AnimatePresence>
    <motion.a whileHover={reducedMotion ? undefined : { y: -2 }} whileTap={{ scale: 0.97 }} href={whatsapp(copy.floating.bookingMessage)} target="_blank" rel="noopener noreferrer" className="floating-action w-12 h-12 inline-flex items-center justify-center rounded-md border border-[#1b3e53] bg-primary text-white hover:bg-[#1b3e53] transition-colors" aria-label={copy.floating.whatsappLabel}><i className="fab fa-whatsapp text-2xl" aria-hidden="true" /></motion.a>
  </motion.div>;
}
