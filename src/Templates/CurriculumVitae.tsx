import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { CvExperience } from "../Organisms/CvExperience";
import { CvEducation } from "../Organisms/CvEducation";
import { CvCertifications } from "../Organisms/CvCertifications";

export const CurriculumVitae = () => (
    <Card textAlign="left" mb={3} borderTopLeftRadius={0}>
        <CardHeader>
            <Heading size='md'>Curriculum Vitae</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <CvExperience/>
                </Box>
                <Box>
                    <CvEducation/>
                </Box>
                <Box>
                    <CvCertifications/>
                </Box>
            </Stack>
        </CardBody>
    </Card>
)