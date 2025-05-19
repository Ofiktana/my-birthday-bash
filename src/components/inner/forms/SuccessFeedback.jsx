import { Flex, Icon, Text, Button } from "@chakra-ui/react"
import { FaCircleCheck } from "react-icons/fa6";
import { PartyContext } from "@/pages/Invitation";
import { useContext } from "react";

function SuccessFeedback({ setOpen, setMode }) {
  const { themeColor, celebrantFirstName } = useContext(PartyContext)

  return (
    <Flex rounded={'xl'} minH={'300px'} bg={'white'} direction={'column'} justify={'center'} align={'center'} gap={3}>
      {/** Concentric circles */}
      <Flex bg={`${themeColor}.200`} rounded={'full'} justify={'center'} align={'center'} width={'90px'} height={'90px'}>
        <Flex bg={`${themeColor}.300`} rounded={'full'} justify={'center'} align={'center'} width={'80px'} height={'80px'}>
          <Icon rounded={'full'} width={'60px'} height={'60px'} bg={'white'} color={`${themeColor}.600`}>
            <FaCircleCheck />
          </Icon>
        </Flex>
      </Flex>

      <Text fontWeight={'extrabold'}>Successful</Text>
      <Text textAlign={'center'} textStyle={'xs'} color={'gray.500'}>Your birthday wish was sent to {celebrantFirstName} </Text>
      <Button onClick={()  => {setMode('form'); setOpen(false)}} mt={4} width={'200px'} colorPalette={themeColor}>OK</Button>
    </Flex>
  )
}

export default SuccessFeedback