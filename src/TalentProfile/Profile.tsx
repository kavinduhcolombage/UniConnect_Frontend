import { Avatar, Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../Services/ProfileService";

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState<any>({});

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getProfile(id).then((res) => {
            console.log("res profile ", res)
            setProfile(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [id]);


    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            {/* <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950" src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Profile/avatar.jpg"} alt="" /> */}
            <div className="flex items-center justify-center absolute left-6 -bottom-18">
                <Avatar className="!w-48 !h-48 border-blue-400 border-8 rounded-full" src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Profile/avatar.jpg"} alt="" />
            </div>
        </div>
        <div className="px-3 mt-22">
            <div className="text-3xl font-semibold flex justify-between">{profile?.name}<Button
                color="blue" variant="light">Message</Button></div>
            <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} /> {profile?.jobTitle} &bull; {profile?.company}</div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile?.location}
            </div>
        </div>
        <Divider mx="lg" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">About</div>
            <div className="text-base text-justify">{profile?.about}</div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">

                {
                    profile?.skills?.map((skill: any, index: any) => <div key={index} className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-white px-3 py-1">{skill}</div>)
                }

            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Experience</div>
            <div className="flex flex-col gap-8">
                {
                    profile?.experience?.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                }
            </div>

        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Certifications</div>
            <div className="flex flex-col gap-8">
                {
                    profile?.certifications?.map((certi: any, index: any) => <CertiCard key={index} {...certi} />)
                }
            </div>
        </div>
    </div>;
};

export default Profile;