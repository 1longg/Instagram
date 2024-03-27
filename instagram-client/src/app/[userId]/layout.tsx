type Props = {
  children: React.ReactNode;
  post: React.ReactNode;
};
export default function ProfileLayout({ children, post }: Props) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}
