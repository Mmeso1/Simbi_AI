export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        bg-[linear-gradient(22.19deg,_#E1BC80_16.99%,_#957FFF_89.32%)]
      "
    >
      <div className="absolute top-12 left-40">
        {/* <Image src="/logo.svg" alt="SIMBI Logo" width={170} height={170} /> */}
      </div>

      {/* Centered card container */}
      <div className="flex flex-col my-16 md:my-0 md:flex-row bg-white rounded-3xl shadow-[0_19px_86.9px_0_rgba(149,127,255,0.53)] w-full max-w-3/4 overflow-hidden">
        {children}
      </div>
    </main>
  );
}
