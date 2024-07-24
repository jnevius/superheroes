'use client';

import React, { useState } from "react";
import Image from "next/image";
import { H1, H2 } from "@/components/ui/typography";
import homepic from "@/../../public/home.jpg";
import logo from "@/../../public/Marvel.png";
import xmen from "@/../../public/xmen.jpg";
import pow_graphic from "@/../../public/pow-pic.png";
import google from "@/../../public/google.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRightCircle } from "lucide-react";
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
        <div className="bg-slate-50 flex flex-col w-full gap-8 p-36 justify-center items-start">
          <Image src={logo} alt="Marvel logo" height={80} />
          <div className="flex flex-col justify-start w-full gap-2">
            <H1 className="text-8xl">Superpowered!</H1>
            <H2>
              Assemble a team of Marvel Characters to express your personality traits to
              your friends or team.
            </H2>
          </div>
          <div className="flex flex-col gap-4 w-full items-start justify-start">
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
            <div className="flex flex-row gap-2 items-center mt-2">
              <Checkbox className="border-slate-400" />
              <p className="text-sm text-slate-400">Remember Me</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <Button type="button" className="w-full">
              <Link href={"./builder"}>Sign In</Link>
            </Button>
            <p className="text-slate-400 text-center">or</p>
            <Button
              type="button"
              variant={"outline"}
              className="flex flex-row justify-center h-fit w-full"
            >
              <Link
                href={"./builder"}
                className="flex flex-row gap-2 items-center"
              >
                <Image src={google} width={30} height={30} alt="Google" />
                <p>Continue with Google</p>
              </Link>
            </Button>
          </div>
          <Separator className="mt-4" />
          <Button className="text-slate-400" variant={"link"}>
            <Link
              href={"./new-account"}
                className="flex flex-row gap-2 items-center"
              >
            <ArrowRightCircle className="mr-2" />
            New to Superpowered? Create a New Account...
            </Link>
          </Button>
        </div>
        <div className="flex flex-col w-full gap-4">
          <Image
            src={homepic}
            alt="Superheroes"
            className="h-2/3 w-full object-cover"
          />
          <Image
            src={xmen}
            alt="Superheroes"
            className="h-1/3 w-full object-cover object-top"
          />
        </div>
      </div>
    </main>
  );
}
