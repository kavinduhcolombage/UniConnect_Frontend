import { IconBookmark, IconClockHour3 } from "@tabler/icons-react"
import { Divider, Text } from '@mantine/core';

const JobCard = (props:any) => {
    return <div className="flex flex-col gap-2 bg-gray-400 p-4 w-72 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-blue-400">
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="p-2 bg-gray-300 rounded-md">
                    <img className="h-7" src="/google.png" alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-sm">{props.company} &#x2022; {props.applicants} applicants</div>
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
            {props.description}
        </Text>
        <Divider size="xs" mx="md"/>
        <div className="flex justify-between">
            <div className="font-semibold">
                Rs.{props.package}
            </div>
            <div className="flex gap-2 text-sm items-center">
                <IconClockHour3 className="h-5 w-5" stroke={1.5}/>
                {props.postedDaysAgo} days ago
            </div>
        </div>
    </div>
}

export default JobCard;