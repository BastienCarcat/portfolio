import { AnimationProvider } from "@/lib/animation-context";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimationProvider>
      <main className="mx-auto max-w-[110rem] overflow-hidden">{children}</main>
    </AnimationProvider>
  );
}
