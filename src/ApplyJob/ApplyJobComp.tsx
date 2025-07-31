import { Divider } from "@mantine/core";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../Services/Utilities";

const ApplyJobComp = (props:any) => {

    return <div className="w-2/3 mx-auto">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 rounded-xl">
                    <img className="h-14" src={`/CompanyLogo/${props.company}.png`} alt="Company Logo" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">{props.jobTitle}</div>
                    <div className="text-lg ">{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants ? props.applicants.length : 0} applicants</div>
                </div>
            </div>
        </div>
        <Divider my="lg" />
        <ApplicationForm />
    </div>

}

export default ApplyJobComp;