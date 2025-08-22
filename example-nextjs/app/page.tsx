'use client';

import Counter from "@/Components/Counter";
import MyTitle from "@/Components/MyTitle";
import Button from "@/Components/Button";

import { APP_NAME, APP_VERSION, APP_DEV_COMPANY } from "@/Types/env";
import Image from "next/image";

import { useAppData } from '@/Context/AppDataContext'

export default function Home() {

  const { sharedValue } = useAppData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] md:grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start">
        <input className="font-bold" value={APP_NAME} readOnly />
        <div className="flex items-center justify-center gap-3">
          <Button label="About" url="/about" variant="primary" />
          <Button label="Control" url="/control" variant="secondary" />
        </div>
      </div>
      <MyTitle />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Counter />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        <div className="m-8">
          <h1 className="text-2xl font-bold">{sharedValue}</h1>
        </div>
      </footer>
    </div>
  );
}
