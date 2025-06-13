import { Button, Checkbox, Textarea } from "@mantine/core";
import SelectInput from "./SelectInput";
import { useState } from "react";
import fields from "../Data/Profile";
import { MonthPickerInput } from '@mantine/dates';

const ExpInput = (props: any) => {
    const select = fields;
    const [startDate, setStartdate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [description, setDescription] = useState('This is user experience. You can edit this section to add more details about your work experience.');
    const [checked, setChecked] = useState(false);

    return <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">Edit Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
        </div>
        <SelectInput {...select[2]} />
        <Textarea withAsterisk label="Summary" size="md" value={description} placeholder="Tell about your Experiance..." autosize minRows={3} onChange={(event) => setDescription(event.currentTarget.value)} />
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput
                withAsterisk
                maxDate={endDate || undefined}
                label="Start date"
                placeholder="Pick date"
                value={startDate}
                onChange={setStartdate}
            />
            <MonthPickerInput
                disabled={checked}
                withAsterisk
                minDate={startDate || undefined}
                maxDate={new Date()}
                label="End date"
                placeholder="Pick date"
                value={endDate}
                onChange={setEndDate}
            />
        </div>
        <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} autoContrast label="Currently Working Here" />
        <div className="flex gap-5">
            <Button onClick={() => props.setEdit(false)} color="blue" variant="outline">Save</Button>
            <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
        </div>
    </div>

}

export default ExpInput;