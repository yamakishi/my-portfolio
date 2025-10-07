import { skills } from "../data/skills";
import Card from "./common/Card";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <Card
              key={idx}
              title={skill}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
