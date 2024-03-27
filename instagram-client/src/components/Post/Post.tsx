import CommentIcon from "@/Icon/commentIcon";
import HeartIcon from "@/Icon/heartIcon";
import MessageIcon from "@/Icon/messageIcon";
import SaveIcon from "@/Icon/saveIcon";
import SmileIcon from "@/Icon/smile";
import ThreeDotIcon from "@/Icon/threeDotIcon";
import convertLocateNumber from "@/util/convertLocateNumber";
import Image from "next/image";
import Link from "next/link";
import ReactInPost from "../ReactInPost/ReactInPost";

type Props = {
  className?: string;
};
export default function Post({ className }: Props) {
  return (
    <div className={className}>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/login/ggplay.png"
            alt="avatar"
            width={32}
            height={32}
            className="object-contain border rounded-full w-10 h-10 mr-2"
          />
          <p className="text-xs font-semibold">1longg</p>
          <div className="w-1 h-1 border rounded-full bg-slate-500 mx-2"></div>
          <div className="text-xs text-slate-500">15h</div>
        </div>
        <ThreeDotIcon className="w-6 h-6 cursor-pointer" />
      </div>
      <Image
        src="/logo.jpg"
        alt="post-image"
        width={428}
        height={500}
        className="w-full object-cover rounded-xl mb-4 h-[525px]"
      />

      <ReactInPost className="flex items-center justify-between mb-4" />

      <div className="mb-4 cursor-pointer">
        <p className="text-sm font-semibold">
          {convertLocateNumber(10000000)} likes
        </p>
      </div>
      <div className="mb-4 flex">
        <Link href="/profile/1longg" className="text-sm mr-2 font-semibold">
          1longg
        </Link>
        <p className="text-sm">123123123123123</p>
      </div>
      <div className="mb-4 text-slate-400 text-sm">View all 874 comments</div>
      <div className="mb-4 flex">
        <input
          placeholder="Write your comment"
          className="outline-none w-full border-b border-slate-400 py-2 text-sm"
        />
        <SmileIcon className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}
