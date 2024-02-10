import { Inter } from "next/font/google";
import LeftSidebar from "@/components/main/LeftSidebar";
import MiddleContent from "@/components/main/MiddleContent";
import RightSidebar from "@/components/main/RightSidebar";

const inter = Inter({ subsets: ["latin"] });
export default function Home({data}) {
  return (
      <main className={inter.className} >
      <div className="max-w-[1880px] mx-auto pt-[40px] px-7">
      <div className="flex justify-between lg:gap-6">
        <LeftSidebar data={data} />
        <MiddleContent data={data} />
        <RightSidebar/>
      </div>
      </div>
    </main>
  );
}


export const getStaticProps = async() => {
  const res = await fetch(`http://localhost:3000/api/dua`);
  const data = await res.json()
  return {
    props: {
      data: data.duas[0]
    }
  }
}