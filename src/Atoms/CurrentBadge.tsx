import { Badge } from "@chakra-ui/react";

export const CurrentBadge = ({date}: {date: string}) => {
    return(
    <>
    {!date ? <Badge colorScheme={"green"} variant={"outline"} mb={1}>Current</Badge> : date}
    </>
    );
}