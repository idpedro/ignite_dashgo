import { Link as ChakraLink, LinkProps, Text, Icon } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";
interface PNavLink extends LinkProps {
  title: string;
  icon: ElementType;
  href: string;
}

export function NavLink({ title, icon, href, ...rest }: PNavLink) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontSize="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
