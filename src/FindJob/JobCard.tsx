import { IconBookmark, IconClockHour3 } from "@tabler/icons-react"
import { Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";
import { timeAgo } from "../Services/Utilities";

const JobCard = (props: any) => {
    return <Link to={`/jobs/${props.id}`} className="flex flex-col gap-2 bg-gray-400 p-4 w-72 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-blue-400 cursor-pointer">
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="p-2 bg-gray-300 rounded-md">
                    <img className="h-7" src="/google.png" alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-sm">{props.company} &#x2022; {props.applicants ? props.applicants.length : 0} applicants</div>
                </div>
            </div>
            <IconBookmark className="cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-gray-200 [&>div]:text-blue-500 [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="text-xs text-justify" lineClamp={3}>
            {props.about}
        </Text>
        <Divider size="xs" mx="md" />
        <div className="flex justify-between">
            <div className="font-semibold">
                Rs.{props.packageOffered}
            </div>
            <div className="flex gap-2 text-sm items-center">
                <IconClockHour3 className="h-5 w-5" stroke={1.5} />
                {timeAgo(props.postTime)}
            </div>
        </div>
    </Link>
}

export default JobCard;