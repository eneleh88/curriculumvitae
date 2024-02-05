import { Center, Flex, Text, Square } from "@chakra-ui/react";
import { Strength } from "@prisma/client";
import ChangeCirleIcon from '@mui/icons-material/ChangeCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const StrengthComponent = (props: { name: string, icon: string, profileId: number }) => {
    
    
    
    return(
    <>
        <Flex>
            <Square size={"50px"}>
                !
            </Square>
            <Center>
            <Text fontSize="lg">{props.name}</Text>
            </Center>
        </Flex>
    </>
    );
}