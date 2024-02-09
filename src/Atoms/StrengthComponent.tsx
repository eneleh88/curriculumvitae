import { Center, Flex, Text, Square } from "@chakra-ui/react";
import ChangeCirleIcon from '@mui/icons-material/ChangeCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const StrengthComponent = (props: { name: string, icon: string }) => {


    const iconComponent = () => {
        switch (props.icon) {
            case "ChangeCircleIcon":
                return <ChangeCirleIcon />
            case "InventoryIcon": 
                return <InventoryIcon />
            case "Diversity3Icon":
                return <Diversity3Icon />
            default: <></>
        }
    }

    return (
        <>
            <Flex>
                <Square size={"50px"}>
                    {iconComponent()}
                </Square>
                <Center>
                    <Text fontSize="lg">{props.name}</Text>
                </Center>
            </Flex>
        </>
    );
}