import { Link } from 'react-router-dom';
import { whatsapp } from '../../shared/config/contact';

export default function TourCard({ tour }) {
  return <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 card-shadow card-hover">
    <img src={tour.image} alt={tour.title} className="w-full h-52 object-cover" />
    <div className="p-5"><span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-blue-50 rounded-full px-3 py-1"><i className={`fas ${tour.icon}`} aria-hidden="true" />{tour.tag}</span><h3 className="font-bold text-lg mt-3 text-slate-900">{tour.title}</h3><p className="text-sm text-slate-600 mt-2 min-h-10">{tour.description}</p><div className="mt-4 flex items-center justify-between"><span className="inline-flex items-center gap-1.5 font-bold text-primary"><i className="fas fa-tag text-xs" aria-hidden="true" />{tour.price}</span><span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><i className="fas fa-users" aria-hidden="true" />private trip</span></div><div className="flex gap-2 mt-5"><Link to={`/tour/${tour.slug}`} className="flex-1 inline-flex items-center justify-center gap-1.5 border border-slate-200 rounded-lg py-2 text-xs font-semibold hover:border-primary"><i className="fas fa-circle-info" aria-hidden="true" />Detail</Link><a href={whatsapp(`Halo Fin Transport and Tour, saya ingin booking ${tour.title}.`)} className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-white rounded-lg py-2 text-xs font-semibold hover:bg-slate-900"><i className="fab fa-whatsapp" aria-hidden="true" />Booking</a></div></div>
  </article>;
}
