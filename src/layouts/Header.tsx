
import { Settings , Bell , UserCircle} from 'tabler-icons-react';

const Header = () => {
    return <div className="w-full bg-gray-800 px-6 h-25 text-white p-4 flex justify-between items-center">
        
        <div className='flex items-center gap-2'>
            <div className='text-1xl font-semibold'>logo</div>
        </div>

        <div className='flex gap-4 items-center font-'>
            <a href="">Find Job</a>
            <a href="">About US</a>
            <a href="">Hiring</a>
            <a href="">Community</a>
            <a href="">FAQ</a>
        </div>

        <div className='flex gap-7 items-center justify-around'>
            <Bell />
            <div className='flex items-center gap-2'>
                <div>Name</div>
                <UserCircle />
            </div>
            
            <Settings />
        </div>

    </div>
}

export default Header;