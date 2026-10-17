import { LuWifiOff, LuServerCrash, LuFileQuestion, LuTriangleAlert } from "react-icons/lu";
import PrimaryButton from "./PrimaryButton";

const VARIANTS = {
  network: { icon: LuWifiOff, title: "Connection problem", message: "We couldn't reach the server. Check your connection and try again." },
  server: { icon: LuServerCrash, title: "Server error", message: "Something went wrong on our side. Please try again in a moment." },
  notFound: { icon: LuFileQuestion, title: "We couldn't find that", message: "The item you're looking for doesn't exist or has been removed." },
  unexpected: { icon: LuTriangleAlert, title: "Something went wrong", message: "An unexpected error occurred. Please try again." },
};

function resolveVariant(error) {
  if (!error) return "unexpected";
  if (error.status === 404) return "notFound";
  if (error.status >= 500) return "server";
  if (error.status === null) return "network";
  return "unexpected";
}

export default function ErrorState({ variant, error, onRetry }) {
  const resolved = variant ?? resolveVariant(error);
  const { icon: Icon, title, message } = VARIANTS[resolved];
  return (
    <div role="alert" className="flex flex-col items-center justify-center rounded-xl border border-fg/10 bg-frost px-6 py-16 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-amber/15 text-amber-dark">
        <Icon size={26} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-fg">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-steel">{message}</p>
      {onRetry && resolved !== "notFound" && (
        <div className="mt-6">
          <PrimaryButton onClick={onRetry}>Try Again</PrimaryButton>
        </div>
      )}
    </div>
  );
}
