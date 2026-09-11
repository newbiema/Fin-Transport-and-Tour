import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { tours } from '../../features/tours/data/tours';
import { whatsapp } from '../../shared/config/contact';
import { copy } from '../../shared/content/siteContent';

export default function TourDetail() {
  const { slug } = useParams();
  const tour = tours.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(tour?.image);

  if (!tour) return <><Header /><main className="pt-32 max-w-3xl mx-auto px-4 text-center"><p className="text-primary font-bold">404</p><h1 className="text-3xl font-bold mt-2">{copy.tour.notFound}</h1><Link className="text-primary font-bold mt-5 inline-block" to="/">{copy.tour.backHome}</Link></main><Footer /></>;

  const images = [tour.image, ...tour.gallery];
  return <div className="surface-warm min-h-screen"><Header /><main className="pt-24 pb-8">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-7">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary font-semibold transition-colors"><i className="fas fa-arrow-left text-xs" aria-hidden="true" /> {copy.tour.backToTours}</Link>
      <div className="grid lg:grid-cols-12 gap-8 mt-5 items-start">
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-xl bg-[#e4d9ca]"><img src={activeImage} alt={tour.title} className="w-full h-[360px] md:h-[470px] object-cover" /><div className="absolute top-5 left-5 rounded-md bg-[#faf7f0] px-3 py-2 text-xs font-bold text-primary">{tour.tag}</div></div>
          <div className="grid grid-cols-4 gap-3 mt-4">{images.map((image, index) => <button type="button" key={image} onClick={() => setActiveImage(image)} className={'relative h-20 md:h-24 rounded-md overflow-hidden border-2 transition ' + (activeImage === image ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-70 hover:opacity-100')} aria-label={`${copy.tour.photo} ${index + 1}`}><img src={image} alt="" className="w-full h-full object-cover" /></button>)}</div>
        </div>
        <aside className="lg:col-span-5 lg:sticky lg:top-24"><div className="bg-[#faf7f0] rounded-xl p-6 md:p-8 border border-[#cfc2b1]"><p className="text-xs tracking-[.12em] font-bold text-primary">{copy.tour.experience}</p><h1 className="text-3xl md:text-4xl font-extrabold text-[#2b312d] leading-tight mt-3">{tour.title}</h1><p className="text-slate-700 leading-7 mt-4">{tour.description}</p>
          <div className="grid grid-cols-2 gap-3 mt-6"><div className="rounded-lg surface-ivory p-4"><i className="far fa-clock text-primary" aria-hidden="true" /><p className="text-xs font-semibold text-slate-600 mt-2">{copy.tour.duration}</p><p className="text-sm font-bold text-slate-700 mt-1">{tour.duration || copy.tour.fullDay}</p></div><div className="rounded-lg surface-ivory p-4"><i className="fas fa-user-friends text-primary" aria-hidden="true" /><p className="text-xs font-semibold text-slate-600 mt-2">{copy.tour.tripType}</p><p className="text-sm font-bold text-slate-700 mt-1">{copy.tour.privateGroup}</p></div></div>
          <div className="border-y border-[#cfc2b1] py-5 mt-6 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold text-slate-600">{copy.tour.startingFrom}</p><p className="text-3xl font-extrabold text-primary mt-1">{tour.price}</p></div><span className="text-xs text-right leading-5 text-slate-600">{copy.tour.priceNote.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</span></div>
          <a href={whatsapp(`Hello, I would like to book the ${tour.title}.`)} className="w-full mt-6 inline-flex justify-center items-center gap-2 bg-primary text-white font-bold rounded-md px-5 py-4 hover:bg-[#1b3e53] transition-colors"><i className="fab fa-whatsapp text-lg" aria-hidden="true" /> {copy.actions.bookWhatsApp}</a><p className="text-center text-xs text-slate-600 mt-3"><i className="fas fa-shield-alt mr-1" aria-hidden="true" /> {copy.tour.bookingNote}</p></div></aside>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8"><div className="grid md:grid-cols-2 gap-6">
      <article className="surface-ivory rounded-xl p-7 border border-[#cfc2b1]"><div className="flex items-center gap-3"><span className="w-10 h-10 rounded-md bg-teal-50 text-teal-600 inline-flex items-center justify-center"><i className="fas fa-check" aria-hidden="true" /></span><div><p className="text-xs text-slate-600 font-bold tracking-wider">{copy.tour.includesKicker}</p><h2 className="font-bold text-xl text-[#2b312d]">{copy.tour.includesTitle}</h2></div></div><ul className="mt-6 space-y-4">{tour.includes.map((item) => <li key={item} className="text-sm text-slate-700 flex gap-3"><i className="fas fa-check-circle text-teal-500 mt-0.5" aria-hidden="true" />{item}</li>)}</ul></article>
      <article className="surface-ivory rounded-xl p-7 border border-[#cfc2b1]"><div className="flex items-center gap-3"><span className="w-10 h-10 rounded-md bg-blue-50 text-primary inline-flex items-center justify-center"><i className="fas fa-route" aria-hidden="true" /></span><div><p className="text-xs text-slate-600 font-bold tracking-wider">{copy.tour.itineraryKicker}</p><h2 className="font-bold text-xl text-[#2b312d]">{copy.tour.itineraryTitle}</h2></div></div><ol className="mt-6 space-y-4">{tour.itinerary.map((item, index) => <li key={item} className="flex gap-4 text-sm text-slate-700"><span className="w-7 h-7 shrink-0 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center">{String(index + 1).padStart(2, '0')}</span><span className="pt-1">{item}</span></li>)}</ol></article>
    </div></section>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8"><div className="rounded-3xl surface-dark p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6"><div><p className="text-blue-100 font-semibold text-sm">{copy.tour.helpKicker}</p><h2 className="text-2xl font-bold mt-2">{copy.tour.helpTitle}</h2></div><a href={whatsapp('Hello, I would like to talk through my Lombok itinerary.')} className="shrink-0 bg-white text-primary px-5 py-3 rounded-xl font-bold text-sm text-center">{copy.actions.planTrip}</a></div></section>
  </main><Footer /></div>;
}
