"use client";

import FacebookIcon from "@/Icon";
import Image from "next/image";
import Link from "next/link";

type LoginFormProps = {
  className: string;
};

export default function LoginForm({ className }: LoginFormProps) {
  return (
    <div className={className}>
      <div className="flex justify-center py-4">
        <Image
          src="/login/instagram-text.png"
          alt="loginform"
          width={175}
          height={51}
          className="flex justify-center"
        />
      </div>
      <form className="text-center mb-4">
        <div className="text-center">
          <input
            className="p-2 border rounded bg-slate-50 mb-3 w-[280px] text-xs"
            placeholder="Username or email"
          />
          <input
            className="p-2 border rounded bg-slate-50 w-[280px] text-xs"
            placeholder="Password"
          />
        </div>
        <button className="mt-4 text-sm border rounded-lg bg-blue-500 font-bold w-[280px] text-white py-2 text-center hover:opacity-80">
          Log in
        </button>
      </form>

      <div className="flex items-center mx-auto text-xs text-gray-500 w-[280px] mb-6">
        <div className="border-b border-gray-500 h-[1px] w-full"></div>
        <div className="text-center mx-3">OR</div>
        <div className="border-b border-gray-500 h-[1px] w-full"></div>
      </div>

      <div className="flex justify-center items-center mb-4">
        <FacebookIcon className="h-5 w-5 mr-2" />
        <Link href="/login" className="text-xs text-blue-600">
          Log in with facebook
        </Link>
      </div>

      <Link
        href="/"
        className="text-blue-400 text-xs justify-center ml-7 flex cursor-pointer"
      >
        Forgot password?
      </Link>
    </div>
  );
}
