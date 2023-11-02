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

export default function CreatePlayerBtn() {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button variant="outline">criar participante</Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <Theme accentColor="lime">
          <DialogTitle>Criar participante</DialogTitle>

          <TextFieldInput required placeholder="nome" />

          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button color="gray" variant="soft">
                cancelar
              </Button>
            </DialogClose>
            <DialogClose>
              <Button>salvar</Button>
            </DialogClose>
          </Flex>
        </Theme>
      </DialogContent>
    </DialogRoot>
  );
}
