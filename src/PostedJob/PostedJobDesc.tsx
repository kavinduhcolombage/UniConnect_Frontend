import { Badge, Tabs } from "@mantine/core";
import JobDescription from "../JobDescription/JobDescription";

const PostedJobDesc = () => {
    return (
        <div className="mt-5 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center">Software Enginner<Badge size="sm" variant="light" color="blue" ml="sm">Badge</Badge></div>
            <div className="font-medium mb-5">Colombo, SriLanka</div>
            <div>
                <Tabs variant="outline" defaultValue="overview">
                    <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-blue-500">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" className="[&>div]:w-full">
                        <JobDescription />
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        f
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        f
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default PostedJobDesc;