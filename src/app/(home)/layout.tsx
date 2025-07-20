export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="px-5">{children}</main>;
}
