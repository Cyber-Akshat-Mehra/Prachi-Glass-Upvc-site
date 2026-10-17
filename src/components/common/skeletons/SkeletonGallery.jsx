import SkeletonBase from "./SkeletonBase";

const HEIGHTS = ["h-72", "h-56", "h-96"];

export default function SkeletonGallery({ count = 9 }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4" role="status" aria-label="Loading">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonBase key={i} className={`w-full ${HEIGHTS[i % 3]}`} />
      ))}
    </div>
  );
}
