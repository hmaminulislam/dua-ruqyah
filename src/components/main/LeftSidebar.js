import React from 'react'
import Image from "next/image";
import CategoryItem from '../sub/CategoryItem';
import DuyaIcon from "../../assets/images/dua-logo.svg";
import HomeIcon from "../../assets/images/home-icon.svg";
import AllDuaIcon from "../../assets/images/alldua.svg";
import BookMarkIcon from "../../assets/images/bookmark.svg";
import BooksIcon from "../../assets/images/books.svg";
import DuaInfoIcon from "../../assets/images/dua-info.svg";
import MemorizeIcon from "../../assets/images/memorize.svg";
import RuqyahIcon from "../../assets/images/ruqyah.svg";
import SupportIcon from "../../assets/images/support.png";
import SearchIcon from "../../assets/images/serach-icon.svg";

function LeftSidebar() {
  return (
    <div className="w-[480px] flex gap-6">
      {/* menu bar  */}
      <div className="w-[100px] bg-white flex flex-col gap-16 items-center py-8 rounded-[24px] h-[92.5vh] overflow-y-auto no-scrollbar">
        <div className="">
          <Image src={DuyaIcon} width={50} height={50} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
            <Image src={HomeIcon} width={20} height={20} alt="" />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
            <Image src={AllDuaIcon} width={20} height={20} alt="" />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
            <Image src={MemorizeIcon} width={20} height={20} alt="" />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
            <Image src={BookMarkIcon} width={20} height={20} alt="" />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
            <Image src={RuqyahIcon} width={20} height={20} alt="" />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
            <Image src={DuaInfoIcon} width={20} height={20} alt="" />
          </div>
          <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
            <Image src={BooksIcon} width={20} height={20} alt="" />
          </div>
        </div>
        <div className="pt-16">
          <Image src={SupportIcon} width={50} height={50} alt="" />
        </div>
      </div>
      {/* categories */}
      <div className="w-[350px]">
        <h2 className="text-2xl mb-9">Duas Page</h2>
        <div className="bg-[#1FA45B] h-14 px-5 flex items-center justify-center rounded-t-[10px]">
          <p className="text-base font-[500] text-white mx-auto">Categories</p>
        </div>

        <div className="pt-4 px-4 bg-white rounded-b-[10px]">
          <form>
            <label className="relative block w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Image
                  className="stroke-mute-grey"
                  src={SearchIcon}
                  width={22}
                  height={22}
                  alt=""
                />
              </span>
              <input
                placeholder="Search Categories"
                className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-[#1FA45B] focus:ring-[#1FA45B] focus:ring-1 sm:text-sm dark:placeholder:text-[#96a2b4]"
                type="text"
              />
            </label>
          </form>
          <div className="flex flex-col gap-2">
            <CategoryItem />
            <CategoryItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar