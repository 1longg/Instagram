import Image from "next/image";
import UserCompact from "../UserCompact/UserCompact";
import ReactInPost from "../ReactInPost/ReactInPost";
import convertLocateNumber from "@/util/convertLocateNumber";
import CloseIcon from "@/Icon/closeIcon";
import Comment from "../Comment/Comment";
import PlusIcon from "@/Icon/plusIcon";

type Props = {
  className?: string;
  params: string;
};

export default function DetailPost({ className, params }: Props) {
  return (
    <div className="relative w-screen h-screen py-8 bg-black bg-opacity-55 flex justify-center items-center z-30">
      <div className="bg-white w-3/4 h-full flex">
        <div className="w-1/2 h-full">
          <Image
            src="/logo.jpg"
            alt="photo"
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className=" p-4 w-full border-b border-slate-200 bg-white">
            <UserCompact className="flex items-center justify-between" />
          </div>

          <div className="overflow-y-scroll w-full h-full p-4">
            <Comment className="flex" />
            <Comment className="flex" />
            <Comment className="flex" />
            <Comment className="flex" />
            <Comment className="flex" />
            <Comment className="flex" />
            <Comment className="flex" />
            <Comment className="flex" />
            <Comment className="flex" />
            <PlusIcon className="w-8 h-8 cursor-pointer mx-auto" />
          </div>

          <div className=" w-full">
            <div className="p-4 border-y border-slate-200">
              <ReactInPost className="flex items-center justify-between mb-2" />
              <p className="text-sm font-semibold mb-2">
                {convertLocateNumber(10000000)} likes
              </p>
              <p className="text-slate-400 text-xs">1 day ago</p>
            </div>
            <div className="flex justify-between px-2">
              <input
                placeholder="Add comment..."
                className="px-2 py-4 text-sm outline-none w-full"
              />
              <button className="text-sm text-blue-400 mr-2">Post</button>
            </div>
          </div>
        </div>
      </div>
      <CloseIcon className="w-8 h-8 absolute top-2 right-2 cursor-pointer text-white" />
    </div>
  );
}
