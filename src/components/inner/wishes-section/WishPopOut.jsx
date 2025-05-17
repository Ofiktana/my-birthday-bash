import {
  Button,
  Badge,
  Flex,
  IconButton,
  Popover,
  Portal,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoHeartSharp, IoHeartOutline, IoTrashOutline } from "react-icons/io5";

export default function WishPopOut({
  name,
  message,
  isAttending,
  isLiked,
  id,
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [action, setAction] = useState('')

  function handleDelete() {
    setAction('to delete')
    setShowConfirm(true);
    
  }

  function toggleLike() {
    setAction(`to ${isLiked ? 'unlike': 'like'}`)
    setShowConfirm(true);
  }

  function exitPopOver() {
    setShowConfirm(false);
  }

  const colors = [
    "purple.600",
    "green.600",
    "blue.600",
    "pink.600",
    "orange.600",
    "cyan.600",
    "teal.600",
    "yellow.600",
  ];

  const randColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Popover.Root onOpenChange={exitPopOver}>
      <Popover.Trigger asChild>
        <Button
          color={randColor}
          shadow={"sm"}
          rounded={"lg"}
          size="sm"
          variant="outline"
          fontWeight={"semibold"}
          // borderLeft={isAttending ? "5px solid green" : ""}
        >
          {name} {isAttending && <FaCircleCheck />}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title fontWeight="semibold" fontStyle={"italic"}>
                {" "}
                Wish from {name}
              </Popover.Title>
              <Flex direction={"column"} align={"start"} gap={4} my={4}>
                <Text color={randColor}>{message}</Text>
                {isAttending && <Badge colorPalette={"green"}>Attending</Badge>}
                <Flex justify={"end"} width={"full"} gap={0}>
                  <IconButton onClick={toggleLike} variant={"ghost"}>
                    {isLiked ? (
                      <IoHeartSharp style={{ color: "red" }} />
                    ) : (
                      <IoHeartOutline style={{ color: "red" }} />
                    )}
                  </IconButton>
                  <IconButton onClick={handleDelete} variant={"ghost"}>
                    <IoTrashOutline />
                  </IconButton>
                </Flex>
                {showConfirm && (
                  <>
                    <Input placeholder={`Enter passcode ${action}`} />
                    <Button colorPalette={"red"}>Confirm</Button>
                  </>
                )}
              </Flex>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
