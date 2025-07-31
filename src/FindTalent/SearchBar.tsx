import { useState } from "react";
import { searchFields } from "../Data/TalentData";
import { Divider, Input, RangeSlider } from "@mantine/core";
import MultiInput from "../FindJob/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Slices/FilterSlice";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([0, 50]);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (name: any, event: any) => {
        if (name == "exp") dispatch(updateFilter({ exp: event }));
        else {
            dispatch(updateFilter({ name: event.target.value }));
            setName(event.target.value);
        }
    }

    return <div className="flex px-8 py-5">

        <div className="flex items-center">
            <div className="text-blue-500 bg-gray-400 rounded-full p-1 mr-2"><IconUserCircle size={20} /></div>
            <Input defaultValue={name} onChange={(e) => handleChange("name", e)} className="[&_input]:!placeholder-gray-500" variant="unstyled" placeholder="Talent Name" />
        </div>

        {
            searchFields.map((item, index) =>
                <div key={index} className="w-1/5 mr-5">
                    <MultiInput title={item.title} icon={item.icon} options={item.options} />
                </div>)
        }

        <Divider mr="xs" orientation="vertical" />

        <div className="w-1/5">
            <div className="flex justify-between text-gray-500 text-sm">
                <div>Expereiance (Year)</div>
                <div>{value[0]} - {value[1]}</div>
            </div>
            <RangeSlider minRange={1} onChangeEnd={(e) => handleChange("exp", e)} size="xs" min={0} max={50} value={value} onChange={setValue} />
        </div>
    </div>
}

export default SearchBar;