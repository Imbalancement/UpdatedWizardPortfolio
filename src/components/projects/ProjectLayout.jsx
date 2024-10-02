import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex items-center justify-center w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
