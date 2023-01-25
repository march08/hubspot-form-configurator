import React from "react";

export const useLocalCollectionState = <C extends { [key: string]: any }>(
  key: string
) => {
  const storageState = localStorage.getItem(key);

  const defaultState = (storageState ? JSON.parse(storageState) : {}) as C;

  const [data, set] = React.useState(defaultState);

  const setItem = React.useCallback(
    <K extends keyof C>(itemKey: K, value: C[K]) => {
      const nextState = {
        ...data,
        [itemKey]: value,
      };
      set(nextState);
      localStorage.setItem(key, JSON.stringify(nextState));
    },
    [data, key, set]
  );

  const setState = React.useCallback(
    (d: C) => {
      const nextState = {
        ...data,
        ...d,
      };

      localStorage.setItem(key, JSON.stringify(nextState));
      set(nextState);
    },
    [set, data, key]
  );

  const reset = React.useCallback(() => {
    localStorage.setItem(key, JSON.stringify({}));
    set({} as C);
  }, [key]);

  return { setItem, reset, data, set: setState };
};

export const useLocalState = <C>(key: string) => {
  const storageState =
    typeof localStorage !== "undefined" ? localStorage.getItem(key) : null;

  let defaultState: C | null;

  try {
    defaultState = (storageState ? JSON.parse(storageState) : null) as C;
  } catch {
    defaultState = null;
  }

  const [data, set] = React.useState(defaultState);

  const setState = React.useCallback(
    (value: C) => {
      set(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [data, key, set]
  );

  const reset = React.useCallback(() => {
    localStorage.setItem(key, JSON.stringify({}));
    set({} as C);
  }, [key]);

  /**
   * Sync state
   */

  const onStorageUpdate = React.useCallback(() => {
    (e: StorageEvent) => {
      const { key: newKey, newValue } = e;
      if (key === newKey) {
        console.log("QWE");
        set(JSON.parse(newValue || ""));
      }
    };
  }, [key]);

  React.useEffect(() => {
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, [onStorageUpdate]);

  const res: [C | null, typeof setState, typeof reset] = React.useMemo(() => {
    return [data, setState, reset];
  }, [reset, data, setState]);

  return res;
};
