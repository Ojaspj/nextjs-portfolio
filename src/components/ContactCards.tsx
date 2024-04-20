import { HoverEffect } from "./ui/hover-effect";
import {
    FaFacebook,
    FaDiscord,
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";

export function ContactCards({theme}: {theme?: boolean}) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={contactData} theme={theme} />
    </div>
  );
}
export const contactData = [
  {
    title: "Facebook",
    logo : <FaFacebook size={24} />,
    description: "Prajwal Joshi",
    link: "https://facebook.com/mrprajwal.joshi",
  },
  {
    title: "Instagram",
    logo : <FaInstagram size={24} />,
    description: "mr.prajwaljoshi",
    link: "https://instagram.com/mr.prajwaljoshi",
  },
  {
    title: "LinkedIn",
    logo : <FaLinkedin size={24} />,
    description: "prajwal-joshi",
    link: "https://linkedin.com/in/prajwal-joshi-3b3734156/",
  },
  {
    title: "Discord",
    logo : <FaDiscord size={24} />,
    description: "isprajwal",
    link: "https://discord.com",
  },
  {
    title: "Email",
    logo : <MdEmail size={24} />,
    description: "joshiprajwal00@",
    link: "mailto:joshiprajwal00@gmail.com",
  },
  {
    title: "WhatsApp",
    logo : <FaWhatsapp size={24} />,
    description: "9843881336",
    link: "https://wa.me/9843881336",
  },
];
