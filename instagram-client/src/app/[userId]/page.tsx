import CommentIcon from "@/Icon/commentIcon";
import HeartIcon from "@/Icon/heartIcon";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  params: { userId: string };
};
export default function Profile({ className, params }: Props) {
  return (
    <div className="py-8 h-screen overflow-x-hidden">
      <SideBar className="h-screen fixed left-0 top-0 z-10 border-r-2 w-60 py-8 px-4 bg-white" />
      <div className="flex flex-col">
        <div className="w-[calc(100%_-_240px)] h-full min-h-[700px] ml-auto flex justify-center">
          <div className="w-2/3">
            <div className="flex px-16 mb-6">
              <Image
                src="/at.jpg"
                width={150}
                height={150}
                alt="avatar"
                className="w-[150px] h-[150px] mr-16 object-fill border rounded-full"
              />
              <div className="">
                <div className="flex items-center mb-8">
                  <p className="text-md font-semibold mr-4">1longg</p>
                  <button className="border rounded-md px-3 py-1 bg-slate-300 font-medium text-sm mr-4">
                    Edit Profile
                  </button>
                  <button className="border rounded-md px-3 py-1 bg-slate-300 font-medium text-sm mr-4">
                    View Archie
                  </button>
                </div>
                <div className="flex mb-8">
                  <div className="mr-5 flex">
                    <p className="font-semibold mr-2">1</p> Posts
                  </div>
                  <Link href="/1longg/follow" className="mr-5 flex">
                    <p className="font-semibold mr-2">20</p> Followers
                  </Link>
                  <div className="flex">
                    <p className="font-semibold mr-2">10</p> Followings
                  </div>
                </div>
                <div className="text-sm">This is my bio</div>
              </div>
            </div>

            <div className="h-[1px] bg-slate-300 w-full mt-16 mb-4"></div>

            <div className="grid grid-cols-3 gap-1 mb-4">
              <Link
                href="/post/123"
                className="col-span-1 cursor-pointer relative group"
              >
                <div className="group-hover:flex hidden w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 justify-center items-center">
                  <div className="flex items-center mr-4">
                    <HeartIcon className="w-6 h-6 mr-1 text-white fill-white" />
                    <p className="text-white text-sm">34</p>
                  </div>

                  <div className="flex items-center">
                    <CommentIcon className="w-6 h-6 mr-1 text-white fill-white" />
                    <p className="text-white text-sm">34</p>
                  </div>
                </div>
                <Image
                  src="/logo.jpg"
                  alt="check"
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[calc(100%_-_240px)] ml-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
