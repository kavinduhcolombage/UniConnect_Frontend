import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import CertiCard from "./CertiCard";
import CertiInput from "./CertiInput";
import { useSelector } from "react-redux";

const Certificate = () => {
    const [edit, setEdit] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    const profile = useSelector((state:any)=> state.profile)

    const handleClick = () => {
        setEdit(!edit);
    }

    return (
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex justify-between">
                Certifications
                {!addCerti && <div className="flex gap-2">
                    {!edit && <ActionIcon onClick={() => setAddCerti(true)} size="lg" color="blue" variant="subtle">
                        <IconPlus />
                    </ActionIcon>}
                    <ActionIcon onClick={handleClick} size="lg" color={edit ? "red.8" : "blue"} variant="subtle">
                        {edit ? <IconX /> : <IconPencil />}
                    </ActionIcon>
                </div>}
            </div>
            <div className="flex flex-col gap-8">
                {addCerti && <CertiInput add setEdit={setAddCerti} />}
                {
                    profile?.certifications?.map((certi: any, index: number) => (
                        <CertiCard key={index} index={index} edit={edit} {...certi} />
                    ))
                }
            </div>
        </div>
    )
}

export default Certificate;