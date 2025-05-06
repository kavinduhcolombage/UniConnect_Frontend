import { Button, Divider, FileInput, NumberInput, Textarea, TextInput, Notification, LoadingOverlay } from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ApplyJobComp = () => {
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(()=>{
            x--;
            setSec(x);
            if (x === 0) {
                navigate("/find-job")
            }
        }, 1000)
    }
    return <><div className="w-2/3 mx-auto">
        <LoadingOverlay className="!fixed" visible={submit} zIndex={1000} overlayProps={{radius:"sm" , blur:2}} loaderProps={{color:"blue", type:"bars"}}/>
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
            <FileInput leftSection={<IconPaperclip stroke={1.5} />} label="Resume" withAsterisk placeholder="Upload your resume" accept=".pdf,.doc,.docx" />
            <Textarea label="Cover Letter" withAsterisk placeholder="Write your cover letter here..." autosize minRows={4} maxRows={8} />
            <Button className="!text-blue-700 !bg-blue-200 hover:!border-blue-600" variant="light" onClick={handleSubmit}>Submit Application</Button>
        </div>
    </div>
        <Notification className={`!border-blue-600 -translate-y-20 !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`} icon={<IconCheck />} color="teal" title="Application Submitted" mt="md" withCloseButton={false}>Redireting to find jobs in {sec} seconds...</Notification>
    </>
}

export default ApplyJobComp;