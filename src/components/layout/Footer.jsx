import { contact, whatsapp } from '../../shared/config/contact';
import { copy } from '../../shared/content/siteContent';

export default function Footer() {
  return <footer id="footer" className="scroll-mt-20 pt-12 pb-8 surface-grounded mt-0 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      <div><div className="flex gap-2 items-center"><img className="w-10 h-10 object-contain" src="/images/logo.png" alt="Fin Transport and Tour logo" /><b className="text-[#faf5ec]">Fin Transport and Tour</b></div><p className="text-sm text-[#cfd8d3] leading-6 mt-3 max-w-sm">{copy.footer.description}</p></div>
      <div><h3 className="font-semibold text-[#faf5ec] mb-3">{copy.footer.navigation}</h3><div className="grid gap-2 text-sm text-[#cfd8d3]"><a className="hover:text-white" href="/#destinations">{copy.footer.tours}</a><a className="hover:text-white" href="/#reviews">{copy.footer.reviews}</a><a className="hover:text-white" href="/#about">{copy.footer.about}</a></div></div>
      <div><h3 className="font-semibold text-[#faf5ec] mb-3">{copy.footer.contact}</h3><ul className="space-y-2 text-sm text-[#dce4df]"><li className="flex gap-2"><i className="fas fa-phone text-[#9fc1b7] mt-1" aria-hidden="true" /><a className="hover:text-white" href={`tel:${contact.phoneInternational}`}>{contact.phone}</a></li><li className="flex gap-2"><i className="fas fa-envelope text-[#9fc1b7] mt-1" aria-hidden="true" /><a className="hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a></li><li className="flex gap-2"><i className="fas fa-location-dot text-[#9fc1b7] mt-1" aria-hidden="true" /><span>{contact.address}</span></li></ul><div className="flex gap-4 mt-4 text-[#b9d2ca]"><a className="hover:text-white" href={contact.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook Jefry Ramdan Z"><i className="fab fa-facebook text-xl" aria-hidden="true" /></a><a className="hover:text-white" href={contact.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Jefry Sn"><i className="fab fa-instagram text-xl" aria-hidden="true" /></a><a className="hover:text-white" href={whatsapp(copy.floating.bookingMessage)} target="_blank" rel="noopener noreferrer" aria-label={copy.floating.whatsappLabel}><i className="fab fa-whatsapp text-xl" aria-hidden="true" /></a></div></div>
    </div>
    <p className="max-w-6xl mx-auto border-t border-white/15 mt-8 pt-5 text-xs text-[#b8c5bf]">© {new Date().getFullYear()} Fin Transport and Tour. {copy.footer.copyright}</p>
  </footer>;
}
