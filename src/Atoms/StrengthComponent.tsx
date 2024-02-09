import { Center, Flex, Text, Square } from "@chakra-ui/react";
import ChangeCirleIcon from '@mui/icons-material/ChangeCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useDataContext } from "../App";

export const StrengthComponent = () => {
    
    const { data } = useDataContext();

    const iconComponent = (icon: string) => {
        switch (icon) {
            case "ChangeCircleIcon":
                return <ChangeCirleIcon />
            case "InventoryIcon": 
                return <InventoryIcon />
            case "Diversity3Icon":
                return <Diversity3Icon />
            default: <></>
        }
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
        {data?.Strength.map((strength) => (
            <Flex key={strength.id} data-cy="profile-strengths">
                <Square size={"50px"}>
                    {iconComponent(strength.icon)}
                </Square>
                <Center>
                    <Text fontSize="lg">{strength.name}</Text>
                </Center>
            </Flex>
        ))}
        </>
    );
}