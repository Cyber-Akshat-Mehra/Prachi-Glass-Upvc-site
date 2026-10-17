import { LuPackageOpen, LuImageOff, LuFolderOpen, LuSearchX, LuMessageSquareOff } from "react-icons/lu";
import PrimaryButton from "./PrimaryButton";

const PRESETS = {
  products: { icon: LuPackageOpen, title: "No products found", message: "There are no products in this category yet. Try another filter." },
  gallery: { icon: LuImageOff, title: "No images yet", message: "Gallery images for this category will appear here soon." },
  projects: { icon: LuFolderOpen, title: "Our project gallery is being updated.", message: "Check back soon to explore our completed installations." },
  search: { icon: LuSearchX, title: "No results found", message: "Try adjusting your search or clearing the filters." },
  testimonials: { icon: LuMessageSquareOff, title: "No testimonials yet", message: "Customer reviews will appear here." },
};

export default function EmptyState({ type = "products", title, message, actionLabel, onAction }) {
  const preset = PRESETS[type] ?? PRESETS.products;
  const Icon = preset.icon;
  return (
    <div role="status" className="flex flex-col items-center justify-center rounded-xl border border-dashed border-fg/15 bg-frost px-6 py-16 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-royal/10 text-link">
        <Icon size={26} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-fg">{title ?? preset.title}</h3>
      <p className="mt-2 max-w-sm text-sm text-steel">{message ?? preset.message}</p>
      {actionLabel && onAction && (
        <div className="mt-6">
          <PrimaryButton onClick={onAction}>{actionLabel}</PrimaryButton>
        </div>
      )}
    </div>
  );
}
