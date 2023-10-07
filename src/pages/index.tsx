import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { MainInput } from "~/components/Home/MainInput";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex">
      <div className="h-screen min-w-[250px] max-w-[300px] flex-1 bg-black p-6 text-white">
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
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-600">
        <div className="flex items-center justify-center">
          <MainInput />
        </div>
      </div>
    </div>
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
