import { Skill } from "@/types/interfaces";
import { FC } from "react";
import SkillItem from "./skill-item";

interface SkillsContainerProps {
  data: Skill[];
  label: string;
}

const SkillsContainer: FC<SkillsContainerProps> = ({ data, label }) => {
  return (
    <article className="w-full border border-primary rounded-lg">
      <h2 className="w-full">
        {label}
      </h2>
      <div className="px-12 py-6 space-y-6 w-full">
        {data.map((item) => (
          <SkillItem key={item._id} item={item} />
        ))}
      </div>
    </article>
  );
};

export default SkillsContainer;