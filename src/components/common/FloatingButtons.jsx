import { LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/constants/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <a
        href={SITE.phoneHref}
        aria-label="Call us"
        className="grid place-items-center rounded-full bg-royal p-3.5 text-white shadow-lg shadow-royal/40 transition-transform hover:scale-110"
      >
        <LuPhone size={22} aria-hidden="true" />
      </a>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid place-items-center rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110"
      >
        <FaWhatsapp size={22} aria-hidden="true" />
      </a>
    </div>
  );
}
