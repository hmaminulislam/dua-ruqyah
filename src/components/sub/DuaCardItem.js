import React from 'react'
import Image from 'next/image'
import DuaCardIcon from '../../assets/images/duacard.svg';
import PlayIcon from '../../assets/images/audiobtn.svg';
import CopyIcon from '../../assets/images/copy.svg';
import BookMarkIcon from '../../assets/images/bookmark.svg';
import MemorizeIcon from '../../assets/images/memorize.svg';
import ShareIcon from '../../assets/images/share.svg';
import ReportIcon from '../../assets/images/report.svg';


function DuaCardItem() {
  return (
    <div className='bg-white p-6 rounded-[10px]'>
        <div className='flex items-center gap-3'>
            <Image src={DuaCardIcon} width={35} height={35} alt="" />
            <p className="text-[#1FA45B] font-medium">3. The reward of freeing of a slave</p>
        </div>
        <div>
            <p className='mt-5 text-lg text-justify text-gray-900 leading-8 font-medium'>Say the following statement 10 times -</p>
            <p className='my-8 text-right leading-loose text-3xl'>لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
            <p className="my-5 text-lg text-justify text-gray-900 leading-8 italic font-medium"><span className='text-black'>Transliteration: </span>Laa ilahaa illAllahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir</p>
            <p className="my-5 text-lg text-justify leading-8 text-gray-700 font-medium"><span className='text-gray-800'>Translation:</span> None has the right to be worshipped but Allah alone, Who has no partner. His is the dominion and His is the praise, and He is Able to do all things.</p>
            <p className="my-5 text-lg text-justify leading-8 text-gray-900 font-medium">The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.</p>
            <p className="text-[#1FA45B] font-medium text-xl">Reference:</p>
            <p className="font-medium text-xl mt-1 text-gray-700">Bukhari: 6404</p>
        </div>
        <div className='flex items-center justify-between mt-12'>
            <div>
            <Image src={PlayIcon} width={45} height={45} alt="" />
            </div>
            <div className='flex items-center gap-8'>
            <Image src={CopyIcon} width={28} height={28} alt="" />
            <Image src={BookMarkIcon} width={20} height={24} alt="" />
            <Image src={MemorizeIcon} width={22} height={22} alt="" />
            <Image src={ShareIcon} width={22} height={22} alt="" />
            <Image src={ReportIcon} width={22} height={22} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DuaCardItem