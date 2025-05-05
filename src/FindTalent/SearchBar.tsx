import { useState } from "react";
import { searchFields } from "../Data/TalentData";
import { Input, RangeSlider } from "@mantine/core";
import MultiInput from "../FindJob/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([10000, 200000]);
    return <div className="flex px-8 py-5">

        <div className="flex items-center">
            <div className="text-blue-500 bg-gray-400 rounded-full p-1 mr-2"><IconUserCircle size={20}/></div>
            <Input className="[&_input]:!placeholder-gray-500" variant="unstyled" placeholder="Talent Name" />
        </div>

        {
            searchFields.map((item, index) =>
                <div key={index} className="w-1/5 mr-5">
                    <MultiInput title={item.title} icon={item.icon} options={item.options} />
                </div>)
        }

        <div className="w-1/5">
            <div className="flex justify-between text-gray-500 text-sm">
                <div>Salary</div>
                <div>Rs.{value[0]} - Rs.{value[1]}</div>
            </div>
            <RangeSlider size="xs" value={value} onChange={setValue} />
        </div>
    </div>
}

export default SearchBar;