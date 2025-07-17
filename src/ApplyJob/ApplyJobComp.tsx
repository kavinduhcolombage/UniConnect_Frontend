import { Divider } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";


const ApplyJobComp = (props:any) => {

    const [sec, setSec] = useState(5);
    const navigate = useNavigate();

    return <div className="w-2/3 mx-auto">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 rounded-xl">
                    <img className="h-14" src={`/CompanyLogo/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">{props.jobTitle}</div>
                    <div className="text-lg ">{props.company} &bull; 3 days ago &bull; 48 applicants</div>
                </div>
            </div>
        </div>
        <Divider my="lg" />
        <ApplicationForm />
    </div>

}

{/* <Notification className={`!border-blue-600 -translate-y-20 !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`} icon={<IconCheck />} color="teal" title="Application Submitted" mt="md" withCloseButton={false}>Redireting to find jobs in {sec} seconds...</Notification> */ }


export default ApplyJobComp;