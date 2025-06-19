import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { notifications } from "@mantine/notifications";

const About = () => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile);
    const [about, setAbout] = useState("");

    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            setAbout(profile?.about);

        } else {
            setEdit(false);
        }
    }

    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, about: about };
        dispatch(changeProfile(updatedProfile));
        console.log("Updated Profile:", updatedProfile);
        notifications.show({
            title: 'Updated Succesfully.',
            message: 'About updated...',
            withCloseButton: true,
            icon: <IconCheck />,
            color: 'teal',
            withBorder: true,
            className: "!border-blue-500 !bg-blue-50 !text-blue-800 !shadow-lg !rounded-lg !p-4 !w-[400px]",
        })
    }

    return (
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                About
                <div className="flex gap-2">
                    {edit && <ActionIcon onClick={handleSave} size="lg" color="green.8" variant="subtle">
                        <IconCheck />
                    </ActionIcon>}
                    <ActionIcon onClick={handleClick} size="lg" color={edit ? "red.8" : "blue"} variant="subtle">
                        {edit ? <IconX /> : <IconPencil />}
                    </ActionIcon>
                </div>
            </div>
            {
                edit ? <Textarea size="md" value={about} placeholder="Enter about your self.." autosize minRows={3} onChange={(event) => setAbout(event.currentTarget.value)} /> : <div className="text-base text-justify">{profile?.about}</div>
            }
        </div>
    )
}

export default About;