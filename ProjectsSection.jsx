"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Board of Regents Conference with Chancellor Mnookin",
    description: "Invited to discuss how to implement use of ChatGPT in future semesters",
    image: "/images/projects/Chancellor.png",
    tag: ["All", "Conference"],
    gitUrl: "/",
    previewUrl: "https://www.instagram.com/p/CodMXHruDb3/",
  },
  {
    id: 2,
    title: "AI Article Summarizer | Javascript",
    description: "A payment-free way to use GPT-4 to summarize your article",
    image: "/images/projects/Summarizer.png",
    tag: ["All", "Web/Mobile"],
    gitUrl: "/",
    previewUrl: "https://marvelous-seahorse-503423.netlify.app/",
  },
  {
    id: 3,
    title: "UCLA Research Conference",
    description: "", 
    image: "/images/projects/UCLA.png",
    tag: ["All", "Conference"],
    gitUrl: "/",
    previewUrl: "https://mcnair.wisc.edu/2022/09/uw-madison-mcnair-scholars-present-research-at-national-conference-in-l-a/",
  },
  {
    id: 4,
    title: "HomieHub | React Native, Firebase",
    description: "An app transforming shared living for college students, simplifying roommate challenges for a harmonious, enjoyable experience.",
    image: "/images/projects/Homie_Hub.png",
    tag: ["All", "Web/Mobile"],
    gitUrl: "https://github.com/aarontorres0/HomieHub",
    previewUrl: "https://drive.google.com/file/d/1jPgXeXlda6hy3vgQaB5dKwXU28EspZ0j/view?usp=sharing",
  },
  {
    id: 5,
    title: "Harvard Research Conference",
    description: "",
    image: "/images/projects/Harvard.png",
    tag: ["All", "Conference"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ecommerce ",
    description: "Codex provides another AI resource for you in case the original service is busy",
    image: "/images/projects/NIKE.png",
    tag: ["All", "Web/Mobile"],
    gitUrl: "https://github.com/oosinloye/Codex",
    previewUrl: "https://codex-oosinloye.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web/Mobile"
          isSelected={tag === "Web/Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Conference"
          isSelected={tag === "Conference"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
