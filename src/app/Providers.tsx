"use client";
import { RootStore, RootStoreContext } from "models/root.store";
import { ReactNode, useCallback, useEffect } from "react";
import { user } from "../mocks/users.json";
import { packages } from "../mocks/items.json";
type ProvidersProps = {
  children: ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  const store = RootStore.create({
    users: {},
    packages: {},
  });

  const setData = useCallback(async () => {
    // PUNTO DE 'HIDRATACION': aca es donde hidratamos al root store (store) con los services. Se carga con el backend.

    store.users.setUsers(user);
    store.packages.setPackages(packages);
  }, [store]);

  useEffect(() => {
    if (!store.users.users.length) {
      setData();
    }
  }, [store]);

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
}
