import { Center, Flex, Heading, Square } from "@chakra-ui/react";

export const CvHeader = ({ text, icon }: { text: string; icon: any }) => (
    <>
        <Flex>
            <Square size={"50px"}>
                {icon}
            </Square>
            <Center>
                <Heading size="s" textTransform="uppercase" paddingStart={5}>
                    {text}
                </Heading>
            </Center>
        </Flex>
    </>
)