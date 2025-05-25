import { useState } from 'react';
import { ActionIcon, Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance', 'Most Recent, Salary(low to high)', 'Salary(high to low)'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (


    <Combobox
      store={combobox}
      width={200}
      position="bottom-start"
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>

        <div onClick={() => combobox.toggleDropdown()} className='cursor-pointer border border-blue-500 flex items-center px-2 py-1 rounded-lg gap-2 text-sm'>
          {selectedItem}<ActionIcon color='blue' variant='transparent' aria-label='Settings'>
            <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default Sort;