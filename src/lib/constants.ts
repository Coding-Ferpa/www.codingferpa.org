export const PRESENTATION_PDF_URL = "/assets/apresentacao-institucional.pdf";

export const WHATSAPP_URL =
  "https://chat.whatsapp.com/GOYXiNWDK5rICpJD0hs2QL";

export const MAPS_URL =
  "https://www.google.com/maps/dir//Av.+dos+Arnaldos,+2316+-+Jardim+Res.+Por+do+Sol,+Fernand%C3%B3polis+-+SP,+15600-348/@-20.2902767,-50.3821587,11.82z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9497f767ebeef459:0x2b5a901e9aa0d1fe!2m2!1d-50.2571331!2d-20.291178?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D";

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://instagram.com/codingferpa",
    label: "Instagram da Coding Ferpa",
  },
  {
    name: "Discord",
    url: "https://discord.gg/uqyVCgYUTu",
    label: "Discord da Coding Ferpa",
  },
  {
    name: "Github",
    url: "https://github.com/Coding-Ferpa",
    label: "GitHub da Coding Ferpa",
  },
] as const;

export const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Quem Somos", href: "#about" },
  { label: "Encontros", href: "#events" },
  { label: "Palestras", href: "#talk" },
] as const;

export const VENUE = {
  name: "Dog King",
  address: "Av. dos Arnaldos, 2316",
  neighborhood: "Jardim Res. Por do Sol",
  city: "Fernandópolis - SP",
  zip: "15600-348",
} as const;
