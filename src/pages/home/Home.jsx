import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import TourCard from '../../components/tour/TourCard';
import { tours } from '../../features/tours/data/tours';
import { contact, whatsapp } from '../../shared/config/contact';

const features = [
  ['fa-route', 'Rute yang fleksibel', 'Itinerary bisa disesuaikan dengan waktu dan minat perjalananmu.'],
  ['fa-car-side', 'Kendaraan nyaman', 'Kendaraan bersih dengan driver lokal yang memahami rute Lombok.'],
  ['fa-headset', 'Bantuan yang responsif', 'Tim kami siap membantu dari konsultasi hingga perjalanan selesai.'],
];

export default function Home() {
  return <><Header /><main>
    <section id="home" className="pt-16 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-primary text-xs tracking-[.18em] ">fintransportandtour.com</p>
          <h1 className="hero-title text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mt-4">Jelajah Lombok dengan lebih nyaman.</h1>
          <p className="text-slate-600 leading-7 mt-5 max-w-xl">Private tour, island hopping, dan itinerary custom bersama partner lokal yang memahami Lombok.</p>
          <div className="flex flex-wrap gap-3 mt-7"><a href="#destinations" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-slate-900 transition"><i className="fas fa-map-marked-alt" /> Lihat paket</a><a href={whatsapp()} className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 px-5 py-3 rounded-lg text-sm font-bold hover:border-primary hover:text-primary transition"><i className="fab fa-whatsapp text-primary" /> Hubungi admin</a></div>
          <div className="grid grid-cols-3 gap-5 mt-10 pt-7 border-t border-slate-200"><div><p className="font-bold text-slate-900">Lokal</p><p className="text-xs text-slate-500 mt-1">Tim Lombok</p></div><div><p className="font-bold text-slate-900">Private</p><p className="text-xs text-slate-500 mt-1">Trip fleksibel</p></div><div><p className="font-bold text-slate-900">Setiap hari</p><p className="text-xs text-slate-500 mt-1">08.00–21.00</p></div></div>
        </div>
        <div className="relative"><img src="/images/hero.jpg" alt="Pemandangan pantai Lombok" className="w-full h-80 md:h-[470px] object-cover rounded-2xl" /><div className="absolute left-5 bottom-5 bg-white px-4 py-3 rounded-lg shadow-sm"><p className="text-xs text-slate-500">Berbasis di</p><p className="text-sm font-bold text-slate-900"><i className="fas fa-location-dot text-primary mr-1" /> {contact.address}</p></div></div>
      </div>
    </section>

    <section className="py-16 px-4 sm:px-6"><div className="max-w-6xl mx-auto"><div className="max-w-2xl"><p className="text-primary text-xs tracking-[.16em] font-bold">KENAPA KAMI</p><h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3">Perjalanan yang direncanakan dengan baik.</h2></div><div className="grid md:grid-cols-3 gap-8 mt-10">{features.map(([icon, title, text]) => <article key={title} className="border-t-2 border-primary pt-5"><i className={'fas ' + icon + ' text-primary text-xl'} /><h3 className="font-bold text-slate-900 mt-4">{title}</h3><p className="text-sm leading-6 text-slate-600 mt-2">{text}</p></article>)}</div></div></section>

    <section id="about" className="py-16 px-4 sm:px-6 bg-slate-50 border-y border-slate-200"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"><img src="/images/about.jpg" alt="Tim lokal Lombok" className="rounded-2xl object-cover h-72 md:h-96 w-full" /><div><p className="text-primary text-xs tracking-[.16em] font-bold">TENTANG KAMI</p><h2 className="text-3xl font-bold text-slate-900 mt-3">Bukan sekadar antar-jemput.</h2><p className="text-slate-600 mt-5 leading-7">Fin Transport and Tour membantu merencanakan perjalanan yang sesuai dengan ritme kamu. Mulai dari transportasi, destinasi, hingga waktu perjalanan, semuanya disiapkan dengan komunikasi yang jelas.</p><a href={whatsapp('Halo Fin Transport and Tour, saya ingin konsultasi itinerary.')} className="inline-flex items-center gap-2 mt-6 text-primary text-sm font-bold hover:text-slate-900 transition">Konsultasi itinerary <i className="fas fa-arrow-right text-xs" /></a></div></div></section>

    <section id="destinations" className="py-16 px-4 sm:px-6"><div className="max-w-6xl mx-auto"><div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-9"><div><p className="text-primary text-xs tracking-[.16em] font-bold">PAKET WISATA</p><h2 className="text-3xl font-bold text-slate-900 mt-3">Pilih perjalananmu.</h2></div><p className="text-sm text-slate-500">Private trip untuk pengalaman yang lebih fleksibel.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{tours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></div></section>

  </main><Footer /></>;
}
