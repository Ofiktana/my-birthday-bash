import AddWish from "../forms/AddWish";
import { Link, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { PartyContext } from "@/pages/Invitation";
import { useContext, useState } from "react";
import SuccessFeedback from "../forms/SuccessFeedback";

function AddWishDialog() {
  const celebrant = useContext(PartyContext).celebrantFirstName;
  const { themeColor } = useContext(PartyContext);
  const [mode, setMode] = useState("form");

  return (
    <Dialog.Root size={{ base: "sm", md: "md" }} onOpenChange={()=>{setMode('form')}}>
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
              <Dialog.Title
                fontFamily={"inherit"}
                fontWeight={"semibold"}
                color={`${themeColor}.600`}
              >
                { mode == 'form' ? 'Send a Wish' : ''}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Context>
              {(store) => (
                <Dialog.Body>
                  {mode == "form" && (
                    <AddWish celebrant={celebrant} setMode={setMode} />
                  )}
                  {mode == "success" && <SuccessFeedback setMode={setMode} setOpen={store.setOpen} />}
                </Dialog.Body>
              )}
            </Dialog.Context>
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
