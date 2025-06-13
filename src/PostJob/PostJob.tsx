import { Button, NumberInput, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../Services/JobService";

const PostJob = () => {
    const select = fields;
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            jobTitle: '',
            company: '',
            experience: '',
            jobType: '',
            location: '',
            pacakgeOffered: '',
            skillsRequired: [],
            about: 'test',
            description: 'test'
        },
        validate: {
            jobTitle: isNotEmpty('Title is required'),
            company: isNotEmpty('Company is required'),
            experience: isNotEmpty('Experience is required'),
            jobType: isNotEmpty('Job Type is required'),
            location: isNotEmpty('Location is required'),
            pacakgeOffered: isNotEmpty('Salary is required'),
            skillsRequired: isNotEmpty('Skills are required'),
            // about: isNotEmpty('About is required'),
            // description: isNotEmpty('Description is required')
        }

    })
    const handlePost = () => {
        console.log('VALUES:', form.values);
        console.log('ERRORS:', form.errors);
        console.log('handlePost called');
        console.log(form.isValid());
        form.validate();
        console.log(form.isValid());
        if (!form.isValid()) return;
        postJob(form.getValues()).then((res) => {
            console.log(res);
            console.log('Succes notification');
            //   successNotification("Success", "Job Posted Successfully");
            // navigate("/jobs");
        }).catch((err) => {
            console.log(err);
            console.log('error notification');
            //   errorNotification("Error", err.response.data.errorMessage);
        });
    }
    return <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5 mt-5">Post a job</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="experience" {...select[2]} />
                <SelectInput form={form} name="jobType" {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="location" {...select[4]} />
                <NumberInput {...form.getInputProps('pacakgeOffered')} label="Salary" withAsterisk min={1} max={300} placeholder="Enter Salary"
                    hideControls />
            </div>
            <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="skillsRequired" placeholder="Enter skill" clearable splitChars={[',', ' ', '|']} acceptValueOnBlur />
            <div>
                <div>JOb Description</div>
                <textarea
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter job description here..."
                />
            </div>
            <div className="flex gap-5">
                <Button className="!text-blue-700 !bg-blue-200 hover:!border-blue-600" onClick={handlePost} variant="light">Publish job </Button>
                <Button className="!text-blue-700" variant="outline">Save as draft</Button>
            </div>
        </div>
    </div>
}

export default PostJob;