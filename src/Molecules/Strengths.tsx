import { Heading, Box } from "@chakra-ui/react";
import { StrengthComponent } from "../Atoms/StrengthComponent";
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
// import { Strength } from "@prisma/client";


export const Strengths = (props: { myStrengths: { id: number; name: string; icon: string; profileId: number; }[]; }) => {
    console.log(props.myStrengths)
    return (
        <Box>
            <Heading size="xs" textTransform="uppercase">
                Strengths
            </Heading>
            {props.myStrengths.map((strength) => (
                <StrengthComponent
                    key={strength.id}
                    id={strength.id}
                    name={strength.name}
                    icon={strength.icon}
                    profileId={strength.profileId}
                />
            ))}
        </Box>
    );
}