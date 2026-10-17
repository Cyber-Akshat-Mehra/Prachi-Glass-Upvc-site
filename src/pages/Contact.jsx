import { motion } from "framer-motion";
import { LuMapPin, LuPhone, LuMail, LuClock, LuInstagram, LuExternalLink } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "@/components/seo/SEO";
import { localBusinessSchema } from "@/components/seo/schemas";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { SITE, MAP_EMBED_URL, MAP_LINK } from "@/constants/site";
import { fadeLeft, fadeRight } from "@/utils/motionVariants";

const infoItems = [
  { icon: LuMapPin, label: "Workshop & Office", value: SITE.address },
  { icon: LuPhone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: LuMail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: LuClock, label: "Working Hours", value: SITE.workingHours },
  { icon: LuInstagram, label: "Instagram", value: "@prachiglassandupvc", href: SITE.instagram, external: true },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Request a free site survey and quote for windows, doors and glass work."
        jsonLd={localBusinessSchema}
      />
      <PageHeader eyebrow="Contact" title="Tell us about your project." description="Share a few details and our team will get back with a free site survey slot." />
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-fg">Company Information</h2>
              <ul className="mt-6 flex flex-col gap-6">
                {infoItems.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-royal/10 text-link">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium text-fg">{label}</p>
                      {href ? (
                        <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className="text-sm text-steel hover:text-link">{value}</a>
                      ) : (
                        <p className="text-sm text-steel">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={SITE.phoneHref} icon={LuPhone}>Call Now</PrimaryButton>
                <SecondaryButton href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" icon={FaWhatsapp}>WhatsApp</SecondaryButton>
              </div>
              <section aria-labelledby="find-us-heading" className="mt-10">
                <h3 id="find-us-heading" className="font-display text-xl font-bold text-fg">Find Us</h3>
                <p className="mt-1 text-sm text-steel">{SITE.address}</p>
                <div className="mt-4 h-72 overflow-hidden rounded-xl border border-fg/10 bg-ice sm:h-80">
                  <iframe
                    title={`Map showing ${SITE.name}, Sector 53, Noida`}
                    src={MAP_EMBED_URL}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-link underline-offset-2 hover:underline"
                >
                  Open in Google Maps <LuExternalLink size={16} aria-hidden="true" />
                </a>
              </section>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
              <EnquiryForm />
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
