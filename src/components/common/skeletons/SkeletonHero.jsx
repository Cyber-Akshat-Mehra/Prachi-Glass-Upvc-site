import SkeletonBase from "./SkeletonBase";

export default function SkeletonHero() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col justify-center gap-5 px-6" role="status" aria-label="Loading">
      <SkeletonBase className="h-4 w-40" />
      <SkeletonBase className="h-12 w-full max-w-xl" />
      <SkeletonBase className="h-12 w-3/4 max-w-lg" />
      <SkeletonBase className="mt-4 h-4 w-full max-w-md" />
    </div>
  );
}
