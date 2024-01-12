import { Center, Flex, Text, Square } from "@chakra-ui/react";
import { Strength } from "@prisma/client";

export const StrengthComponent = (props: Strength) => {
    
    console.log(props)
    
    return(
    <>
        <Flex>
            <Square size={"50px"}>
                {props.name}
            </Square>
            <Center>
            <Text fontSize="lg">{props.name}Fix this sometime</Text>
            </Center>
        </Flex>
    </>
    );
}