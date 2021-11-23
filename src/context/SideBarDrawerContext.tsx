import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SideBarDrawerContextProps = UseDisclosureReturn;
const SideBarDrawerContext = createContext<SideBarDrawerContextProps>(
  {} as SideBarDrawerContextProps
);

interface SideBarDrawerContextProviderProps {
  children: ReactNode;
}

export function SideBarDrawerContextProvider({
  children,
}: SideBarDrawerContextProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);
  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext);
