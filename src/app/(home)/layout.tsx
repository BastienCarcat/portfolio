import { AnimationProvider } from "@/lib/animation-context";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimationProvider>
      <main className="overflow-hidden max-w-[110rem] mx-auto">{children}</main>
    </AnimationProvider>
  );
}
