import SkeletonBase from "./SkeletonBase";

export default function SkeletonProduct() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2" role="status" aria-label="Loading">
      <div>
        <SkeletonBase className="aspect-[4/3] w-full" />
        <div className="mt-4 flex gap-3">
          {[0, 1, 2].map((i) => (
            <SkeletonBase key={i} className="h-20 w-24" />
          ))}
        </div>
      </div>
      <div>
        <SkeletonBase className="h-4 w-32" />
        <SkeletonBase className="mt-3 h-9 w-3/4" />
        <SkeletonBase className="mt-4 h-4 w-full" />
        <SkeletonBase className="mt-2 h-4 w-5/6" />
        <SkeletonBase className="mt-8 h-24 w-full" />
      </div>
    </div>
  );
}
