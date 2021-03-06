import { Box, Text, Stack } from "@chakra-ui/react";

interface PNavSection {
  title: string;
  children: React.ReactNode;
}

export function NavSection({ title, children }: PNavSection) {
  return (
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
