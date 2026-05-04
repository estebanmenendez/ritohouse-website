import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: '/' },
    { text: 'Nuestros Boxes', href: '/#productos' },
    { text: 'La Intención', href: '/#historia' },
    { text: 'Contacto', href: '/#contacto' },
  ],
  actions: [{ text: 'WhatsApp', href: 'https://wa.me/tu_numero', variant: 'primary' }],
  showToggleTheme: false, // Mantenemos tu preferencia de no mostrar el cambio de tema
};

export const footerData = {
  links: [
    {
      title: 'Ritohouse',
      links: [
        { text: 'Nuestra Historia', href: '/#historia' },
        { text: 'Catálogo de Boxes', href: '/#productos' },
        { text: 'Preguntas Frecuentes', href: '#' },
      ],
    },
    {
      title: 'Comunidad',
      links: [
        { text: 'Instagram', href: 'https://instagram.com/ritohousepdu' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Artesanal', href: '#' },
    { text: 'Místico', href: '#' },
    { text: 'Uruguay', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/ritohousepdu' },
  ],
  footNote: `
    Diseñado por <a class="text-[#D4A373] hover:underline font-semibold" href="#">Steb</a> · Ritohouse © 2026
  `,
};
