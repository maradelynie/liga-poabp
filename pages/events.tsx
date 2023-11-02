import {
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  ScrollArea,
  Text,
  TextFieldInput,
} from "@radix-ui/themes";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const events = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Flex direction="column" gap="4">
      <Heading as="h1">Eventos</Heading>
      <ScrollArea
        scrollbars="vertical"
        style={{ maxHeight: "70vh", maxWidth: "90vw" }}
      >
        <Flex wrap="wrap" justify="start" gap="4" m="auto" p="4">
          {events.map((event) => {
            return (
              <Card
                key={event}
                style={{ minWidth: "8rem" }}
                onClick={() =>
                  event === 7 ? router.push("/event/" + event) : null
                }
              >
                <Heading as="h5" size="3" mb="3">
                  22/10/2023
                </Heading>
                <Text as="p" size="2">
                  Presentes: {(Math.random() * 20).toFixed(0)}
                </Text>
                <Text as="p" size="2">
                  Faltas: {(Math.random() * 10).toFixed(0)}
                </Text>
                <Text as="p" size="2">
                  Gols: {(Math.random() * 30).toFixed(0)}
                </Text>
                <Badge color={event === 7 ? "green" : "gray"}>
                  {event === 7 ? "em andamento" : "finalizado"}
                </Badge>
              </Card>
            );
          })}
        </Flex>
      </ScrollArea>
      <Button variant="soft" mt="4" onClick={() => router.back()}>
        voltar
      </Button>
    </Flex>
  );
}
