"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { ArrowUpRight, Sparkles, Waves } from "lucide-react";

const floatTransition = {
  duration: 4.8,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

export function HeroProductScene() {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto flex w-full max-w-[40rem] items-center justify-center py-4 lg:py-0">
        <m.div
          animate={
            reduceMotion ? undefined : { scale: [1, 1.05, 1], opacity: [0.48, 0.66, 0.48] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
          className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[#e9cdbf]/18 blur-3xl"
        />
        <m.div
          animate={
            reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.28, 0.46, 0.28] }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.2,
                }
          }
          className="absolute bottom-10 right-8 h-36 w-36 rounded-full bg-[#b7cbe6]/16 blur-3xl"
        />

        <div className="relative grid w-full items-center gap-5 lg:grid-cols-[0.98fr_0.9fr]">
          <m.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <m.div
              animate={reduceMotion ? undefined : { y: [-6, 8, -6], rotate: [-2, 1, -2] }}
              transition={reduceMotion ? undefined : floatTransition}
              className="absolute left-[14%] top-[11%] z-20 rounded-full border border-white/14 bg-white/10 px-3.5 py-2 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#f3e8df]">
                <Sparkles className="h-3.5 w-3.5" />
                AI pulse
              </div>
            </m.div>

            <m.div
              animate={reduceMotion ? undefined : { y: [6, -8, 6], x: [0, 3, 0] }}
              transition={reduceMotion ? undefined : { ...floatTransition, duration: 6.6 }}
              className="absolute bottom-[10%] right-[6%] z-20 rounded-[1.25rem] border border-white/12 bg-[#1a1320]/85 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#f2e8e1]/40">Routine</p>
              <div className="mt-2 flex items-center gap-2 text-sm text-[#f6eee8]">
                Glow repair
                <ArrowUpRight className="h-4 w-4 text-[#d7e1ef]" />
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
              className="mask-device relative h-[21.5rem] w-[17rem] lg:h-[23rem] lg:w-[18rem]"
            >
              <m.div
                animate={reduceMotion ? undefined : { rotate: [0, 1.4, 0, -1.4, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                }
                className="absolute inset-0"
              >
                <svg
                  viewBox="0 0 900 900"
                  className="h-full w-full drop-shadow-[0_22px_38px_rgba(0,0,0,0.14)]"
                >
                  <defs>
                    <radialGradient id="silverMaskBody" cx="50%" cy="34%" r="74%">
                      <stop offset="0%" stopColor="#dfdbd8" />
                      <stop offset="36%" stopColor="#cbc6c4" />
                      <stop offset="74%" stopColor="#aaa5a9" />
                      <stop offset="100%" stopColor="#928d92" />
                    </radialGradient>
                    <linearGradient
                      id="silverMaskShade"
                      x1="148"
                      y1="116"
                      x2="738"
                      y2="804"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
                      <stop offset="28%" stopColor="#ffffff" stopOpacity="0.09" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="silverSideHighlight"
                      x1="170"
                      y1="160"
                      x2="380"
                      y2="760"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                    </linearGradient>
                    <radialGradient id="goldGlow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#ffd985" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ffd985" stopOpacity="0" />
                    </radialGradient>
                    <mask id="faceCutouts">
                      <rect width="900" height="900" fill="white" />
                      <path
                        d="M150 360C185 326 248 316 299 325C342 333 372 353 387 382C347 393 287 396 235 388C193 381 165 372 150 360Z"
                        fill="black"
                      />
                      <path
                        d="M750 360C715 326 652 316 601 325C558 333 528 353 513 382C553 393 613 396 665 388C707 381 735 372 750 360Z"
                        fill="black"
                      />
                      <ellipse cx="450" cy="625" rx="68" ry="15" fill="black" />
                    </mask>
                  </defs>

                  <path
                    d="M450 108C572 108 681 146 737 236C781 307 794 410 786 546C779 662 741 748 675 804C617 854 539 878 450 878C361 878 283 854 225 804C159 748 121 662 114 546C106 410 119 307 163 236C219 146 328 108 450 108Z"
                    fill="url(#silverMaskBody)"
                    mask="url(#faceCutouts)"
                  />
                  <path
                    d="M450 108C572 108 681 146 737 236C781 307 794 410 786 546C779 662 741 748 675 804C617 854 539 878 450 878C361 878 283 854 225 804C159 748 121 662 114 546C106 410 119 307 163 236C219 146 328 108 450 108Z"
                    fill="url(#silverMaskShade)"
                    mask="url(#faceCutouts)"
                  />

                  <ellipse
                    cx="450"
                    cy="470"
                    rx="98"
                    ry="142"
                    fill="url(#goldGlow)"
                    opacity="0.26"
                    mask="url(#faceCutouts)"
                  />
                  <path
                    d="M425 360L404 543"
                    stroke="#ffd36d"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M475 360L496 543"
                    stroke="#ffd36d"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />


                  <g stroke="#ffffff" strokeOpacity="0.72" strokeWidth="4" strokeLinecap="round">
                    <path d="M710 702C738 626 761 562 782 493" />
                    <path d="M680 730C710 657 735 595 757 531" />
                    <path d="M648 752C681 684 708 626 732 570" />
                  </g>
                </svg>
              </m.div>

              <m.div
                animate={
                  reduceMotion ? undefined : { opacity: [0.16, 0.34, 0.16], scale: [0.98, 1.03, 0.98] }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 6.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }
                }
                className="absolute left-1/2 top-[46%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe1a8]/10 blur-2xl lg:h-52 lg:w-52"
              />
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <m.div
              animate={reduceMotion ? undefined : { y: [-8, 6, -8] }}
              transition={reduceMotion ? undefined : { ...floatTransition, duration: 6.8 }}
              className="phone-shell relative mx-auto h-[26rem] w-[14rem] rounded-[2.5rem] border border-white/12 bg-[#110d14]/92 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] lg:h-[28rem] lg:w-[15rem]"
            >
              <div className="absolute left-1/2 top-2.5 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/12" />
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#2d2030_0%,#17111d_45%,#0c0910_100%)] p-4 lg:p-5">
                <m.div
                  animate={reduceMotion ? undefined : { x: ["-30%", "120%"] }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
                  }
                  className="absolute inset-y-0 w-24 rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
                />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#efe3d9]/52">
                      Beauteqno app
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#f7f0ea] lg:text-xl">
                      Daily AI ritual
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-[#efe4dc]/70">
                    Live sync
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-sm text-[#f1e7df]/74">
                    <span>Device calibration</span>
                    <span className="text-[#d7e1ef]">92%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <m.div
                      initial={{ width: "0%" }}
                      animate={
                        reduceMotion ? { width: "92%" } : { width: ["24%", "92%", "68%", "92%"] }
                      }
                      transition={
                        reduceMotion
                          ? { duration: 0.45, ease: "easeOut" }
                          : { duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                      }
                      className="h-full rounded-full bg-[linear-gradient(90deg,#edd7c8,#ddc6bb,#b7cbe6)]"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-3 rounded-[1.2rem] bg-[#130f15]/76 p-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edd8ca]/14 text-[#efe1d6]">
                      <Waves className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#f2e9e1]/40">Tonight</p>
                      <p className="mt-1 text-sm text-[#f6eee8]">Hydro lift sculpt mask</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  {[
                    ["Skin calm score", "Improved 18% this week"],
                    ["Routine suggestion", "LED + serum pairing recommended"],
                    ["Next follow-up", "AI review after 3 sessions"],
                  ].map(([title, value], index) => (
                    <m.div
                      key={title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.25 + index * 0.12 }}
                      className="rounded-[1.35rem] border border-white/10 bg-white/7 p-4"
                    >
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#f2e8df]/42">
                        {title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#f6eee8]/88">{value}</p>
                    </m.div>
                  ))}
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}
