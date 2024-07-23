'use client';

import React, { useState } from "react";
import Image from "next/image";
import { H1, H2 } from "@/components/ui/typography";
import homepic from "@/../../public/home.jpg";
import logo from "@/../../public/Marvel.png";
import xmen from "@/../../public/xmen.jpg";
import pow_graphic from "@/../../public/pow-pic.png";
import marvel2 from "@/../../public/marvel 2.jpg";
import loki from "@/../../public/loki.jpg";
import google from "@/../../public/google.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: "600",
});



export default function Home() {
  const [pow, setPow] = useState(false);
  const powChange = () => {
    setPow(!pow);
  };

  return (
    <main className="flex min-h-screen min-w-full flex-col justify-between bg-slate-900">
      <div className="flex flex-row gap-4 h-screen">
        <div className="flex flex-col gap-4">
          <Image
            src={marvel2}
            alt="Superheroes"
            className="h-2/3 w-full object-cover"
          />
          <Image
            src={loki}
            alt="Superheroes"
            className="h-1/3 w-full object-cover object-top"
          />
        </div>
        <div className="bg-slate-50 flex flex-col w-full gap-8 p-36 justify-center items-start">
          <Image src={logo} alt="Marvel logo" height={80} />
          <div className="flex flex-col justify-start w-full gap-2">
            <div className="flex flex-row items-center gap-2">
              <H1 className="text-8xl">Sign Up</H1>
              <Image
                  src={pow_graphic}
                  height={40}
                  width={70}
                  alt="POW!"
                  className="flex flex-row w-[50px] h-[40px] rotate-12"
                />
            </div>
            <H2>
              Create your account to get started
            </H2>
          </div>
          <div className="flex flex-col gap-4 w-full items-start justify-start">
            <div className="flex flex-col gap-1 w-full">
              <label>Name</label>
              <Input className="focus-visible:ring-orange-400" type="email" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Email</label>
              <Input className="focus-visible:ring-orange-400" type="email" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Password</label>
              <Input
                className="focus-visible:ring-orange-400"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2 items-center">
                <Checkbox className="border-slate-400" />
                <p className="text-sm text-slate-400">
                  Sign up to stay in the loop for product updates and special
                  offers?
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Checkbox className="border-slate-400" />
                <p className="text-sm text-slate-400">
                  Allow us to sell all of your account data to Russian hackers?
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-row gap-2 w-full">
              <Button type="button" onClick={powChange} className="w-full">
                <Link href={"./builder"}>Create Account</Link>
              </Button>
            </div>
            <p className="text-center">or</p>
            <Button
              type="button"
              variant={"outline"}
              className="flex flex-row justify-center h-fit w-full"
              onClick={powChange}
            >
              <Link
                href={"./builder"}
                className="flex flex-row gap-2 items-center"
              >
                <Image src={google} width={30} height={30} alt="Google" />
                <p>Sign Up with Google</p>
              </Link>
            </Button>
          </div>
        </div>
        
      </div>
    </main>
  );
}
