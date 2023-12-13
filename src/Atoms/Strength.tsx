import { Center, Flex, Text, Square } from "@chakra-ui/react";

export const Strength = ({ text, icon }: { text: string; icon: any }) => (
    <>
        <Flex>
            <Square size={"50px"}>
                {icon}
            </Square>
            <Center>
            <Text fontSize="lg">{text}</Text>
            </Center>
        </Flex>
    </>

)