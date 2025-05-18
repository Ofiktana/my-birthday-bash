import AddWish from "../forms/AddWish";
import { Link, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { GrSend } from "react-icons/gr";
import { PartyContext } from "@/pages/Invitation";
import { useContext } from "react";

function AddWishDialog() {
  const celebrant = useContext(PartyContext).celebrantFirstName
  const { themeColor } = useContext(PartyContext)

  return (
    <Dialog.Root size={{ base: "sm", md: "md" }}>
      <Dialog.Trigger asChild>
        <Link
          textAlign={"center"}
          textStyle={"sm"}
          color={"pink.800"}
          fontFamily={"inherit"}
          fontWeight={"semibold"}
          rounded={"lg"}
          textDecoration={"underline"}
        >
          Click here to send {celebrant} a birthday wish
        </Link>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title fontFamily={'inherit'} fontWeight={'semibold'} color={themeColor}>Send a Wish </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <AddWish celebrant={celebrant} />
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default AddWishDialog;
