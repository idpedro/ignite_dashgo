import { Flex, HStack, Icon, Text, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            id.pedroferreira@outlook.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Pedro Ferreira"
        src="https://github.com/idpedro.png"
      />
    </Flex>
  );
}
