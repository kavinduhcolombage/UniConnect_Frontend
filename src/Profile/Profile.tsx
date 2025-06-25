import { ActionIcon, Avatar, Divider, FileInput, Overlay, TagsInput } from "@mantine/core";
import { IconCheck, IconDeviceFloppy, IconEdit, IconPencil } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { getProfile } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile, setProfile } from "../Slices/ProfileSlice";
import Info from "./Info";
import About from "./About";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";


const Profile = () => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js', 'CSS', 'HTML']);
    const { hovered, ref } = useHover();

    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        console.log("New edit state before toggle:", newEdit);
        newEdit[index] = !newEdit[index];
        console.log("New edit state after toggle:", newEdit);
        setEdit(newEdit);
    };

    const handleFileChnage = async (image: any) => {
        let picture: any = await getBase64(image);
        console.log("Picture in Profile:", picture);
        let updatedProfile = { ...profile, picture: picture.split(',')[1] };
        dispatch(changeProfile(updatedProfile));
        notifications.show({
            title: "Profile Picture Updated",
            message: "Your profile picture has been updated successfully.",
            withCloseButton: true,
            icon: <IconCheck />,
            color: 'teal',
            withBorder: true,
            className: "!border-blue-500 !bg-blue-50 !text-blue-800 !shadow-lg !rounded-lg !p-4 !w-[400px]",
        })
    }

    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const profile = useSelector((state: any) => state.profile);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Profile:", profile);
        getProfile(user.profileId).then((data: any) => {
            dispatch(setProfile(data));
            console.log("Profile data:", data);
            setSkills(data.skills);

        }).catch((error: any) => {
            console.error('Error fetching profile:', error);
        });


    }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (profile == null) {
        return <div>No profile data available.</div>;
    }

    return (
        <div className="w-4/5 mx-auto font-['poppins']">
            {/* Profile Banner and Avatar */}
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="Profile Banner" />
                <div ref={ref} className="flex items-center justify-center absolute left-3 -bottom-24">
                    <Avatar className="!w-48 !h-48 border-blue-400 border-8 rounded-full" src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Profile/avatar.jpg"} alt="" />
                    {hovered && <Overlay className="!rounded-full" backgroundOpacity={0.75} />}
                    {hovered && <IconEdit className="absolute z-[300] w-16 h-16" />}
                    {hovered && <FileInput onChange={handleFileChnage} className="absolute z-[301] [&_*]:!rounded-full [&_*]:!h-full h-full w-full" size="lg" radius="xl" variant="transparent" accept="image/png,image/jpeg" />}
                </div>
            </div>

            {/* Profile Header */}
            <div className="px-3 mt-22">
                <Info />
            </div>

            <Divider mx="xs" my="xl" />
            < About />
            <Divider mx="xs" my="xl" />

            {/* Skills Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    Skills
                    <ActionIcon onClick={() => handleEdit(2)} size="lg" color="blue" variant="subtle">
                        {edit[2] ? <IconDeviceFloppy /> : <IconPencil />}
                    </ActionIcon>
                </div>
                {
                    edit[2] ? <TagsInput value={skills} onChange={setSkills} placeholder="Add Skill" splitChars={[',', ' ', '|']} /> : <div className="flex flex-wrap gap-2">
                        {skills?.map((skill: any, index: number) => (
                            <div
                                key={index}
                                className="bg-blue-400 text-sm font-medium bg-opacity-15 rounded-3xl text-white px-3 py-1"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                }
            </div>

            <Divider mx="xs" my="xl" />

            {/* Experience Section */}
            < Experience />
            <Divider mx="xs" my="xl" />

            {/* Certifications Section */}
            <Certificate />

        </div>
    );
};

export default Profile;
