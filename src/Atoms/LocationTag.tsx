import { Center, Flex, Square, Text } from '@chakra-ui/react';
import PlaceIcon from '@mui/icons-material/Place';

export const LocationTag = () => {
    return(
        <>
        <Flex>
            <Square size={"25px"}>
                <PlaceIcon/>
            </Square>
            <Center>
            <Text fontSize="sm" fontWeight={"bold"}>Horten, Norway</Text>
            </Center>
        </Flex>
    </>
    );
}