import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const Profile = () => {
    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950" src="/Profile/avatar.jpg" alt="" />
        </div>
        <div className="px-3 mt-22">
            <div className="text-3xl font-semibold flex justify-between">Kavindu Hansana <Button
                color="blue" variant="light">Message</Button></div>
            <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} /> Software Engineer &bull; Williy</div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> Colombo, SriLanka
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">About</div>
            <div className="text-xs text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, fuga enim expedita fugiat, error, ut maxime veritatis nostrum ratione quo totam iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil iusto ex magni eligendi aperiam et delectus excepturi consectetur quos.</div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">
                <div className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-gray-600 px-3 py-1">React</div>
                <div className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-gray-600 px-3 py-1">React</div>
                <div className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-gray-600 px-3 py-1">React</div>
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        
    </div>;
};

export default Profile;