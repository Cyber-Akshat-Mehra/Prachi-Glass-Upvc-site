export default function SkeletonBase({ className = "" }) {
  return <div className={`animate-pulse rounded-lg bg-fg/10 ${className}`} />;
}
