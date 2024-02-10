import React from 'react'
import Image from 'next/image'
import DuaCardIcon from '../../assets/images/duacard.svg';
import PlayIcon from '../../assets/images/audiobtn.svg';
import CopyIcon from '../../assets/images/copy.svg';
import BookMarkIcon from '../../assets/images/bookmark.svg';
import MemorizeIcon from '../../assets/images/memorize.svg';
import ShareIcon from '../../assets/images/share.svg';
import ReportIcon from '../../assets/images/report.svg';


function DuaCardItem({ duaItem, index }) {
  const {
    top_en,
    dua_name_en,
    audio,
    translation_en,
    transliteration_en,
    refference_en,
    dua_indopak,
    dua_arabic,
    bottom_en,
  } = duaItem;
  return (
    <div className="bg-white p-6 rounded-[10px]">
      <div className="flex items-center gap-3">
        <Image src={DuaCardIcon} width={35} height={35} alt="" />
        {dua_name_en ? (
          <p className="text-[#1FA45B] font-medium">
            {index}. {dua_name_en}
          </p>
        ) : (
          ""
        )}
      </div>
      <div>
        {top_en ? (
          <p className="mt-5 text-lg text-justify text-gray-900 leading-8 font-medium">
            {top_en}
          </p>
        ) : (
          ""
        )}
        {dua_indopak ? (
          <p className="my-8 text-right leading-loose text-3xl">
            {dua_indopak}
          </p>
        ) : (
          <p className="my-8 text-right leading-loose text-3xl">{dua_arabic}</p>
        )}
        {transliteration_en ? (
          <p className="my-5 text-lg text-justify text-gray-900 leading-8 italic font-medium">
            <span className="text-black">Transliteration: </span>
            {transliteration_en}
          </p>
        ) : (
          ""
        )}
        {translation_en ? (
          <p className="my-5 text-lg text-justify leading-8 text-gray-700 font-medium">
            <span className="text-gray-800">Translation: </span>
            {translation_en}
          </p>
        ) : (
          ""
        )}
        {bottom_en ? (
          <p className="my-5 text-lg text-justify leading-8 text-gray-900 font-medium">
            {bottom_en}
          </p>
        ) : (
          ""
        )}
        <p className="text-[#1FA45B] font-medium text-xl">Reference:</p>
        {refference_en ? (
          <p className="font-medium text-xl mt-1 text-gray-700">
            {refference_en}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-between mt-12">
        <div className="flex relative">
          <audio className="" src={audio} controls autoPlay>
            <Image
              // className="absolute z-10 top-1 left-1"
              src={PlayIcon}
              width={45}
              height={45}
              alt=""
            />
          </audio>
        </div>
        <div className="flex items-center gap-8">
          <Image src={CopyIcon} width={28} height={28} alt="" />
          <Image src={BookMarkIcon} width={20} height={24} alt="" />
          <Image src={MemorizeIcon} width={22} height={22} alt="" />
          <Image src={ShareIcon} width={22} height={22} alt="" />
          <Image src={ReportIcon} width={22} height={22} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DuaCardItem