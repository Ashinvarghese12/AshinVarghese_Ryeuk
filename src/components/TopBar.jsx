import { useState } from 'react';

export default function Topbar({ activeChat }) {
    const [activeTab, setActiveTab] = useState('chat');

    return (
        <div className="flex flex-col bg-[#0D0E11] h-[162px]">
            <div className="flex justify-between items-center px-[24px] py-[34.5px] h-[109px] border-b-[1px] border-[#2F333B]">
                <div>
                    <div className="flex gap-[16px]">
                        <div className="h-[40px] w-[40px] bg-[#191C21] rounded-[10px] flex items-center justify-center">
                            <img
                                src="./images/edit.svg"
                                alt="Logo"
                                className="w-[20px] h-[20px] "
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[24px] font-[500] text-[#F5F7FA]">{activeChat}</p>
                            <p className="text-[14px] text-[#A9B0BD] font-[500]">Exciting Strategies For The Launch Of A Groundbreaking Product</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[24px] items-center">
                    <div>
                        <img
                            src="./images/Users.svg"
                            alt="users"
                            className="w-[144px] h-[32px] "
                        />
                    </div>
                    <div className="flex gap-[10px]">
                        <img
                            src="./images/icon.svg"
                            alt="share"
                            className="w-[20px] h-[20px] cursor-pointer"
                        />
                        <p className="text-[14px] text-[#9098A6] font-[600]">Share</p>
                    </div>
                </div>
            </div>
            <div className="flex ps-[24px] pt-[16px]  h-[53px] border-b-[1px] border-[#2F333B]">
                <div className="flex gap-4">
                    {/* Chat Tab */}
                    <div
                        onClick={() => setActiveTab('chat')}
                        className={`flex gap-[12px] items-start h-[32px] w-[131px] px-[32px] relative cursor-pointer group 
          ${activeTab === 'chat' ? 'border-b-4 border-[#7885FF]' : ''}`}
                    >
                        <div className="relative">
                            <img
                                src="./images/message.svg"
                                alt="chat"
                                className={`w-[20px] h-[20px] ${activeTab === 'chat' ? 'drop-shadow-[0_0_8px_#7885FF]' : ''
                                    }`}
                            />
                        </div>
                        <button
                            className={`text-[14px] font-[500] ${activeTab === 'chat' ? 'text-white' : 'text-[#A9B0BD]'
                                }`}
                        >
                            Chat
                        </button>
                    </div>

                    {/* Library Tab */}
                    <div
                        onClick={() => setActiveTab('library')}
                        className={`flex gap-[12px] items-start h-[32px] w-[131px] px-[32px] relative cursor-pointer group 
          ${activeTab === 'library' ? 'border-b-4 border-[#7885FF]' : ''}`}
                    >
                        <img
                            src="./images/folder.svg"
                            alt="library"
                            className={`w-[20px] h-[20px] ${activeTab === 'library' ? 'drop-shadow-[0_0_8px_#7885FF]' : ''
                                }`}
                        />
                        <button
                            className={`text-[14px] font-[500] ${activeTab === 'library' ? 'text-white' : 'text-[#A9B0BD]'
                                }`}
                        >
                            Library
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
