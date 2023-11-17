"use client";
import { RootStore, RootStoreContext } from "models/root.store";
import { ReactNode, useCallback, useEffect } from "react";
import { user } from "../mocks/users.json";
import { packages } from "../mocks/items.json";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
type ProvidersProps = {
  children: ReactNode;
};
export default observer(function Providers({ children }: ProvidersProps) {
  const store = RootStore.create({
    users: {},
    packages: {},
    date: { date: new Date() },
  });

  const setData = useCallback(async () => {
    // PUNTO DE 'HIDRATACION': aca es donde hidratamos al root store (store) con los services. Se carga con el backend.

    store.users.setUsers(user);
    store.packages.setPackages(packages);
  }, [store]);

  const router = useRouter();

  const loginValidations = () => {
    const USER_ID = localStorage.getItem("USER_LOGGED_ID") || "";
    store.users.setUserLoggedId(USER_ID);
    if (!store.users.loggedUser) {
      router.push("/login");
    }
  };
  useEffect(() => {
    if (!store.users.users.length) {
      setData();
    }
    loginValidations();
  }, [store]);

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
});
