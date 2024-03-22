import { skillSetList } from "@/configs";
import { FadeInDiv, FadeInList, SkillCard } from ".";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <FadeInDiv>
        <h2 className="mb-4">My Skills</h2>
      </FadeInDiv>
      <div className="flex flex-wrap justify-center">
        {skillSetList.map((item, index) => (
          <FadeInDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.name}</h3>
              <FadeInList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </FadeInList>
            </div>
          </FadeInDiv>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
