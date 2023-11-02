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
  RadioGroupItem,
  RadioGroupRoot,
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

export default function FoulBtn() {
  const router = useRouter();
  const playerSelected = [1, 3, 5, 6, 7, 8, 9, 15, 16];

  return (
    <DialogRoot>
      <DialogTrigger>
        <Button>falta</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <Theme accentColor="lime">
          <DialogTitle>Falta</DialogTitle>
          <DialogDescription size="2" mb="4">
            Selecione o participante que cometeu a falta;
          </DialogDescription>

          <RadioGroupRoot defaultValue="3">
            <ScrollArea
              scrollbars="vertical"
              style={{ maxHeight: "55vh", maxWidth: "80vw" }}
            >
              <TableRoot>
                <TableBody>
                  {playerSelected.map((player) => {
                    return (
                      <TableRow key={player}>
                        <TableCell>Participante {player}</TableCell>
                        <TableCell justify="end">
                          <RadioGroupItem value={player.toString()} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </TableRoot>
            </ScrollArea>
          </RadioGroupRoot>

          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button color="gray" variant="soft">
                cancelar
              </Button>
            </DialogClose>
            <Button onClick={() => router.push("/event/12345")}>
              confirmar
            </Button>
          </Flex>
        </Theme>
      </DialogContent>
    </DialogRoot>
  );
}
