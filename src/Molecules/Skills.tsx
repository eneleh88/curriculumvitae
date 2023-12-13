import { Heading, Box } from "@chakra-ui/react";
import { SkillBadge } from "../Atoms/SkillBadge";

export const Skills = () => {
    const skills = ["React", "Chakra UI", "Next.js", "Azure Storage", "Azure App Service", "PostgresSQL", "NextAuth", "Nginx", "Leadership", "Atomic Design", "MySQL", "BurpSuite", "Azure AD", "Material Design UI", "PHP", "Yii", "Scrum", "Vagrant", "Material Design Bootstrap", "Cronjobs", "Git", "Trello", "Vue3", "Jira", "Postman", "HTML", "CSS", "Agile", "JSON", "Rest API", "Mendix"];
    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                Skills
            </Heading>
            <SkillBadge skills={skills.sort()}/>
        </Box>
    );
}
