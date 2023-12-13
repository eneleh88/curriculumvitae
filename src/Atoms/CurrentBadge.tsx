import { Badge } from "@chakra-ui/react";

export const CurrentBadge = ({date}: {date: string}) => {
    return(
    <>
    {!date ? <Badge colorScheme="green">Current</Badge> : date}
    </>
    );
}