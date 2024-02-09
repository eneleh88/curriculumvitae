import { Center, Flex, Square, Text } from '@chakra-ui/react';
import PlaceIcon from '@mui/icons-material/Place';
import { useDataContext } from '../App';

export const LocationTag = () => {
    const { data } = useDataContext();
    
    return(
        <>
        <Flex mt={2} data-cy="profile-location">
            <Square size={"25px"}>
                <PlaceIcon/>
            </Square>
            <Center>
            <Text fontSize="sm" fontWeight={"bold"}>{data?.location}</Text>
            </Center>
        </Flex>
    </>
    );
}