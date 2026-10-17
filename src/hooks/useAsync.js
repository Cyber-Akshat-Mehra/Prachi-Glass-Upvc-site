import { useCallback, useEffect, useRef, useState } from "react";

export function useAsync(asyncFn, key = "") {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const [nonce, setNonce] = useState(0);
  const fnRef = useRef(asyncFn);

  useEffect(() => {
    fnRef.current = asyncFn;
  });

  useEffect(() => {
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));
    fnRef
      .current()
      .then((data) => !cancelled && setState({ data, loading: false, error: null }))
      .catch((error) => !cancelled && setState({ data: null, loading: false, error }));
    return () => {
      cancelled = true;
    };
  }, [key, nonce]);

  const refetch = useCallback(() => setNonce((n) => n + 1), []);
  return { ...state, refetch };
}
