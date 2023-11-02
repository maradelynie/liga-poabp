import CreateEventBtn from "@/component/create-event-btn";
import FinalizeBtn from "@/component/finalize-btn";
import FoulBtn from "@/component/foul-btn";
import GoalBtn from "@/component/goal-btn";
import VictoryBtn from "@/component/victory-btn";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const params = useParams();
  const [id, setId] = useState("");

  useEffect(() => {
    if (params.id) {
      setId(params.id.toString());
    }
  }, [params]);

  return (
    <Flex direction="column" gap="4">
      <Heading mb="4">evento {id}</Heading>
      <GoalBtn />
      <FoulBtn />
      <VictoryBtn />
      <FinalizeBtn />
      <Button variant="soft" onClick={() => router.back()}>
        voltar
      </Button>
    </Flex>
  );
}
