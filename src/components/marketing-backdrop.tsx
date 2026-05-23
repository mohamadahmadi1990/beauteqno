export function MarketingBackdrop() {
  return (
    <>
      <div className="absolute inset-0 -z-40 bg-[#09060d]" />
      <div className="page-gradient-motion absolute inset-0 -z-30" />
      <div className="page-gradient-halo absolute inset-0 -z-30" />
      <div className="page-mesh absolute inset-0 -z-20" />
      <div className="page-circuit absolute inset-0 -z-20 opacity-72" />
      <div className="page-circuit-secondary absolute inset-0 -z-20 opacity-48" />
      <div className="hero-noise absolute inset-0 -z-10 opacity-50" />
      <div className="pointer-events-none absolute left-[-12rem] top-[6rem] h-[32rem] w-[32rem] rounded-full bg-[#e1c4b6]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-11rem] top-[14rem] h-[28rem] w-[28rem] rounded-full bg-[#b7c7df]/8 blur-3xl" />
      <div className="pointer-events-none absolute left-[32%] top-[24rem] h-[22rem] w-[22rem] rounded-full bg-[#d7b2c0]/7 blur-3xl" />
    </>
  );
}
