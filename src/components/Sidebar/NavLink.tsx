import { Link, LinkProps, Text, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

interface PNavLink extends LinkProps {
  title: string;
  icon: ElementType;
}

export function NavLink({ title, icon, ...rest }: PNavLink) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontSize="medium">
        {title}
      </Text>
    </Link>
  );
}
