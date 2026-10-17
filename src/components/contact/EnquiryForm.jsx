import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import PrimaryButton from "@/components/common/PrimaryButton";
import { WHATSAPP_NUMBER, WORKING_HOURS, SITE } from "@/constants/site";
import { services } from "@/data/services";
import { inputClasses } from "@/utils/formStyles";
import {
  buildQuoteMessage,
  buildWhatsAppUrl,
  isValidIndianMobile,
  isValidWhatsAppNumber,
} from "@/utils/whatsapp";
import FormField from "./FormField";

const REQUIREMENTS_MAX = 500;

const NOTICES = {
  opened: {
    tone: "bg-royal/10 text-link",
    text: "WhatsApp should now be open with your quote request filled in. Press Send in WhatsApp to submit it — your enquiry is not sent until you do.",
  },
  blocked: {
    tone: "bg-amber/15 text-fg",
    text: "Your browser blocked WhatsApp from opening. Use the link below, then press Send in WhatsApp to submit your enquiry.",
  },
  misconfigured: {
    tone: "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300",
    text: `We can't open WhatsApp from this form right now. Please call us on ${SITE.phone}.`,
  },
};

export default function EnquiryForm() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("idle");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const requestedProduct = searchParams.get("product");
  const defaultProduct = services.some((s) => s.title === requestedProduct) ? requestedProduct : "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", phone: "", product: defaultProduct, location: "", dimensions: "", requirements: "" },
  });

  const onSubmit = (values) => {
    if (!isValidWhatsAppNumber(WHATSAPP_NUMBER)) {
      setStatus("misconfigured");
      return;
    }
    const url = buildWhatsAppUrl(WHATSAPP_NUMBER, buildQuoteMessage({ businessName: SITE.name, ...values }));
    setWhatsAppUrl(url);

    const popup = window.open(url, "_blank");
    if (popup) {
      popup.opener = null;
      setStatus("opened");
    } else {
      setStatus("blocked");
    }
  };

  const aria = (field) => ({
    "aria-invalid": errors[field] ? "true" : "false",
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  const notice = NOTICES[status];

  return (
    <div className="rounded-xl border border-fg/10 bg-card p-7 shadow-sm sm:p-9">
      <h2 className="font-display text-2xl font-bold text-fg">Request a Free Quote</h2>
      <p className="mt-2 text-sm text-steel">
        Fill in your project details. We'll open WhatsApp with your request ready to send to our team.
      </p>
      <p className="mt-3 flex items-center gap-2 text-sm font-medium text-fg">
        <LuClock size={16} aria-hidden="true" className="shrink-0 text-link" />
        <span>
          <span className="sr-only">Working hours: </span>
          {WORKING_HOURS}
        </span>
      </p>

      <div aria-live="polite">
        {notice && <div className={`mt-5 rounded-lg px-4 py-3 text-sm ${notice.tone}`}>{notice.text}</div>}
        {(status === "opened" || status === "blocked") && (
          <p className="mt-3 text-sm text-steel">
            {status === "opened" ? "WhatsApp didn't open? " : ""}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-link underline underline-offset-2 hover:text-link/80"
            >
              Open WhatsApp with my quote request
            </a>
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="name" label="Full Name" required error={errors.name?.message}>
          <input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses(errors.name)}
            {...aria("name")}
            {...register("name", { required: "Please enter your name", minLength: { value: 2, message: "Name is too short" } })}
          />
        </FormField>
        <FormField id="phone" label="Phone Number" required error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98765 43210"
            className={inputClasses(errors.phone)}
            {...aria("phone")}
            {...register("phone", {
              required: "Please enter your phone number",
              validate: (v) => isValidIndianMobile(v) || "Enter a valid 10-digit Indian mobile number",
            })}
          />
        </FormField>
        <FormField id="product" label="Product Type" required className="sm:col-span-2" error={errors.product?.message}>
          <select
            id="product"
            className={inputClasses(errors.product)}
            {...aria("product")}
            {...register("product", { required: "Please select a product type" })}
          >
            <option value="">Select a product</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </FormField>
        <FormField id="location" label="Project Location" required className="sm:col-span-2" error={errors.location?.message}>
          <input
            id="location"
            autoComplete="address-level2"
            placeholder="Area / sector and city, e.g. Sector 62, Noida"
            className={inputClasses(errors.location)}
            {...aria("location")}
            {...register("location", {
              required: "Please enter the project location",
              minLength: { value: 3, message: "Please enter a more complete location" },
            })}
          />
        </FormField>
        <FormField id="dimensions" label="Approximate Dimensions (optional)" className="sm:col-span-2" error={errors.dimensions?.message}>
          <input
            id="dimensions"
            placeholder="e.g. 4 ft × 5 ft, 3 windows"
            className={inputClasses(errors.dimensions)}
            {...aria("dimensions")}
            {...register("dimensions", { maxLength: { value: 100, message: "Please keep this under 100 characters" } })}
          />
        </FormField>
        <FormField id="requirements" label="Additional Requirements (optional)" className="sm:col-span-2" error={errors.requirements?.message}>
          <textarea
            id="requirements"
            rows={4}
            placeholder="Colour, glass type, number of units, timeline…"
            className={`${inputClasses(errors.requirements)} resize-none`}
            {...aria("requirements")}
            {...register("requirements", {
              maxLength: { value: REQUIREMENTS_MAX, message: `Please keep this under ${REQUIREMENTS_MAX} characters` },
            })}
          />
        </FormField>
        <div className="sm:col-span-2">
          <PrimaryButton type="submit" icon={FaWhatsapp} className="w-full sm:w-auto">
            Send via WhatsApp
          </PrimaryButton>
          <p className="mt-3 text-xs text-steel">
            This opens WhatsApp with your details filled in. Press Send in WhatsApp to submit your enquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
