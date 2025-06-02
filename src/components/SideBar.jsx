import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar({ chats, activeChat, setActiveChat }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="flex flex-col w-[312px] h-full bg-[#0D0E11]">
            <div className='flex justify-between px-[24px] py-[30.5px] h-[109px] border-b-[1px] border-e-[1px] border-[#2F333B] bg-[#0D0E11] sticky top-0 z-10'>
                <img src="./images/Avatar.svg" alt="Profile" className="w-[48px] h-[48px] rounded-full" />
                <div className="flex flex-col items-start ps-[16px]">
                    <div className="text-[16px] font-[600]">Mustafa Wahab</div>
                    <div className="text-[14px] font-[400] text-[#BCC8FF]">Admin</div>
                </div>
                <button className='cursor-pointer ps-[52px]'>
                    <img src="./images/chevron-down.svg" className="w-[16px] h-[16px]" />
                </button>
            </div>

            <div className=' overflow-y-auto'> 
                {/* general */}
                <div className="p-[24px] h-[194px] border-b-[1px] border-e-[1px] border-[#2F333B]">
                    <h2 className="text-[12px] font-[600] text-[#767F90] uppercase">General</h2>
                    <div className="flex flex-col gap-[8px] mt-[24px]">
                        <div className='flex items-center gap-[16px] h-[48px] w-[264px] px-[16px] py-[13.5px]'>
                            <img src='./images/search.svg' alt='search' />
                            <input
                                type="text"
                                placeholder="Search"
                                className="text-[14px] font-[500] w-[210px] bg-transparent text-white focus:outline-none"
                            />
                        </div>
                        <div
                            onClick={handleClick}
                            className={`flex items-center gap-[16px] h-[48px] w-[264px] px-[16px] py-[13.5px] cursor-pointer
                            ${active ?
                                    'bg-gradient-to-r from-[#101223] to-transparent shadow-[inset_0_0_0_2px_rgba(26,29,33,0.64),0_1px_3px_0_rgba(6,7,8,0.05),0_1px_2px_-1px_rgba(6,7,8,0.05)] border-l-[4px] border-[#7885FF] rounded-lg '
                                    : ''
                                }`}
                        >
                            <img src='./images/billing.svg' alt='billing' />
                            <p className={`text-[14px] font-[500] text-white ${active ? 'font-semibold' : ''}`}>
                                Billing
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chats */}
                <div className="p-[24px] h-[252px] border-b border-e border-[#2F333B]">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-[12px] font-[600] text-[#767F90] ">Chats</h2>
                        <img src="./images/add.svg" alt="Add Chat" className="w-[20px] h-[20px] cursor-pointer" onClick={() => alert('Add new chat')} />
                    </div>

                    <div className="flex flex-col gap-[8px] mt-[24px]">
                        {chats.map((chat) => (
                            <button
                                key={chat}
                                onClick={() => setActiveChat(chat)}
                                className={`w-full h-[48px] text-left text-[14px] font-[500] px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer
                                ${activeChat === chat
                                        ? `text-white font-semibold 
                                        border-l-[4px] border-[#7885FF]
                                        bg-gradient-to-r from-[#101223] to-transparent
                                        shadow-[inset_0_0_0_2px_rgba(26,29,33,0.64),0_1px_3px_0_rgba(6,7,8,0.05),0_1px_2px_-1px_rgba(6,7,8,0.05)]`
                                        : 'text-white'}`}
                            >
                                {chat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="p-[24px] h-[270px]  border-e border-[#2F333B]">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-[12px] font-[600] text-[#767F90] uppercase">Projects</h2>
                        <img src="./images/add.svg" alt="Add Project" className="w-[20px] h-[20px] cursor-pointer" onClick={() => alert('Add new project')} />
                    </div>
                    <div className="space-y-2">
                        <nav className="flex flex-col space-y-2">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium
                                ${isActive
                                        ? `text-white border-l-[4px] border-[#7885FF] 
                                    bg-gradient-to-r from-[#101223] to-transparent
                                    shadow-[inset_0_0_0_2px_rgba(26,29,33,0.64),0_1px_3px_0_rgba(6,7,8,0.05),0_1px_2px_-1px_rgba(6,7,8,0.05)]`
                                        : 'text-white hover:text-gray-300'
                                    }`
                                }
                            >
                                Project Alpha
                            </NavLink>
                            <NavLink
                                to="/projectbeta"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg transition-all duration-200 font-medium
                                ${isActive
                                        ? `text-white border-l-[4px] border-[#7885FF] 
                                    bg-gradient-to-r from-[#101223] to-transparent
                                    shadow-[inset_0_0_0_2px_rgba(26,29,33,0.64),0_1px_3px_0_rgba(6,7,8,0.05),0_1px_2px_-1px_rgba(6,7,8,0.05)]`
                                        : 'text-white hover:text-gray-300'
                                    }`
                                }
                            >
                                Project Beta
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>

            {/* toggle theme */}
            <div className="p-[24px] h-[80px] border-b border-e border-t border-[#2F333B] flex items-center justify-between bg-[#0D0E11] sticky bottom-0 z-10">
                <img src="./images/Mode Toggle.svg" alt="theme" className="w-[93px] h-[48px] cursor-pointer" />
                <div className='flex gap-[4px] items-center cursor-pointer'>
                    <img src="./images/double.svg" alt="Dark Mode" className="w-[16px] h-[16px] cursor-pointer" />
                    <p className="text-[12px] font-[400] text-[#767F90]">Close</p>
                </div>
            </div>
        </div>
    );
}
