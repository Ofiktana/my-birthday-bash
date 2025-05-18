import {
  Flex,
  Input,
  Field,
  Checkbox,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { PartyContext } from "@/pages/Invitation";
import { useForm } from "react-hook-form";

function AddWish({ celebrant }) {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const messageMaxLength = 75;
  const { themeColor } = useContext(PartyContext)

  async function onSubmit(data) {
    if(data.isAttending == 'on'){
      data.isAttending = true
    }

    try {

      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      reset()
    } catch (error) {
      setError("root", {
        message: error.message,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      // style={{ maxWidth: "400px", margin: "auto" }}
    >
      <Flex  rounded={"lg"} direction={"column"} gap={4}>
        <Field.Root>
          <Field.Label>Your Name</Field.Label>
          <Input
            {...register("name", { required: "Please enter your name" })}
            placeholder="John Doe"
          />
          {errors.name && (
            <Text textStyle={"xs"} color={"red"}>
              {errors.name.message}
            </Text>
          )}
        </Field.Root>
        <Field.Root>
          <Field.Label>Birthday wish to {celebrant}</Field.Label>
          <Textarea
            {...register("message", {
              required: "Cannot be blank",
              maxLength: {
                value: messageMaxLength,
                message: "Message character limit exceeded",
              },
            })}
            resize={"vertical"}
            placeholder="Happy Birthday..."
            minHeight={"150px"}
          />
          <Flex w={"full"} justify={"space-between"}>
            <Field.HelperText>
              {messageMaxLength - watch("message")?.length > 0
                ? messageMaxLength - watch("message")?.length
                : 0}{" "}
              characters remaining
            </Field.HelperText>
            {errors.message && (
              <Text textStyle={"xs"} color={"red"}>
                {errors.message.message}
              </Text>
            )}
          </Flex>
        </Field.Root>
        <Checkbox.Root
          colorPalette={themeColor}
          variant={"solid"}
          {...register("isAttending")}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label fontStyle={'italic'}>Tick to confirm your attendance</Checkbox.Label>
        </Checkbox.Root>
        <Button
          alignSelf={"center"}
          disabled={isSubmitting}
          colorPalette={themeColor}
          type="submit"
          shadow={"sm"}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
        {errors.root && (
          <Text
            textStyle={"xs"}
            textAlign={"center"}
            fontWeight={"semibold"}
            color={"red"}
          >
            {errors.root.message}
          </Text>
        )}
      </Flex>
    </form>
  );
}

export default AddWish;
