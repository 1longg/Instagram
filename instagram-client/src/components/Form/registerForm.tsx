type Props = {
  className?: string;
};

export default function RegisterForm({ className }: Props) {
  return (
    <div className={className}>
      <form className="text-center">
        <div className="text-center">
          <input
            placeholder="Email"
            className="p-2 border rounded bg-slate-50 mb-3 w-[280px] text-sm"
          />

          <input
            placeholder="Full name"
            className="p-2 border rounded bg-slate-50 mb-3 w-[280px] text-sm"
          />

          <input
            placeholder="Username"
            className="p-2 border rounded bg-slate-50 mb-3 w-[280px] text-sm"
          />

          <input
            placeholder="Password"
            className="p-2 border rounded bg-slate-50 mb-3 w-[280px] text-sm"
          />
        </div>
        <button className="my-4 text-sm border rounded-lg bg-blue-500 font-bold w-[280px] text-white py-2 text-center hover:opacity-80">
          Sign up
        </button>
      </form>
    </div>
  );
}
