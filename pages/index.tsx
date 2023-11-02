import { Button, Card, Flex, Heading, TextFieldInput } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Card size="4" m={"auto"}>
      <Heading>liga POABP</Heading>
      <Flex justify={"center"} direction={"column"} gap="4" mt="6">
        <TextFieldInput required placeholder="login" />
        <TextFieldInput required placeholder="senha" />
        <Button
          type="submit"
          onClick={(e) => (e.preventDefault(), router.push("/home"))}
        >
          entrar
        </Button>
      </Flex>
    </Card>
  );
}
