import { Component } from "react";
import { SITE } from "@/constants/site";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error.message, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role="alert" className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-white">
        <span className="font-display text-6xl font-bold text-amber">Oops</span>
        <h1 className="mt-4 font-display text-2xl font-bold">Something went wrong</h1>
        <p className="mt-3 max-w-md text-white/60">
          Reloading usually fixes it. If it keeps happening, call us on {SITE.phone}.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 rounded-xl bg-amber px-6 py-3.5 font-display font-semibold text-ink transition-colors hover:bg-amber-dark"
        >
          Reload Page
        </button>
      </div>
    );
  }
}
