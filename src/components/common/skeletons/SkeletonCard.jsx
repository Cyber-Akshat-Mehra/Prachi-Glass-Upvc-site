import SkeletonBase from "./SkeletonBase";

export default function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-fg/10 bg-card">
      <SkeletonBase className="aspect-[4/3] w-full rounded-none" />
      <div className="p-5">
        <SkeletonBase className="h-5 w-3/4" />
        <SkeletonBase className="mt-3 h-3.5 w-full" />
        <SkeletonBase className="mt-2 h-3.5 w-5/6" />
        <SkeletonBase className="mt-5 h-4 w-24" />
      </div>
    </div>
  );
}
