import { Badge } from "@chakra-ui/react";
interface SkillProps {
    skills: string[]; // Change the type of the array elements as needed
  }

export const SkillBadge : React.FC<SkillProps> = ({ skills }) => {
    return (
        <>
        {skills.map((skill, index) => (
            <Badge key={index} m={1} variant={"outline"} color={"black"}>{skill}</Badge>
        ))}
        </>
    );
}