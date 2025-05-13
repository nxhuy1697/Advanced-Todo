import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === undefined) return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item): initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, setStoredValue]);

  return [storedValue, setStoredValue] as const;
}