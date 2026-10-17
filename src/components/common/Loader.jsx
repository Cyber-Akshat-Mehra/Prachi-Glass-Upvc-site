export default function Loader() {
  return (
    <div role="status" aria-label="Loading" className="flex min-h-[50vh] w-full items-center justify-center">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-ice" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-royal border-t-transparent" />
      </div>
    </div>
  );
}
