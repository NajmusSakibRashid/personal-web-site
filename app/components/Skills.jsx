import SkillFormat from "@/public/assets/scripts/skill_script.json";
import React from "react";

const Skills = () => {
    return (
        <>
            <div className="mt-16 flex justify-start md:w-1/2 text-2xl font-semibold text-gray-800">
                My Skills
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[auto_auto] md:w-1/2 gap-x-16 m-4">
                {SkillFormat.map((skill, index) => (
                    <React.Fragment key={index}>
                        <div className="text-sm font-medium text-gray-700 mt-2">
                            {skill.title}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skill.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded-md"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default Skills;
