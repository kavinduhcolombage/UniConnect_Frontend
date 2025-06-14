import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import { useState } from "react";
import fields from "../Data/Profile";
import { MonthPickerInput } from '@mantine/dates';

const CertiInput = (props: any) => {
    const select = fields;
    const [issuerDate, setIssuerDate] = useState<Date | null>(new Date());

    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput label="Title" placeholder="Enter Title" withAsterisk />
            <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk maxDate={new Date()} label="Issuer Date" placeholder="Pick date" value={issuerDate} onChange={setIssuerDate} />
            <TextInput label="Certificate ID" placeholder="Enter ID" withAsterisk />
        </div>
        <div className="flex gap-5 justify-end">
            <Button onClick={() => props.setEdit(false)} color="blue" variant="outline">Save</Button>
            <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
        </div>

    </div>

}

export default CertiInput;