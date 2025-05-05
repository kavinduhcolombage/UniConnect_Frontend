import { RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([10000,200000]);
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
                <RangeSlider size="xs" value={value} onChange={setValue}/>
            </div>
    </div>
}

export default SearchBar;