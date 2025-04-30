
import { Avatar, Indicator } from '@mantine/core';
import { Settings , Bell } from 'tabler-icons-react';
import avatarImage from '../assets/avatar.png';
import NavLinks from './NavLinks';

const Header = () => {
    return <div className="w-full bg-gray-900 px-6 h-25 text-white p-4 flex justify-between items-center">
        
        <div className='flex items-center gap-2'>
            <div className='text-2xl font-semibold text-blue-500'>Uni Connect</div>
        </div>

        {NavLinks()}

        <div className='flex gap-5 items-center justify-around'>           
            <div className='flex items-center gap-2'>
                <div>Kavindu Hansana</div>
                <Indicator inline size={11} offset={4} position="bottom-end" color="green" withBorder>
                    <Avatar
                        size={35}
                        src={avatarImage}
                        alt="profile photo"
                    />
                </Indicator>
            </div>
            <div className='bg-gray-900 p-1.5 rounded-full'>
                <Settings size={25}/>
            </div>
            <div className='bg-gray-900 p-1.5 rounded-full flex items-center justify-center'>
                <Indicator inline processing color="blue">
                    <Bell
                        size={25}
                        strokeWidth={1.8}
                    />
                </Indicator>

            </div>
            
        </div>

    </div>
}

export default Header;