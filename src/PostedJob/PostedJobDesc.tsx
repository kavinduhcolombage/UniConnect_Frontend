import { Badge, Tabs } from "@mantine/core";
import JobDescription from "../JobDescription/JobDescription";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = (props: any) => {
    return (
        <div className="mt-5 w-3/4 px-5">
            {(Object.keys(props).length > 0) ? <><div className="text-2xl font-semibold flex items-center">{props.jobTitle}<Badge size="sm" variant="light" color="blue" ml="sm">{props.jobStatus}</Badge></div>
                <div className="font-medium mb-5">{props.location || "No Location"}</div>
                <div>
                    <Tabs variant="outline" defaultValue="overview">
                        <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-blue-500">
                            <Tabs.Tab value="overview">Overview</Tabs.Tab>
                            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                            <Tabs.Tab value="invited">Invited</Tabs.Tab>
                            <Tabs.Tab value="offered">Offered</Tabs.Tab>
                            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="overview" className="[&>div]:w-full">
                            <JobDescription {...props} edit={true} closed={props.jobStatus == "CLOSED"} />
                        </Tabs.Panel>

                        <Tabs.Panel value="applicants">
                            <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                {
                                    props.applicants?.filter((applicant: any) => applicant.applicationStatus == "APPLIED").map((applicant: any, index: any) => <TalentCard key={index} {...applicant} posted={true} />
                                    )
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="invited">
                            <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                {
                                    props.applicants?.filter((applicant: any) => applicant.applicationStatus == "INTERVIEWING").map((applicant: any, index: any) => <TalentCard key={index} {...applicant} invited={true} />
                                    )
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="offered">
                            <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                {
                                    props.applicants?.filter((applicant: any) => applicant.applicationStatus == "OFFERED").map((applicant: any, index: any) => <TalentCard key={index} {...applicant} offered />
                                    )
                                }
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="rejected">
                            <div className="mt-10 flex flex-wrap gap-5 justify-around">
                                {
                                    props.applicants?.filter((applicant: any) => applicant.applicationStatus == "REJECTED").map((applicant: any, index: any) => <TalentCard key={index} {...applicant} offered />
                                    )
                                }
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </> : <div className="flex items-center justify-center text-lg h-full font-semibold">No Job details availble, Select Valid JOB</div>}
        </div>
    )
}

export default PostedJobDesc;