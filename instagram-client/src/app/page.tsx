import CreatePost from "@/components/CreatePost/CreatePost";
import SideBar from "@/components/SideBar";
import SuggestFollow from "@/components/SuggestFollow";

export default function Home() {
  return (
    <div className="flex">
      <SideBar className="h-screen sticky left-0 top-0 z-40 border-r-2 w-60 px-4 py-8 bg-white" />
      <div className="h-[2000px] flex justify-between w-full">
        <CreatePost className="w-3/4" />
        <SuggestFollow className="w-1/4 " />
      </div>
    </div>
  );
}
