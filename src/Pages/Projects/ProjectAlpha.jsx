export default function ProjectAlpha() {
  return (
    <div className="flex flex-col justify-end h-full p-6">
      <div>
        <div className="flex-1 mb-4">
          <div className="border border-[#2F333B] rounded-xl w-full">
            <div className="flex items-center gap-2 mb-[24px] ps-[24px] pt-[24px]">
              <img src="./images/Frame 25.svg" />
              <span className="text-[14px] text-white font-[600]">Ryuk</span>
              <span className="text-[10px] font-[400] text-[#5E6573]">Just now</span>
            </div>
            <div className="ps-[80px]">
              <p className="text-[14px] font-[400] mb-[16px]">
                Enter your database details below to connect. All fields are required.
              </p>
              <div className="grid grid-cols-[0.1fr_0.1fr] gap-[16px] pb-[24px]">
                <div className="flex flex-col gap-[12px] ">
                  <label className="text-[14px] font-[500] text-gray-400">Host</label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-[256px] h-[48px] mt-1 px-3 py-2 bg-transparent focus:outline-none border border-[#2F333B] rounded-md text-[#5E6573] text-[14px] font-[500]"
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <label className="text-[14px] font-[500] text-gray-400">Port</label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-[256px] h-[48px] mt-1 px-3 py-2 bg-transparent focus:outline-none border border-[#2F333B] rounded-md text-[#5E6573] text-[14px] font-[500]"
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <label className="text-[14px] font-[500] text-gray-400">User</label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-[256px] h-[48px]  mt-1 px-3 py-2 bg-transparent focus:outline-none border border-[#2F333B] rounded-md text-[#5E6573] text-[14px] font-[500]"
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <label className="text-[14px] font-[500] text-gray-400">Password</label>
                  <input
                    type="password"
                    placeholder="Value"
                    className="w-[256px] h-[48px] mt-1 px-3 py-2 bg-transparent border focus:outline-none border-[#2F333B] rounded-md text-[#5E6573] text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[80px] bg-[#0D0E11] p-3 rounded-[16px]  flex items-center border border-[#2F333B]">
          <input
            type="text"
            placeholder="Enter Your Prompt / Command Here.."
            className="flex-grow bg-transparent text-[#464C56] placeholder-gray-500 text-[14px] font-[500]  px-3 focus:outline-none"
          />
          <div className="flex items-center gap-[22px] ml-2">
            <img
              src="./images/microphone.svg"
              alt="Add"
              className="w-[24px] h-[24px] cursor-pointer"
            />
            <img
              src="./images/attachment.svg"
              alt="Add"
              className="w-[24px] h-[24px] cursor-pointer"
            />
            <div className="px-[12px] pt-[12px] w-[48px] h-[48px] bg-[#7885FF] rounded-[8px]">
              <img
                src="./images/plane.svg"
                alt="Add"
                className="w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}