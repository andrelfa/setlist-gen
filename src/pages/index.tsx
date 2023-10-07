import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="absolute h-screen max-w-[200px] flex-1 bg-black p-6 text-white">
        <div className="mb-8">
          <img
            src="/path/to/your/logo.png"
            alt="Your Logo"
            className="h-32 w-32 object-cover"
          />
        </div>
        <ul>
          <li className="mb-4 cursor-pointer hover:text-green-600">Link 1</li>
          <li className="mb-4 cursor-pointer hover:text-green-600">Link 2</li>
          <li className="mb-4 cursor-pointer hover:text-green-600">Link 3</li>
          <li className="cursor-pointer hover:text-green-600">Link 4</li>
        </ul>
      </div>
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="flex flex-1 items-center justify-center">
          <div className="min-h-12 relative z-10 flex w-full max-w-lg items-center justify-center gap-2 divide-x divide-zinc-600 rounded-3xl bg-zinc-900 px-2 shadow-lg shadow-black/40">
            <div className="flex items-center justify-center rounded-l-full">
              <svg
                width="40"
                viewBox="0 0 40 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-zinc-500"
              >
                <path
                  d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex min-w-0 flex-1 items-center self-end">
              <form className="h-full w-full">
                <div className="relative flex h-fit min-h-full w-full items-center transition-all duration-300">
                  <label for="textarea-input" className="sr-only">
                    Prompt
                  </label>
                  <div className="relative flex min-w-0 flex-1 self-start">
                    <div className="pointer-events-none invisible -ml-[100%] min-w-[50%] flex-[1_0_50%] overflow-x-visible opacity-0">
                      <div className="pointer-events-none invisible py-3 pl-3 text-base opacity-0 sm:min-h-[15px] sm:leading-6 md:text-sm">
                        A minimalist blog post template
                      </div>
                    </div>
                    <textarea
                      id="home-prompt"
                      maxlength="1000"
                      className="min-w-[50%] flex-[1_0_50%] resize-none border-0 bg-transparent py-3 pl-3 text-base text-white shadow-none outline-none ring-0 [scroll-padding-block:0.75rem] selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 disabled:bg-transparent disabled:opacity-80 sm:min-h-[15px] sm:leading-6 md:text-sm"
                      spellcheck="false"
                      rows="1"
                      placeholder="A minimalist blog post template"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled=""
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
        </div>
      </div>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
