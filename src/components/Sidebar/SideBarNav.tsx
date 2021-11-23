import React from "react";
import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

const SideBarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink title="Dashborad" icon={RiDashboardLine} />
        <NavLink title="Usuários" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="Automação">
        <NavLink title="Formulários" icon={RiInputMethodLine} />
        <NavLink title="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
};

export { SideBarNav };
