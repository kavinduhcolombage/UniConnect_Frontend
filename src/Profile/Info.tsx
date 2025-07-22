import { useState } from "react";
import fields from "../Data/Profile";
import { ActionIcon } from "@mantine/core";
import { IconBriefcase, IconCheck, IconMapPin, IconPencil, IconX } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { notifications } from "@mantine/notifications";
import { updateProfile } from "../Services/ProfileService";

const Info = () => {
    const select = fields;
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);

    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location });
        } else {
            setEdit(false);
        }
    }
    
    const handleSave = async () => {
        setEdit(false);
        let updatedProfile = { ...profile, ...form.getValues() };
        try {
            await updateProfile(updatedProfile);
            dispatch(changeProfile(updatedProfile));
            console.log("Updated Profile:", updatedProfile);
            notifications.show({
                title: 'Updated Succesfully.',
                message: 'profile updated...',
                withCloseButton: true,
                icon: <IconCheck />,
                color: 'teal',
                withBorder: true,
                className: "!border-blue-500 !bg-blue-50 !text-blue-800 !shadow-lg !rounded-lg !p-4 !w-[400px]",
            })
        } catch (error) {
            console.error("Error updating profile:", error);
            notifications.show({
                title: "Error",
                message: "Failed to update profile.",
                icon: <IconX />,
                color: "red",
            });
        }
    }

    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '', location: '' }
    });

    return (<>
        <div className="text-3xl font-semibold flex justify-between">
            {profile.name}
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
            edit ? <><div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
                <SelectInput form={form} name="location" {...select[2]} />
            </> : <><div className="text-xl flex gap-1 items-center">
                <IconBriefcase className="h-5 w-5" stroke={1.5} /> {profile.jobTitle} &bull; {profile.company}
            </div>
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
                </div></>
        }
    </>
    )
}

export default Info;