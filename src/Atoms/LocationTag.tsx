import { Center, Flex, Square, Text } from '@chakra-ui/react';
import PlaceIcon from '@mui/icons-material/Place';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export const LocationTag=(props: { location: string | undefined; }) =>
{
    return(
        <>
        <Flex mt={2}>
            <Square size={"25px"}>
                <PlaceIcon/>
            </Square>
            <Center>
            <Text fontSize="sm" fontWeight={"bold"}>{props.location}</Text>
            </Center>
        </Flex>
    </>
    );
}