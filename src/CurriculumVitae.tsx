import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box, Text } from "@chakra-ui/react";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

export const CurriculumVitae = () => (
    <Card textAlign="left" mb={3} borderTopLeftRadius={0}>
        <CardHeader>
            <Heading size='md'>Curriculum Vitae</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Experience/>
                </Box>
                <Box>
                    <Education/>
                </Box>
                <Box>
                    <Certifications/>
                </Box>
            </Stack>
        </CardBody>
    </Card>
)