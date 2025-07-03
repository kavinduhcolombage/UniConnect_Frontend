import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, skills } from "../Data/JobDescriptionData";

const JobDescription = (props:any) => {
    return <div className="w-2/3">
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="p-3 bg-gray-300 rounded-xl">
                    <img className="h-14" src="/google.png" alt="" />
                </div>
                <div>
                    <div className="font-semibold text-2xl">software enginner</div>
                    <div className="text-lg">Google &bull; 3 days ago &bull;  48 applicants</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
                    <Button className="!text-blue-700 !bg-blue-200 hover:!border-blue-600" size="sm" variant="light">{props.edit?"edit":"Apply"}</Button>
                </Link>
                {props.edit?<Button color="red" className="!text-red-500 !bg-red-200 hover:!border-red-700" size="sm" variant="outline">Delete</Button>:<IconBookmark className="cursor-pointer" />}
            </div>
        </div>
        <Divider my="xl" />

        <div className="flex justify-between">
            {
                card.map((item: any, index: number) => <div key={index} className="flex flex-col items-center gap-1">
                    <ActionIcon radius="xl" aria-label="Settings" variant="lght" className="!h-12 !w-12 !bg-blue-200 !text-blue-700 hover:!border-blue-600">
                        <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                    </ActionIcon>
                    <div className="text-sm">{item.name}</div>
                    <div className="font-semibold">{item.value}</div>
                </div>)
            }
        </div>
        <Divider my="xl" />
        <div>
            <div className="text-xl font-semibold mb-5">Required Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((item, index) => <ActionIcon key={index} aria-label="Settings" radius="xl" p="xs" variant="lght" className="!h-fit !w-fit font-medium !text-sm !bg-blue-200 !text-blue-700 hover:!border-blue-600">{item}

                    </ActionIcon>)
                }

            </div>
        </div>
        <Divider my="xl" />
        <div>
            <div className="text-xl font-semibold mb-5">About Job</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae ratione fugiat quia perferendis at, distinctio facilis, quaerat aperiam id voluptatibus amet neque explicabo dolore quis voluptas illo recusandae sapiente rem placeat earum ullam. Possimus ullam repellendus odit? Nesciunt, ipsam? Vitae ut adipisci libero totam quibusdam atque quam est nihil!
        </div>
        <Divider my="xl" />
        <div>
            <div className="text-xl font-semibold mb-5">About Company</div>
            <div className="flex justify-between mb-5">
                <div className="flex gap-3 items-center">
                    <div className="p-3 bg-gray-300 rounded-xl">
                        <img className="h-14" src="/google.png" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-medium text-lg">Google</div>
                        <div className="text-lg">10k+ Employees</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/company">
                        <Button className="!text-blue-700 !bg-blue-200 hover:!border-blue-600" size="sm" variant="light">Company Page</Button>
                    </Link>
                </div>
            </div>
            <div className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum dolore porro quasi. Laudantium labore cumque itaque quidem quod consequatur veniam dolores! Eum consequuntur, corrupti assumenda officia a obcaecati ratione ipsa facere iusto mollitia nemo aspernatur, expedita voluptatem vitae itaque!</div>
        </div>
    </div>
}

export default JobDescription;