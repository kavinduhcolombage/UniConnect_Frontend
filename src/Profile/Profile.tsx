import { Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin, IconPencil } from "@tabler/icons-react";

import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { profile } from "../Data/TalentData";

const Profile = () => {
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950" src="/Profile/avatar.jpg" alt="" />
        </div>
        <div className="px-3 mt-22">
            <div className="text-3xl font-semibold flex justify-between">
                Kavindu Hansana
                <IconPencil className="cursor-pointer" stroke={1.5}/>
            </div>
            <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} /> Software Engineer &bull; WSO2</div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> Colombo, Sri Lanka
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">About</div>
            <div className="text-xs text-justify">As a Software Engineer at WSO2, I focus on developing robust and efficient enterprise solutions. I have hands-on experience in building full-stack applications using Angular for the front-end and Java for the backend. My database of choice is PostgreSQL due to its reliability and performance. I am committed to delivering clean code, scalable systems, and impactful solutions tailored to business needs in the Sri Lankan and global markets.</div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">

                <div className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-gray-600 px-3 py-1">Java</div>
                <div className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-gray-600 px-3 py-1">Spring Boot</div>
                <div className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-gray-600 px-3 py-1">React</div>



            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Experience</div>
            <div className="flex flex-col gap-8">
                {
                    profile.experience.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                }
            </div>

        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Certifications</div>
            <div className="flex flex-col gap-8">
                {
                    profile.certifications.map((certi: any, index: any) => <CertiCard key={index} {...certi} />)
                }
            </div>
        </div>
    </div>;
};

export default Profile;