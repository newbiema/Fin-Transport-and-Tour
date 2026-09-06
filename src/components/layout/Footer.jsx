import { contact, whatsapp } from '../../shared/config/contact';

export default function Footer() {
  return <footer id="footer" className="pt-12 pb-8 bg-white border-t border-slate-200 mt-10 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      <div><div className="flex gap-2 items-center"><img className="w-10 h-10 object-contain" src="/images/logo.png" alt="Logo Fin Transport and Tour" /><b>Fin Transport and Tour</b></div><p className="text-sm text-slate-600 mt-3">Partner lokal untuk paket wisata, rental kendaraan, dan itinerary custom di Lombok.</p></div>
      <div><h3 className="font-semibold mb-3">Navigasi</h3><div className="grid gap-2 text-sm text-slate-500"><a href="/#destinations">Paket wisata</a><a href="/#rental">Rental kendaraan</a><a href="/#about">Tentang kami</a></div></div>
      <div><h3 className="font-semibold mb-3">Kontak</h3><ul className="space-y-2 text-sm text-slate-600"><li className="flex gap-2"><i className="fas fa-phone text-primary mt-1" /><a href={`tel:${contact.phoneInternational}`}>{contact.phone}</a></li><li className="flex gap-2"><i className="fas fa-envelope text-primary mt-1" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li><li className="flex gap-2"><i className="fas fa-location-dot text-primary mt-1" /><span>{contact.address}</span></li></ul><div className="flex gap-4 mt-4 text-primary"><a href={contact.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook Jefry Ramdan Z"><i className="fab fa-facebook text-xl" /></a><a href={contact.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Jefry Sn"><i className="fab fa-instagram text-xl" /></a><a href={whatsapp()} aria-label="WhatsApp"><i className="fab fa-whatsapp text-xl" /></a></div></div>
    </div>
    <p className="max-w-6xl mx-auto border-t mt-8 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Fin Transport and Tour. All rights reserved.</p>
  </footer>;
}
