import SkeletonCard from "./SkeletonCard";

export default function SkeletonGrid({
  count = 6,
  className = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
}) {
  return (
    <div className={className} role="status" aria-label="Loading">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
