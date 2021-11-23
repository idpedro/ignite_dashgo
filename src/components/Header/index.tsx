import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";
import { Logo } from "./logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SeachBox } from "./SeachBox";
export function Header() {
  const { onOpen } = useSideBarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mt="4"
      mx="auto"
      align="center"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
          fontSize="24"
          mr="2"
          variant={"unstyled"}
        />
      )}
      <Logo />
      {isWideVersion && <SeachBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
