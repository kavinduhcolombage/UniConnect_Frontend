import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react"
import { Avatar, Button, Divider, Input, Modal, Text, Textarea } from '@mantine/core';
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    return <div className="flex flex-col gap-2 bg-gray-400 p-4 w-105 rounded-xl hover:shadow-[0_0_5px_1px_blue] !shadow-blue-400">
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
                props.topSkills?.map((skill: any, index: any) =>
                    <div key={index} className="p-2 py-1 text-blue-500 rounded-lg text-xs">{skill}</div>
                )
            }

        </div>
        <Text className="text-xs text-justify" lineClamp={3}>
            {props.about}
        </Text>
        <Divider size="xs" mx="md" />
        {
            props.invited ? <div className="flex gap-2 text-sm items-center">
                <IconCalendarMonth stroke={1.5} />Interview : August 25, 2025 10:00AM
            </div> : <div className="flex justify-between">
                <div className="font-semibold">
                    {props.expectedCtc}
                </div>
                <div className="flex gap-2 text-sm items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5} />
                    {props.location}
                </div>
            </div>
        }

        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            {
                !props.invited && <>
                    <Link to="/talent-profile">
                        <Button className="!text-blue-700" variant="outline" fullWidth>Profile</Button>
                    </Link>
                    <div>
                        {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} className="!text-blue-700" variant="light" fullWidth>Shedule</Button> : <Button className="!text-blue-700" variant="light" fullWidth>Message</Button>}
                    </div>
                </>
            }
            {
                props.invited && <>
                    <div>
                        <Button className="!text-blue-700" variant="outline" fullWidth>Accept</Button>
                    </div>
                    <div>
                        <Button className="!text-blue-700" variant="light" fullWidth>Reject</Button>
                    </div>
                </>
            }

        </div>
        <Modal opened={opened} onClose={close} title="Shedule Interview" centered>
            <div className="flex flex-col gap-4">
                <Textarea placeholder="Enter Date" />
                <Textarea placeholder="Enter Time" />
                <Button className="!text-blue-700" variant="light" fullWidth>Shedule</Button>
            </div>
        </Modal>
    </div>
}

export default TalentCard;