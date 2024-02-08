import React from 'react'
import SearchIcon from "../../assets/images/serach-icon.svg";
import Image from 'next/image';
import DuaCardItem from '../sub/DuaCardItem';

function MiddleContent() {
  return (
    <div className="w-[1015px]">
      <div className="flex items-center relative"></div>
      {/* Search bar top  */}
      <form>
        <label className="relative block lg:w-[350px] ml-auto mb-5">
          <input
            placeholder="Search by Dua Name"
            className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-4 shadow-sm focus:outline-none focus:border-[#1FA45B] focus:ring-[#1FA45B] focus:ring-[0.1px] sm:text-sm dark:placeholder:text-[#96a2b4]"
            type="text"
          />
          <button className="absolute inset-y-0 right-3 flex items-center justify-center bg-[#F3F4F6] w-14 my-[5px]">
            <Image src={SearchIcon} width={22} height={22} alt="" />
          </button>
        </label>
      </form>
      {/* Dua start  */}
      <div className="h-[92.5vh] overflow-y-auto">
        <div className="flex mb-5 flex-row bg-white rounded-[10px] px-5 py-4 justify-start items-center">
          <p className="leading-[25px]font-[400]">
            <span className="text-[#1FA45B] font-medium">Section: </span>{" "}
            Excellence of dua in the morning & evening
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <DuaCardItem />
            <DuaCardItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleContent