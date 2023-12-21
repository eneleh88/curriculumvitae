import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { CvExperience } from "../Molecules/CvExperience";
import { CvEducation } from "../Molecules/CvEducation";
import { CvCertifications } from "../Molecules/CvCertifications";

export const CurriculumVitae = () => {
    const bgColor = "#f8f6e8";


    return (
        <Card variant={"filled"} textAlign="left" mb={3} borderTopLeftRadius={0} backgroundColor={bgColor}>
            <CardHeader>
                <Heading size='xl'>Curriculum Vitae</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <CvExperience />
                    </Box>
                    <Box>
                        <CvEducation />
                    </Box>
                    <Box>
                        <CvCertifications />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}