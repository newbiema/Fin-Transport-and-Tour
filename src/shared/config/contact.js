export const contact = {
  phone: '0859-5433-6297',
  phoneInternational: '+6285954336297',
  email: 'riancipol7@gmail.com',
  address: 'Gerupuk, Desa Sengkol, Kecamatan Pujut, Lombok Tengah',
  social: {
    facebook: 'https://www.facebook.com/search/top/?q=Jefry%20Ramdan%20Z',
    instagram: 'https://www.instagram.com/jefry_sn/',
  },
};

export const whatsapp = (message = 'Halo Fin Transport and Tour, saya ingin bertanya.') =>
  `https://wa.me/${contact.phoneInternational.slice(1)}?text=${encodeURIComponent(message)}`;
