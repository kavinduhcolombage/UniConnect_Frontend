import { Button, Divider, FileInput, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";

const ApplyJobComp = () => {
    return <div className="w-2/3 mx-auto">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 rounded-xl">
                    <img className="h-14" src={`CompanyLogo/Google.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engineer</div>
                    <div className="text-lg ">Google &bull; 3 days ago &bull; 48 applicants</div>
                </div>
            </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">Submit Your Application</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput label="Full Name" withAsterisk placeholder="Enter Name" />
                <TextInput label="Email" withAsterisk placeholder="Enter email" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput hideControls label="Contact Number" withAsterisk placeholder="Enter Phone Number" />
                <TextInput label="Personel Website" withAsterisk placeholder="Enter URL" />
            </div>
            <FileInput leftSection={<IconPaperclip stroke={1.5}/>} label="Resume" withAsterisk placeholder="Upload your resume" accept=".pdf,.doc,.docx" />
            <Textarea label="Cover Letter" withAsterisk placeholder="Write your cover letter here..." autosize minRows={4} maxRows={8} />
            <Button className="!text-blue-700 !bg-blue-200 hover:!border-blue-600" variant="light">Submit Application</Button>
        </div>
    </div>
}

export default ApplyJobComp;