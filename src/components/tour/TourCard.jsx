import { Link } from 'react-router-dom';
import { whatsapp } from '../../shared/config/contact';
import { copy } from '../../shared/content/siteContent';
import { motion, useReducedMotion } from 'motion/react';

export default function TourCard({ tour, index = 0, className = '' }) {
  const reducedMotion = useReducedMotion();

  return <motion.article initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.055, ease: 'easeOut' }} whileHover={reducedMotion ? undefined : { y: -3 }} className={`h-full bg-[#faf7f0] rounded-lg overflow-hidden border border-[#cfc2b1] card-hover flex flex-col ${className}`}>
    <div className="overflow-hidden"><motion.img whileHover={reducedMotion ? undefined : { scale: 1.025 }} transition={{ duration: 0.35, ease: 'easeOut' }} src={tour.image} alt={tour.title} className="w-full h-52 sm:h-56 object-cover" /></div>
    <div className="p-5 sm:p-6 flex flex-col grow"><p className="inline-flex items-center gap-2 text-xs font-bold tracking-[.08em] text-[#686c64]"><i className={`fas ${tour.icon}`} aria-hidden="true" />{tour.tag}</p><h3 className="font-bold text-xl leading-snug mt-3 text-[#2b312d]">{tour.title}</h3><p className="text-sm leading-6 text-slate-700 mt-2 mb-6">{tour.description}</p><div className="mt-auto pt-4 border-t border-[#cfc2b1] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3"><span className="font-bold text-primary">{tour.price}</span><span className="inline-flex items-center gap-1.5 text-xs text-slate-600"><i className="fas fa-users" aria-hidden="true" />{copy.tour.privateTrip}</span></div><div className="flex items-center justify-between gap-3 mt-4"><Link to={`/tour/${tour.slug}`} className="min-h-11 inline-flex items-center gap-1.5 text-xs font-bold text-[#686c64] hover:text-primary transition-colors"><i className="fas fa-circle-info" aria-hidden="true" />{copy.actions.tourDetails}</Link><a href={whatsapp(`Hello, I would like to book the ${tour.title}.`)} className="min-h-11 inline-flex items-center justify-center gap-1.5 bg-primary text-white rounded-md px-4 py-2 text-xs font-bold hover:bg-[#1b3e53] transition-colors"><i className="fab fa-whatsapp" aria-hidden="true" />{copy.actions.book}</a></div></div>
  </motion.article>;
}
