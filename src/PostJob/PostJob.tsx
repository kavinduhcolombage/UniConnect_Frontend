import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";

const PostJob=()=>{
    const select=fields;
    return <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5 mt-5">Post a job</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]}/>
                <SelectInput {...select[1]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[2]}/>
                <SelectInput {...select[3]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[4]}/>
                <SelectInput {...select[5]}/>
            </div>
            <TagsInput withAsterisk label="Skills" placeholder="Enter skill" clearable splitChars={[',', ' ', '|']} acceptValueOnBlur/>
            <div>
                <div>JOb Description</div>
                <textarea
        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter job description here..."
    />
            </div>
            <div className="flex gap-5">
            <Button className="!text-blue-700 !bg-blue-200 hover:!border-blue-600" variant="light">Publish job </Button>
            <Button className="!text-blue-700" variant="outline">Save as draft</Button>
            </div>
        </div>
    </div>
}

export default PostJob;