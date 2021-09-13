import { Flex, Stack, Button } from "@chakra-ui/react";
import { Input } from "../components/Form/input";
export default function Home() {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        padding={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input
            label="E-Mail"
            name="email"
            id="email"
            type="email"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
          />
          <Input
            label="Senha"
            name="password"
            id="password"
            type="password"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
          />
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Entra
        </Button>
      </Flex>
    </Flex>
  );
}
