import { TextInput, NumberInput, FileInput, Textarea, Button, LoadingOverlay } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";

const ApplicationForm = () => {
    const [submit, setSubmit] = useState(false);

    const form = useForm({
        mode: 'controlled',
        validateInputOnBlur: true,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            website: '',
            resume: null,
            coverLetter: ''
        },
        validate: {
            name: isNotEmpty("Name is required"),
            email: isNotEmpty("Email is required"),
            phone: isNotEmpty("Phone number is required"),
            website: isNotEmpty("Personal website is required"),
            resume: isNotEmpty("Resume is required")
        }
    })

    const handleSubmit = () => {
        form.validate();
        if(!form.isValid()) return;
    };

    return <div>
        <LoadingOverlay className="!fixed" visible={submit} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: "blue", type: "bars" }} />
        <div className="text-xl font-semibold mb-5">Submit Your Application</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("name")} label="Full Name" withAsterisk placeholder="Enter Name" />
                <TextInput {...form.getInputProps("email")} label="Email" withAsterisk placeholder="Enter email" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput {...form.getInputProps("phone")} hideControls label="Contact Number" withAsterisk placeholder="Enter Phone Number" />
                <TextInput {...form.getInputProps("website")} label="Personal Website" withAsterisk placeholder="Enter URL" />
            </div>
            <FileInput {...form.getInputProps("resume")} leftSection={<IconPaperclip stroke={1.5} />} label="Resume" withAsterisk placeholder="Upload your resume" accept=".pdf,.doc,.docx" />
            <Textarea {...form.getInputProps("coverLetter")} label="Cover Letter" placeholder="Write your cover letter here..." autosize minRows={4} maxRows={8} />
            <Button className="!text-blue-700 !bg-blue-200 hover:!border-blue-600" variant="light" onClick={handleSubmit}>Submit Application</Button>
        </div>
    </div>
}

export default ApplicationForm;