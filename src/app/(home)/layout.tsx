export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="px-5  overflow-hidden ">{children}</main>;
}
