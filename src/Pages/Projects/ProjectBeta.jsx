export default function ProjectBeta() {
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
                Enter your database link below to connect and hit enter..
              </p>
              <div className=" mb-[24px]">
                <div className="flex flex-col gap-[12px] ">
                  <label className="text-[14px] font-[500] text-gray-400">Enter your link</label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-[542px] h-[48px] mt-1 px-3 py-2 bg-transparent border border-[#2F333B] focus:outline-none rounded-md text-[#5E6573] text-[14px] font-[500]"
                  />
                  <div className="flex items-center gap-[12px]">
                    <img src="./images/info-circle-solid.svg" alt="info" className="w-[16px] h-[16px]" />
                    <p className="text-[#9098A6] text-[14px] font-[400]">to enter multiple links use <span className="text-[#7885FF]"> “/connect multi-link”</span> command</p>
                  </div>
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
