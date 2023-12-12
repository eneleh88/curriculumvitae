import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { Experience } from "../Molecules/Experience";
import { Education } from "../Molecules/Education";
import { Certifications } from "../Molecules/Certifications";

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