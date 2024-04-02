import BarIcon from "@/Icon/barIcon";
import ClickIcon from "@/Icon/clickIcon";
import FilmIcon from "@/Icon/filmIcon";
import HeartIcon from "@/Icon/heartIcon";
import HomeIcon from "@/Icon/homeIcon";
import MessageIcon from "@/Icon/messageIcon";
import PlusIcon from "@/Icon/plusIcon";
import SearchIcon from "@/Icon/searchIcon";
import Image from "next/image";

import Link from "next/link";
import Popover from "../Popover/popover";
import PopoverMore from "./Popover/PopoverMore";

type Props = {
  className?: string;
};

export default function SideBar({ className }: Props) {
  return (
    <div className={className}>
      <Link href='/' className="mb-4 flex justify-center relative">
        <Image
          src="/login/instagram-text.png"
          width={110}
          height={30}
          alt="instagram-text-image"
          className=""
        />
      </Link>

      <Link
        href="/"
        className="flex mb-5 w-full border-transparent p-2 hover:bg-slate-100 "
      >
        <HomeIcon className="w-6 h-6 mr-2" />
        <p className="font-medium">Home</p>
      </Link>

      <Link
        href="/"
        className="flex mb-5 w-full border-transparent p-2 hover:bg-slate-100 "
      >
        <SearchIcon className="w-6 h-6 mr-2" />
        <p className="font-medium">Search</p>
      </Link>

      <Link
        href="/"
        className="flex mb-5 w-full border-transparent p-2 hover:bg-slate-100 "
      >
        <FilmIcon className="w-6 h-6 mr-2" />
        <p className="font-medium">Reels</p>
      </Link>

      <Link
        href="/"
        className="flex mb-5 w-full border-transparent p-2 hover:bg-slate-100 "
      >
        <ClickIcon className="w-6 h-6 mr-2" />
        <p className="font-medium">Explore</p>
      </Link>
      <Link
        href="/message"
        className="flex mb-5 w-full border-transparent p-2 hover:bg-slate-100 "
      >
        <MessageIcon className="w-6 h-6 mr-2" />
        <p className="font-medium">Message</p>
      </Link>
      <Link
        href="/"
        className="flex mb-5 w-full border-transparent p-2 hover:bg-slate-100 "
      >
        <HeartIcon className="w-6 h-6 mr-2" />
        <p className="font-medium">Notifications</p>
      </Link>

      <Link
        href="/"
        className="flex mb-24 w-full border-transparent p-2 hover:bg-slate-100 "
      >
        <Image
          src="/login/ggplay.png"
          alt="avatar"
          className="mr-2 rounded-full object-contain"
          width={24}
          height={24}
        />
        <p className="font-medium">Profile</p>
      </Link>

      <Popover
        trigger={
          <button className="flex border-transparent p-2 hover:bg-slate-100 border-transparent w-full">
            <BarIcon className="w-6 h-6 mr-2" />
            <p className="font-medium">More</p>
          </button>
        }
      >
        <PopoverMore className="absolute z-100 w-48 bg-white rounded-md mt-2 top-[calc(-300px_-_100%)] border rounded-lg p-2" />
      </Popover>
    </div>
  );
}
