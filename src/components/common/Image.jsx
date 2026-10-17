import { memo, useState } from "react";

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#EAF4FB"/><text x="50%" y="50%" fill="#64748B" font-family="sans-serif" font-size="28" text-anchor="middle">Image unavailable</text></svg>'
  );

function Image({ src, alt, className = "", eager = false, ...rest }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? FALLBACK : src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} bg-ice`}
      {...rest}
    />
  );
}

export default memo(Image);
