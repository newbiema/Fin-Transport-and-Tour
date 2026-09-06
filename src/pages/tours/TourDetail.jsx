import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { tours } from '../../features/tours/data/tours';
import { whatsapp } from '../../shared/config/contact';

export default function TourDetail() {
  const { slug } = useParams();
  const tour = tours.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(tour?.image);

  if (!tour) return <><Header /><main className="pt-32 max-w-3xl mx-auto px-4 text-center"><p className="text-primary font-bold">404</p><h1 className="text-3xl font-bold mt-2">Paket tidak ditemukan</h1><Link className="text-primary font-bold mt-5 inline-block" to="/">Kembali ke beranda</Link></main><Footer /></>;

  const images = [tour.image, ...tour.gallery];
  return <div className="bg-slate-50 min-h-screen"><Header /><main className="pt-24 pb-8">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-7">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-semibold transition"><i className="fas fa-arrow-left text-xs" /> Semua paket wisata</Link>
      <div className="grid lg:grid-cols-12 gap-8 mt-5 items-start">
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-lg"><img src={activeImage} alt={tour.title} className="w-full h-[360px] md:h-[470px] object-cover" /><div className="absolute top-5 left-5 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-xs font-bold text-primary shadow-sm">{tour.tag}</div></div>
          <div className="grid grid-cols-4 gap-3 mt-4">{images.map((image, index) => <button type="button" key={image} onClick={() => setActiveImage(image)} className={'relative h-20 md:h-24 rounded-xl overflow-hidden border-2 transition ' + (activeImage === image ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-70 hover:opacity-100')} aria-label={'Lihat foto ' + (index + 1)}><img src={image} alt="" className="w-full h-full object-cover" /></button>)}</div>
        </div>
        <aside className="lg:col-span-5 lg:sticky lg:top-24"><div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100"><p className="text-xs tracking-[.16em] font-bold text-primary">PRIVATE LOMBOK EXPERIENCE</p><h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mt-3">{tour.title}</h1><p className="text-slate-600 leading-7 mt-4">{tour.description}</p>
          <div className="grid grid-cols-2 gap-3 mt-6"><div className="rounded-2xl bg-slate-50 p-4"><i className="far fa-clock text-primary" /><p className="text-xs font-semibold text-slate-400 mt-2">DURASI</p><p className="text-sm font-bold text-slate-700 mt-1">Full day trip</p></div><div className="rounded-2xl bg-slate-50 p-4"><i className="fas fa-user-friends text-primary" /><p className="text-xs font-semibold text-slate-400 mt-2">TIPE TRIP</p><p className="text-sm font-bold text-slate-700 mt-1">Private group</p></div></div>
          <div className="border-y border-slate-100 py-5 mt-6 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold text-slate-400">MULAI DARI</p><p className="text-3xl font-extrabold text-primary mt-1">{tour.price}</p></div><span className="text-xs text-right leading-5 text-slate-500">Harga dapat menyesuaikan<br />jumlah peserta</span></div>
          <a href={whatsapp('Halo Fin Transport and Tour, saya ingin booking ' + tour.title + '.')} className="w-full mt-6 inline-flex justify-center items-center gap-2 bg-primary text-white font-bold rounded-xl px-5 py-4 hover:bg-slate-900 transition shadow-md"><i className="fab fa-whatsapp text-lg" /> Booking via WhatsApp</a><p className="text-center text-xs text-slate-400 mt-3"><i className="fas fa-shield-alt mr-1" /> Respon admin setiap hari, 08.00–21.00 WITA</p></div></aside>
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8"><div className="grid md:grid-cols-2 gap-6">
      <article className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"><div className="flex items-center gap-3"><span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 inline-flex items-center justify-center"><i className="fas fa-check" /></span><div><p className="text-xs text-slate-400 font-bold tracking-wider">PAKET PERJALANAN</p><h2 className="font-bold text-xl text-slate-900">Sudah termasuk</h2></div></div><ul className="mt-6 space-y-4">{tour.includes.map((item) => <li key={item} className="text-sm text-slate-600 flex gap-3"><i className="fas fa-check-circle text-teal-500 mt-0.5" />{item}</li>)}</ul></article>
      <article className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"><div className="flex items-center gap-3"><span className="w-10 h-10 rounded-xl bg-blue-50 text-primary inline-flex items-center justify-center"><i className="fas fa-route" /></span><div><p className="text-xs text-slate-400 font-bold tracking-wider">ALUR PERJALANAN</p><h2 className="font-bold text-xl text-slate-900">Rencana perjalanan</h2></div></div><ol className="mt-6 space-y-4">{tour.itinerary.map((item, index) => <li key={item} className="flex gap-4 text-sm text-slate-600"><span className="w-7 h-7 shrink-0 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center justify-center">{String(index + 1).padStart(2, '0')}</span><span className="pt-1">{item}</span></li>)}</ol></article>
    </div></section>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8"><div className="rounded-3xl surface-dark p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6"><div><p className="text-blue-100 font-semibold text-sm">MASIH BINGUNG MEMILIH PAKET?</p><h2 className="text-2xl font-bold mt-2">Konsultasikan rencana trip-mu dengan kami.</h2></div><a href={whatsapp('Halo Fin Transport and Tour, saya ingin konsultasi itinerary.')} className="shrink-0 bg-white text-primary px-5 py-3 rounded-xl font-bold text-sm text-center">Konsultasi Gratis</a></div></section>
  </main><Footer /></div>;
}
