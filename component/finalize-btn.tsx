import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
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

export default function FinalizeBtn() {
  const router = useRouter();
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger>
        <Button>finalizar evento</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Finalizar evento</AlertDialogTitle>
        <AlertDialogDescription size="2">
          Ao finalizar o evento não será mais possivel adicionar dados. Tem
          certeza que deseja continuar?
        </AlertDialogDescription>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialogCancel>
            <Button variant="soft" color="gray">
              cancelar
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button
              onClick={() => router.push("/home")}
              variant="solid"
              color="red"
            >
              finalizar
            </Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
}
