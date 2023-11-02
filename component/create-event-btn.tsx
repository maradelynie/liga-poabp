import {
  Button,
  Card,
  Checkbox,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Heading,
  ScrollArea,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
  TableRowHeaderCell,
  Text,
  TextFieldInput,
  Theme,
} from "@radix-ui/themes";
import { useRouter } from "next/router";
import CreatePlayerBtn from "./create-player-btn";

export default function CreateEventBtn() {
  const router = useRouter();
  const player = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const playerSelected = [1, 3, 5, 6, 7, 8, 9, 15, 16];

  return (
    <DialogRoot>
      <DialogTrigger>
        <Button>criar evento</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <Theme accentColor="lime">
          <DialogTitle>Selecionar participantes</DialogTitle>
          <DialogDescription size="2" mb="4">
            Selecione ou crie participantes para seu evento;
          </DialogDescription>

          <Flex direction="column" my="4">
            <CreatePlayerBtn />
          </Flex>

          <ScrollArea
            scrollbars="vertical"
            style={{ maxHeight: "55vh", maxWidth: "80vw" }}
          >
            <TableRoot>
              <TableBody>
                {player.map((player) => {
                  return (
                    <TableRow key={player}>
                      <TableCell>Participante {player}</TableCell>
                      <TableCell justify="end">
                        <Checkbox checked={playerSelected.includes(player)} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </TableRoot>
          </ScrollArea>

          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button color="gray" variant="soft">
                cancelar
              </Button>
            </DialogClose>
            <Button onClick={() => router.push("/event/12345")}>
              criar evento ({playerSelected.length})
            </Button>
          </Flex>
        </Theme>
      </DialogContent>
    </DialogRoot>
  );
}
