import { IconHeart, IconMapPin } from "@tabler/icons-react"
import { Avatar, Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
    return <div className="flex flex-col gap-2 bg-gray-400 p-4 w-96 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-blue-400">
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="p-2 bg-gray-300 rounded-full">
                    <Avatar size="lg" src="/google.png" alt="" />
                </div>
                <div>
                    <div className="font-semibold text-lg">{props.name}</div>
                    <div className="text-sm">{props.role} &bull; {props.company} </div>
                </div>
            </div>
            <IconHeart className="cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-gray-200 [&>div]:text-blue-500 [&>div]:rounded-lg text-xs">
            {
                props.topSkills?.map((skill:any, index:any) => {
                    <div key={index} className="p-2 py-1 text-blue-500 rounded-lg text-xs">{skill}</div>
                })
            }
            
        </div>
        <Text className="text-xs text-justify" lineClamp={3}>
            {props.about}
        </Text>
        <Divider size="xs" mx="md" />
        <div className="flex justify-between">
            <div className="font-semibold">
                {props.expectedCtc}
            </div>
            <div className="flex gap-2 text-sm items-center">
                <IconMapPin className="h-5 w-5" stroke={1.5} />
                {props.location}
            </div>
        </div>

        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            <Link to="/talent-profile">
                <Button className="!text-blue-700" variant="outline" fullWidth>Profile</Button>
            </Link>
            <div>
                <Button className="!text-blue-700" variant="light" fullWidth>Message</Button>
            </div>


        </div>
    </div>
}

export default TalentCard;