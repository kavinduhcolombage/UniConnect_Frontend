import { Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin, IconPencil } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const userIdFromState = location.state?.userId; // Retrieve user ID from route state
    const userIdFromStorage = JSON.parse(localStorage.getItem("user") || "{}").id; // Retrieve user ID from local storage
    const userId = userIdFromState || userIdFromStorage; // Use state if available, otherwise fallback to local storage
    const profileId = JSON.parse(localStorage.getItem("user") || "{}").profileId
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("User ID from route state:", userId); // Debugging line
        console.log(JSON.parse(localStorage.getItem("user") || "{}").profileId); // Debugging line
        if (profileId) {
            getProfile(profileId)
                .then((res) => {
                    console.log("Profile data:", res); // Debugging line
                    setProfile(res);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Error fetching profile:', err);
                    setLoading(false);
                });
        }
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return <div>No profile data available.</div>;
    }

    return (
        <div className="w-4/5 mx-auto">
            {/* Profile Banner and Avatar */}
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="Profile Banner" />
                <img
                    className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950"
                    src="/Profile/avatar.jpg"
                    alt="Profile Avatar"
                />
            </div>

            {/* Profile Header */}
            <div className="px-3 mt-22">
                <div className="text-3xl font-semibold flex justify-between">
                    {profile.name}
                    <IconPencil className="cursor-pointer" stroke={1.5} />
                </div>
                <div className="text-xl flex gap-1 items-center">
                    <IconBriefcase className="h-5 w-5" stroke={1.5} /> {profile.role} &bull; {profile.company}
                </div>
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
                </div>
            </div>

            <Divider mx="xs" my="xl" />

            {/* About Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">About</div>
                <div className="text-xs text-justify">{profile.about}</div>
            </div>

            <Divider mx="xs" my="xl" />

            {/* Skills Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3">Skills</div>
                <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill: string, index: number) => (
                        <div
                            key={index}
                            className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-gray-600 px-3 py-1"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            <Divider mx="xs" my="xl" />

            {/* Experience Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">Experience</div>
                <div className="flex flex-col gap-8">
                    {profile.experience.map((exp: any, index: number) => (
                        <ExpCard key={index} {...exp} />
                    ))}
                </div>
            </div>

            <Divider mx="xs" my="xl" />

            {/* Certifications Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5">Certifications</div>
                <div className="flex flex-col gap-8">
                    {profile.certifications.map((certi: any, index: number) => (
                        <CertiCard key={index} {...certi} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;