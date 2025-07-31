import { RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Slices/FilterSlice";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([0, 1000000]);
    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        console.log("trigger");
        console.log(event);
        dispatch(updateFilter({ salary: event }));
    }

    return <div className="flex px-8 py-5">

        {
            dropdownData.map((item, index) => <div key={index} className="w-1/5 mr-5">
                <MultiInput {...item} />
            </div>)
        }

        <div className="w-1/5">
            <div className="flex justify-between text-gray-500 text-sm">
                <div>Salary</div>
                <div>Rs.{value[0]} - Rs.{value[1]}</div>
            </div>
            <RangeSlider min={0} max={1000000} onChangeEnd={handleChange} size="xs" value={value} step={1000} onChange={setValue} />
        </div>
    </div>
}

export default SearchBar;