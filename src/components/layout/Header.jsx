import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsapp } from '../../shared/config/contact';
import { copy } from '../../shared/content/siteContent';

const links = [
  [copy.navigation.home, '/#home'], [copy.navigation.tours, '/#destinations'], [copy.navigation.reviews, '/#reviews'], [copy.navigation.about, '/#about'], [copy.navigation.contact, '/#footer'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  const closeMenu = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) menuButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return undefined;

    firstMenuLinkRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu(true);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return <header>
    <nav className="fixed top-0 inset-x-0 z-50 nav-blur border-b border-[#cfc2b1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => closeMenu()}>
            <img src="/images/logo.png" alt="Logo Fin Transport and Tour" className="w-9 h-9 object-contain" />
            <span className="text-xs font-semibold text-[#2b312d]">fintransportandtour.com</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#686c64]">
            {links.map(([label, to]) => <a key={label} href={to} className="hover:text-primary transition-colors">{label}</a>)}
          </div>
          <a href={whatsapp('Hello, I would like to plan a Lombok trip.')} className="hidden md:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#1b3e53] transition-colors"><i className="fab fa-whatsapp" aria-hidden="true" />{copy.actions.bookWhatsApp}</a>
          <button ref={menuButtonRef} type="button" onClick={() => setOpen((current) => !current)} className="md:hidden w-11 h-11 inline-flex items-center justify-center text-[#2b312d]" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation"><i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" /></button>
        </div>
        <div id="mobile-navigation" className={'md:hidden pb-4 space-y-1 ' + (open ? '' : 'hidden')}>
          {links.map(([label, to], index) => <a key={label} ref={index === 0 ? firstMenuLinkRef : null} href={to} onClick={() => closeMenu()} className="min-h-11 flex items-center py-2 px-3 rounded-md text-[#2b312d] hover:bg-[#e4d9ca]">{label}</a>)}
        </div>
      </div>
    </nav>
  </header>;
}
