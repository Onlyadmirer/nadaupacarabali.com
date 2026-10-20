"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Returns false during SSR and the first client render, then true once the
 * component has hydrated. Useful to defer animation-only markup so the
 * server and client trees match.
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
