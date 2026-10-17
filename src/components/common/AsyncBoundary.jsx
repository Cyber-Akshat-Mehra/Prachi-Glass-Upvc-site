import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";

export default function AsyncBoundary({ loading, error, data, onRetry, skeleton, emptyType, children }) {
  if (loading) return skeleton;
  if (error) return <ErrorState error={error} onRetry={onRetry} />;
  if (!data || (Array.isArray(data) && data.length === 0)) return <EmptyState type={emptyType} />;
  return children;
}
