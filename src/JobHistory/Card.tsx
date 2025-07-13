import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react"
import { Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";

const Card = (props: any) => {
    return <Link to="/jobs" className="flex flex-col gap-2 bg-gray-400 p-4 w-72 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-blue-400 cursor-pointer">
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
            {props.saved ? <IconBookmarkFilled className="cursor-pointer text-blue-500" /> : <IconBookmark className="cursor-pointer" />}
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-gray-200 [&>div]:text-blue-500 [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="text-xs text-justify" lineClamp={3}>
            {props.description}
        </Text>
        <Divider size="xs" mx="md" />
        <div className="flex justify-between">
            <div className="font-semibold">
                Rs.{props.package}
            </div>
            <div className="flex gap-2 text-sm items-center">
                <IconClockHour3 className="h-5 w-5" stroke={1.5} />
                {props.applied || props.interviewing ? "Applied " : props.offered ? "Interviewed " : "Posted "}{props.postedDaysAgo} days ago
            </div>
        </div>
        {
            (props.offered || props.interviewing) && <Divider size="xs" mx="md" />
        }
        {
            props.offered && <div className="flex gap-2">
                <Button className="!text-blue-700" variant="outline" fullWidth>Accept</Button>
                <Button className="!text-blue-700" variant="light" fullWidth>Reject</Button>
            </div>
        }
        {
            props.interviewing && <div className="flex gap-2 text-sm items-center">
                <IconCalendarMonth className="text-blue-500 w-5 h-5" stroke={1.5} />August 25, 2025 &bull; <span className="text-gray-800">10:00AM</span>
            </div>
        }
    </Link>
}

export default Card;