import React, { useEffect } from "react";

export const MainInput = () => {
  //   useEffect(() => {
  //     // Define the async function
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("api/getArtist");
  //         const result = await response.json();
  //         console.log({ result });
  //       } catch (error) {
  //         console.error("An error occurred:", error);
  //       }
  //     };

  //     // Call the async function
  //     fetchData();
  //   }, []);

  return (
    <div className="min-h-12 relative z-10 flex w-full max-w-lg items-center justify-center gap-2 divide-x divide-zinc-600 rounded-3xl bg-zinc-900 px-2 shadow-lg shadow-black/40">
      <div className="flex min-w-0 flex-1 items-center self-end">
        <form className="h-full w-full">
          <div className="relative flex h-fit min-h-full w-full items-center transition-all duration-300">
            <div className="relative flex min-w-0 flex-1 self-start">
              <div className="pointer-events-none invisible -ml-[100%] min-w-[50%] flex-[1_0_50%] overflow-x-visible opacity-0">
                <div className="pointer-events-none invisible py-3 pl-3 text-base opacity-0 sm:min-h-[15px] sm:leading-6 md:text-sm">
                  Sleep Token
                </div>
              </div>
              <textarea
                id="home-prompt"
                maxLength={1000}
                className="min-w-[50%] flex-[1_0_50%] resize-none border-0 bg-transparent py-3 pl-3 text-base text-white shadow-none outline-none ring-0 [scroll-padding-block:0.75rem] selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 disabled:bg-transparent disabled:opacity-80 sm:min-h-[15px] sm:leading-6 md:text-sm"
                spellCheck="false"
                rows={1}
                placeholder="Sleep Token"
              ></textarea>
            </div>
            <button
              type="submit"
              id="send-button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-50 opacity-50 outline-none transition-colors hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-zinc-400"
            >
              <span className="sr-only">Send</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5 3V2.25H15V3V10C15 10.5523 14.5522 11 14 11H3.56062L5.53029 12.9697L6.06062 13.5L4.99996 14.5607L4.46963 14.0303L1.39641 10.9571C1.00588 10.5666 1.00588 9.93342 1.39641 9.54289L4.46963 6.46967L4.99996 5.93934L6.06062 7L5.53029 7.53033L3.56062 9.5H13.5V3Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
