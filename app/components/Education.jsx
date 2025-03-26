import Educations from "@/public/assets/scripts/education_script.json";
import React from "react";
import Image from "next/image";
const Education = () => {
    return (
        <>
            <div className="mt-16 flex justify-start md:w-1/2 text-2xl font-semibold text-gray-800">
                My Education
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 gap-x-16 mt-4">
                {Educations.map((education, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 rounded-2xl border-solid border-2 border-gray-200 p-4"
                    >
                        <Image
                            src={education.logo}
                            alt={education.institute}
                            width={64}
                            height={64}
                            className="rounded-all"
                        />
                        <div className="text-sm font-medium text-gray-700 mt-2">
                            Session: {education.session}
                        </div>
                        <div className="text-lg font-semibold text-gray-700">
                            {education.institute}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                            {education.degree}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                            Grade: {education.grade}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Education;
