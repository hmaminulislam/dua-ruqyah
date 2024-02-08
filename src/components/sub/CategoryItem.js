import Image from 'next/image';
import React from 'react';
import DuarIcon from '../../assets/images/duar_gurutto.svg'

function CategoryItem() {
  return (
    <div className="mt-4">
      <div className="flex justify-between gap-3 h-18 px-3 items-center rounded-xl">
        <div className='h-14 w-14 flex items-center justify-center'>
          <Image src={DuarIcon} width={30} height={30} alt="" />
        </div>
        <div>
          <p className="text-base font-[500] text-black">Dua's Importance</p>
          <p className="text-gray-400 text-xs mt-1 xs:text-[11px]">
            Subcategory: {"7"}
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <p className="text-base xs:text-sm">15</p>
          <p className="text-gray-400 text-xs xs:text-[11px]">Duas</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem