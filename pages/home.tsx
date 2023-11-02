import CreateEventBtn from "@/component/create-event-btn";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Flex direction="column" gap="4">
      <Heading mb="4">Liga POABP</Heading>
      <CreateEventBtn />
      <Button onClick={() => router.push("/events")}>ver eventos</Button>
    </Flex>
  );
}
