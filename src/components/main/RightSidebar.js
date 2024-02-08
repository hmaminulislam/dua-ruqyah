import Image from 'next/image';
import React from 'react'
import ProfileIcon from '../../assets/images/profile.svg'
import DropIcon from '../../assets/images/drop.svg'
import LanguageIcon from '../../assets/images/language.svg'
import GeneralIcon from '../../assets/images/general.svg'
import FontIcon from '../../assets/images/font.svg'

function RightSidebar() {
  return (
    <div className="xl:w-[300px]">
      <div className="flex items-center gap-2 ml-auto max-w-[80px] mb-5">
        <Image src={ProfileIcon} width={45} height={45} alt="" />
        <Image src={DropIcon} width={10} height={10} alt="" />
      </div>
      <div className="bg-white px-4 py-12 rounded-[22px] h-[85.5vh] overflow-y-auto no-scrollbar">
        <p className="text-center text-xl">Settings</p>
        <div className="mt-10 flex flex-col gap-4">
          {/* setting item  */}
          <div className="border rounded-lg">
            <div className="bg-[#F7F8FA] py-2 border-l-4 border-[#1FA45B] rounded-[4px]">
              <div className="flex items-center gap-3 px-2">
                <div className="w-10 h-10 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                  <Image src={LanguageIcon} width={20} height={20} alt="" />
                </div>
                <p className="text-[#1FA45B] font-medium text-base leading-5 xs:text-sm lg-min:text-sm">
                  Language Settings
                </p>
              </div>
            </div>
            <div className="py-6 rounded-b-lg px-4">
              <div className="flex items-center gap-3">
                <button className="bg-primary text-white rounded-md w-28 h-10 xs:w-full sm:w-full">
                  English
                </button>
                <button className="text-black border border-solid border-[#cccdcf] rounded-md w-29 h-10 xs:w-full sm:w-full">
                  বাংলা
                </button>
              </div>
            </div>
          </div>
          {/* setting item  */}
          <div className="bg-[#F7F8FA] py-2 rounded-[4px]">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                <Image src={GeneralIcon} width={20} height={20} alt="" />
              </div>
              <p className="text-gray-400 font-medium text-sm leading-5 xs:text-sm lg-min:text-sm">
                General Settings
              </p>
            </div>
          </div>
          {/* setting item  */}
          <div className="bg-[#F7F8FA] py-2 rounded-[4px]">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                <Image src={FontIcon} width={20} height={20} alt="" />
              </div>
              <p className="text-gray-400 font-medium text-sm leading-5 xs:text-sm lg-min:text-sm">
                Font Settings
              </p>
            </div>
          </div>
          {/* setting item  */}
          <div className="bg-[#F7F8FA] py-2 rounded-[4px]">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 bg-[#E8F0F5] rounded-full flex items-center justify-center">
                <Image src={FontIcon} width={20} height={20} alt="" />
              </div>
              <p className="text-gray-400 font-medium text-sm leading-5 xs:text-sm lg-min:text-sm">
                Appearance Settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar