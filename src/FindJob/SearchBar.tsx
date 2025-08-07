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
        dispatch(updateFilter({ salary: event }));
    }

    return <div className="flex px-8 py-5 flex-wrap max-[1000px]:gap-y-4 justify-start">
        {
            dropdownData.map((item, index) => <div key={index} className="w-1/5 max-[1000px]:w-1/4 max-[900px]:w-1/3 max-[700px]:w-1/2">
                <MultiInput {...item} />
            </div>)
        }

        <div className="w-1/5 max-[1000px]:w-1/4 max-[900px]:w-1/3 max-[700px]:w-1/2 max-[500px]:!w-full">
            <div className="flex justify-between text-gray-500 text-sm mb-1">
                <div>Salary</div>
                <div>Rs.{value[0]} - Rs.{value[1]}</div>
            </div>
            <RangeSlider min={0} max={1000000} onChangeEnd={handleChange} size="xs" value={value} step={1000} onChange={setValue} />
        </div>
    </div>
}

export default SearchBar;