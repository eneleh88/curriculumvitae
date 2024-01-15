import { CalendarIcon, InfoOutlineIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Link, Box, Text } from "@chakra-ui/react";
import moment from "moment";

export const CvCertifications = (props: { certificationName: string, issuedBy: string, earnedDate: Date, credentialId: string | null, credentialLink: string | null }) => {
    const earnedDate = moment(props.earnedDate).format('L');
    return (
        <Box paddingStart={5} paddingBottom={5} pt="2">
            <Heading size="sm">{props.certificationName} from {props.issuedBy}</Heading>
            <Text fontSize={"sm"}>
                Certified Date: {earnedDate}<br></br>
                {props.credentialId ? <>Certification ID: {props.credentialId}<br></br></> : ""}
                {props.credentialLink ? <><ExternalLinkIcon w={4} marginEnd={1} /><Link href={props.credentialLink} isExternal>{props.credentialLink}</Link></> : ""}    
            </Text>
        </Box>
    );
}