import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import TourCard from '../../components/tour/TourCard';
import { tours } from '../../features/tours/data/tours';
import { contact, whatsapp } from '../../shared/config/contact';
import { copy } from '../../shared/content/siteContent';
import { motion, useReducedMotion } from 'motion/react';

const reviews = [
  {
    name: 'Oliver Bennett',
    trip: 'Private Lombok Tour',
    initials: 'OB',
    text: 'The driver was friendly and incredibly helpful with planning our route. We got to see so many places without ever feeling rushed.',
  },
  {
    name: 'Sophia Anderson',
    trip: 'Gili Island Trip',
    initials: 'SA',
    text: 'Communication was quick and easy from the moment we booked. The car was comfortable, and the itinerary was flexible around our needs.',
  },
  {
    name: 'Lucas Martin',
    trip: 'Custom Family Trip',
    initials: 'LM',
    text: 'Our family holiday was so much more relaxing. Everything was well organized, and the team was always helpful and on time.',
  },
];

export default function Home() {
  const { home, actions } = copy;
  const reducedMotion = useReducedMotion();
  const heroItem = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: reducedMotion ? 0 : 0.5, ease: 'easeOut' } },
  };
  const sectionReveal = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reducedMotion ? 0 : 0.55, ease: 'easeOut' },
  };

  return <><Header /><main>
    <section id="home" className="scroll-mt-20 pt-16 surface-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20 grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <motion.div className="lg:py-8" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.09 } } }}>
          <motion.p variants={heroItem} className="text-primary text-xs font-bold tracking-[.12em]">{home.heroKicker}</motion.p>
          <motion.h1 variants={heroItem} className="hero-title text-[2.6rem] sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#2b312d] leading-[1.08] mt-4 max-w-xl">{home.heroTitle}</motion.h1>
          <motion.p variants={heroItem} className="text-slate-700 text-[1.03rem] leading-8 mt-6 max-w-lg">{home.heroText}</motion.p>
          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-3 mt-8"><motion.a whileHover={reducedMotion ? undefined : { y: -1 }} whileTap={{ scale: 0.99 }} href={whatsapp('Hello, I would like to plan a Lombok trip.')} className="w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-md text-sm font-bold hover:bg-[#1b3e53] transition-colors"><i className="fab fa-whatsapp" aria-hidden="true" /> {actions.bookWhatsApp}</motion.a><motion.a whileHover={reducedMotion ? undefined : { y: -1 }} whileTap={{ scale: 0.99 }} href="#destinations" className="w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-2 border border-[#cfc2b1] text-[#2b312d] px-5 py-3 rounded-md text-sm font-bold hover:border-[#686c64] hover:bg-white/40 transition-colors"><i className="fas fa-map-marked-alt" aria-hidden="true" /> {actions.viewTours}</motion.a></motion.div>
          <motion.div variants={heroItem} className="grid grid-cols-3 gap-3 sm:gap-5 mt-9 pt-6 border-t border-[#cfc2b1]"><div><p className="font-bold text-[#2b312d]">{home.local}</p><p className="text-xs text-slate-600 mt-1">{home.localDetail}</p></div><div><p className="font-bold text-[#2b312d]">{home.private}</p><p className="text-xs text-slate-600 mt-1">{home.privateDetail}</p></div><div><p className="font-bold text-[#2b312d]">{home.available}</p><p className="text-xs text-slate-600 mt-1">{home.availableDetail}</p></div></motion.div>
        </motion.div>
        <motion.figure initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reducedMotion ? 0 : 0.7, ease: 'easeOut', delay: reducedMotion ? 0 : 0.18 }} className="lg:justify-self-end w-full max-w-2xl"><img src="/images/hero.jpg" alt="Lombok coastline" className="w-full h-[360px] sm:h-[440px] lg:h-[560px] object-cover rounded-lg" /><figcaption className="flex items-start gap-3 mt-4 text-sm text-slate-700"><i className="fas fa-location-dot text-primary mt-0.5" aria-hidden="true" /><span><b className="font-bold text-[#2b312d]">{home.basedIn}</b><br />{contact.address}</span></figcaption></motion.figure>
      </div>
    </section>

    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white"><div className="max-w-6xl mx-auto grid lg:grid-cols-[.72fr_1.28fr] gap-10 lg:gap-20"><motion.div {...sectionReveal}><p className="text-[#84684b] text-sm font-bold">{home.planningKicker}</p><h2 className="text-3xl lg:text-4xl font-bold text-[#2b312d] leading-tight mt-3">{home.planningTitle}</h2></motion.div><motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: reducedMotion ? 0 : 0.08 }} className="divide-y divide-[#cfc2b1] border-y border-[#cfc2b1]">{home.features.map(([icon, title, text]) => <article key={title} className="grid grid-cols-[2.25rem_1fr] gap-4 py-5 first:pt-5 last:pb-5"><i className={'fas ' + icon + ' text-[#686c64] text-lg mt-1'} aria-hidden="true" /><div><h3 className="font-bold text-[#2b312d]">{title}</h3><p className="text-sm leading-6 text-slate-700 mt-1.5 max-w-xl">{text}</p></div></article>)}</motion.div></div></section>

    <section id="about" className="scroll-mt-20 py-14 md:py-20 px-4 sm:px-6 surface-ivory"><div className="max-w-6xl mx-auto grid md:grid-cols-[1.08fr_.92fr] gap-10 md:gap-16 items-center"><motion.img {...sectionReveal} initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.015 }} whileInView={{ opacity: 1, scale: 1 }} alt="Local Lombok travel team" src="/images/about.jpg" className="rounded-lg object-cover h-80 md:h-[28rem] w-full" /><motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: reducedMotion ? 0 : 0.08 }} className="md:py-6"><p className="text-[#84684b] text-sm font-bold">{home.aboutKicker}</p><h2 className="text-3xl lg:text-4xl font-bold text-[#2b312d] leading-tight mt-3">{home.aboutTitle}</h2><p className="text-slate-700 mt-6 leading-8">{home.aboutText}</p><motion.a whileHover={reducedMotion ? undefined : { x: 2 }} href={whatsapp('Hello, I would like to talk through my Lombok itinerary.')} className="inline-flex items-center gap-2 mt-7 text-primary text-sm font-bold hover:text-[#1b3e53] transition-colors">{actions.consultItinerary} <i className="fas fa-arrow-right text-xs" aria-hidden="true" /></motion.a></motion.div></div></section>



    <section id="destinations" className="scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6 surface-sand"><div className="max-w-6xl mx-auto"><motion.div {...sectionReveal} className="grid md:grid-cols-[1fr_auto] md:items-end gap-5 mb-10 md:mb-12"><div><p className="text-[#84684b] text-sm font-bold">{home.toursKicker}</p><h2 className="text-3xl lg:text-4xl font-bold text-[#2b312d] leading-tight mt-3">{home.toursTitle}</h2></div><p className="text-sm leading-6 text-slate-700 md:max-w-xs md:text-right">{home.toursText}</p></motion.div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">{tours.map((tour, index) => <TourCard key={tour.slug} tour={tour} index={index} className={index === tours.length - 1 ? 'sm:col-span-2 sm:w-[calc(50%-0.625rem)] sm:justify-self-center lg:col-span-1 lg:w-full lg:col-start-2' : ''} />)}</div></div></section>
    <section id="reviews" className="scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6 surface-warm">
      <div className="max-w-6xl mx-auto">
        <motion.div {...sectionReveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 pb-8 border-b border-[#cfc2b1]">
          <div className="max-w-2xl"><p className="text-[#84684b] text-sm font-bold">{home.reviewsKicker}</p><h2 className="text-3xl lg:text-4xl font-bold text-[#2b312d] leading-tight mt-3">{home.reviewsTitle}</h2></div>
          <motion.a whileHover={reducedMotion ? undefined : { x: 2 }} href={whatsapp('Hello, I would like to share feedback about my Lombok trip.')} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-[#1b3e53] transition-colors">{actions.shareReview} <i className="fas fa-arrow-right text-xs" aria-hidden="true" /></motion.a>
        </motion.div>
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-8 mt-10">
          {reviews.map((review, index) => <motion.article key={review.name} initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.07 }} className={(index === 0 ? 'md:col-span-6 lg:col-span-5 ' : 'md:col-span-6 lg:col-span-3 ') + 'border-t border-[#cfc2b1] pt-5'}>
            <div className="flex gap-1 text-[#84684b] text-xs" aria-label={home.ratingLabel}>{Array.from({ length: 5 }, (_, starIndex) => <i key={starIndex} className="fas fa-star" aria-hidden="true" />)}</div>
            <blockquote className={(index === 0 ? 'text-xl leading-8 ' : 'text-base leading-7 ') + 'text-[#2b3d39] mt-4'}>&ldquo;{review.text}&rdquo;</blockquote>
            <div className="flex items-center gap-3 mt-6"><div className="w-9 h-9 rounded-full border border-[#cfc2b1] text-[#686c64] flex items-center justify-center text-xs font-bold">{review.initials}</div><div><p className="text-sm font-bold text-[#2b312d]">{review.name}</p><p className="text-xs text-slate-600 mt-0.5">{review.trip}</p></div></div>
          </motion.article>)}
        </div>
      </div>
    </section>
  </main><Footer /></>;
}
