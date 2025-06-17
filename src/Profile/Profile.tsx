import { ActionIcon, Divider, TagsInput } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import { getProfile } from "../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../Slices/ProfileSlice";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import Info from "./Info";
import About from "./About";


const Profile = () => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js', 'CSS', 'HTML']);


    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        console.log("New edit state before toggle:", newEdit);
        newEdit[index] = !newEdit[index];
        console.log("New edit state after toggle:", newEdit);
        setEdit(newEdit);
    };


    // const location = useLocation();
    // const userIdFromState = location.state?.userId; // Retrieve user ID from route state
    // const userIdFromStorage = JSON.parse(localStorage.getItem("user") || "{}").id; // Retrieve user ID from local storage
    // const userId = userIdFromState || userIdFromStorage; // Use state if available, otherwise fallback to local storage
    // const profileId = JSON.parse(localStorage.getItem("user") || "{}").profileId;


    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const profile = useSelector((state: any) => state.profile);
    //const [profile, setProfile] = useState<any>(null);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        // console.log("User ID from route state:", userId); // Debugging line
        // console.log(JSON.parse(localStorage.getItem("user") || "{}").profileId); // Debugging line
        // if (profileId) {
        //     getProfile(profileId)
        //         .then((res) => {
        //             console.log("Profile data:", res); // Debugging line
        //             setProfile(res);
        //             setAbout(res.about || ''); // Initialize about with profile data or empty string
        //             setLoading(false);
        //         })
        //         .catch((err) => {
        //             console.error('Error fetching profile:', err);
        //             setLoading(false);
        //         });
        // }
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
                <div className="absolute left-3 -bottom-24">
                    <img
                        className="w-48 h-48 rounded-full border-mine-shaft-950"
                        src="/Profile/avatar.jpg"
                        alt="Profile Avatar"
                    />
                    <ActionIcon className="absolute left-40 bottom-7 rounded-full" size="lg" color="blue" variant="subtle">
                        <IconPencil />
                    </ActionIcon>
                </div>
            </div>

            {/* Profile Header */}
            <div className="px-3 mt-22">
                <Info />
            </div>

            <Divider mx="xs" my="xl" />

            {/* About Section */}
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
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">
                    Experience
                    {!addExp && <div className="flex gap-2">
                        {!edit[3] && <ActionIcon onClick={() => setAddExp(true)} size="lg" color="blue" variant="subtle">
                            <IconPlus />
                        </ActionIcon>}
                        <ActionIcon onClick={() => handleEdit(3)} size="lg" color="blue" variant="subtle">
                            {edit[3] ? <IconDeviceFloppy /> : <IconPencil />}
                        </ActionIcon>
                    </div>}
                </div>
                <div className="flex flex-col gap-8">
                    {addExp && <ExpInput add setEdit={setAddExp} />}
                    {
                        profile?.experience?.map((exp: any, index: number) => (
                            <ExpCard key={index} {...exp} edit={edit[3]} />
                        ))
                    }
                </div>
            </div>

            <Divider mx="xs" my="xl" />

            {/* Certifications Section */}
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">
                    Certifications
                    {!addCerti && <div className="flex gap-2">
                        {!edit[4] && <ActionIcon onClick={() => setAddCerti(true)} size="lg" color="blue" variant="subtle">
                            <IconPlus />
                        </ActionIcon>}
                        <ActionIcon onClick={() => handleEdit(4)} size="lg" color="blue" variant="subtle">
                            {edit[4] ? <IconDeviceFloppy /> : <IconPencil />}
                        </ActionIcon>
                    </div>}
                </div>
                <div className="flex flex-col gap-8">
                    {addCerti && <CertiInput add setEdit={setAddCerti} />}
                    {
                        profile?.certifications?.map((certi: any, index: number) => (
                            <CertiCard key={index} edit={edit[4]} {...certi} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
