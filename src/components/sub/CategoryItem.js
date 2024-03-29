import Image from "next/image";
import React, { useRef, useState } from "react";
import DuarIcon from "../../assets/images/duar_gurutto.svg";
import DuaArrowIcon from "../../assets/images/duaarrow.svg";

function CategoryItem({ catItem, data }) {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false)
  const [subCatId, setSubCatId] = useState()
  const subItem = useRef();
  const subCateItem = useRef();
  const { sub_category, dua } = data;
  const { cat_name_en } = catItem;
  const catItemId = catItem.id;
  const SubCategory = sub_category.filter(
    (item) => catItemId === item.cat_id
  );
  const filterDua = dua.filter((d) => subCatId === d.subcat_id);

console.log(filterDua)
  // category open close 
  if (open) {
    subItem.current.style.display = "block";
  } else {
    if (subItem.current) {
      subItem.current.style.display = "none";
    }
  }
  // sub category open close 
  // if (openSub) {
  //   subCateItem.current.style.display = "block";
  // } else {
  //   if (subCateItem.current) {
  //     subCateItem.current.style.display = "none";
  //   }
  // }
  // handle category open close
  const handleCategory = () => {
    setOpen(!open);
  };
  // handle sub category open close
  const handleSubCategory = (item, e) => {
    setSubCatId(item.subcat_id);
    // setOpenSub(!openSub);
    subCateItem.current.style.display ='block'
    console.log(subCateItem.current);
  };
  // console.log(openSub)
  return (
    <div className="mt-4">
      <div
        onClick={handleCategory}
        className="flex gap-3 h-18 px-3 items-center rounded-xl"
      >
        <div className="h-14 w-14 flex items-center justify-center">
          <Image src={DuarIcon} width={30} height={30} alt="" />
        </div>
        <div className="flex items-center justify-between w-[90%]">
          <div>
            {cat_name_en ? (
              <p className="text-base font-[500] text-black">{cat_name_en}</p>
            ) : (
              ""
            )}
            <p className="text-gray-400 text-xs mt-1 xs:text-[11px]">
              Subcategory: {SubCategory?.length}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base xs:text-sm">{filterDua?.length}</p>
            <p className="text-gray-400 text-xs xs:text-[11px]">Duas</p>
          </div>
        </div>
      </div>
      <div ref={subItem} className="pl-10 pr-5 mt-4 hidden">
        <div className="flex flex-col gap-5 border-l-[2px] border-dotted border-[#1FA45B]">
          {SubCategory?.map((item) => (
            <>
              <div>
                <div
                  onClick={(e) => handleSubCategory(item, e)}
                  className="flex gap-4 items-start mb-[5px]"
                >
                  <div className="w-[8px] h-[8px] bg-primary rounded-[50%] ml-[-4px] mt-[7px]"></div>
                  <p className="cursor-pointer font-semibold text-left text-sm">
                    {item.subcat_name_en}
                  </p>
                </div>
                <div ref={subCateItem} className="" style={{ display: 'none'}}>
                  {filterDua.map((dua, index) => (
                    <div key={index}>
                      <div className="flex items-start w-[95%] ml-auto gap-2">
                        <Image
                          className="mt-[9px]"
                          src={DuaArrowIcon}
                          width={18}
                          height={18}
                          alt=""
                        />
                        <p className="my-3 text-[14px] text-left">
                          {dua?.dua_name_en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
