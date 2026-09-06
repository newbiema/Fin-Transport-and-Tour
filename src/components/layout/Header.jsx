import { useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsapp } from '../../shared/config/contact';

const links = [
  ['Home', '/#home'], ['Destinasi', '/#destinations'], ['Sewa Mobil', '/#rental'], ['Tentang', '/#about'], ['Kontak', '/#footer'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header>
    <nav className="fixed top-0 inset-x-0 z-50 nav-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src="/images/logo.png" alt="Logo Fin Transport and Tour" className="w-9 h-9 object-contain" />
            <span className="text-xs text-slate-900">fintransportandtour.com</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {links.map(([label, to]) => <a key={label} href={to} className="hover:text-primary transition">{label}</a>)}
          </div>
          <a href={whatsapp()} className="hidden md:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-900 transition shadow-md"><i className="fab fa-whatsapp" />Chat Admin</a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-700" aria-label="Toggle menu"><i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} /></button>
        </div>
        {open && <div className="md:hidden pb-4 space-y-1">
          {links.map(([label, to]) => <a key={label} href={to} onClick={() => setOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100">{label}</a>)}
        </div>}
      </div>
    </nav>
  </header>;
}
