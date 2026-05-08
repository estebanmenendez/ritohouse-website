import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: '/' },
    { text: 'Tienda de Ritual', href: '/tienda' },
    { text: 'Tienda General', href: '/tienda-general' },
    { text: 'Contacto', href: '/#contacto' },
  ],
  actions: [
    { 
      text: 'WhatsApp', 
      href: 'https://wa.me/59899556772', 
      variant: 'primary',
      target: '_blank', // Asegura que abra en una pestaña nueva
    }
  ],
  showToggleTheme: false,
};

export const footerData = {
  links: [
    {
      title: 'RitoHouse',
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
    { 
      ariaLabel: 'Instagram', 
      icon: 'tabler:brand-instagram', 
      href: 'https://instagram.com/ritohousepdu',
    },
  ],
  footNote: `
    Diseñado por <a class="text-[#B57E5F] hover:underline font-semibold" href="#">EM</a> · RitoHouse © 2026
  `,
};
