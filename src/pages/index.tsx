import { useForm, SubmitHandler } from "react-hook-form";
import { Flex, Stack, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../components/Form/input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail Invalido").required("E-mail obrigátorio"),
  password: yup.string().required("Senha obrigátorio"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors, isSubmitting } = formState;

  const handlerSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handlerSignIn)}
      >
        <Stack spacing={4}>
          <Input
            label="E-Mail"
            name="email"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          isLoading={isSubmitting}
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >
          Entra
        </Button>
      </Flex>
    </Flex>
  );
}
