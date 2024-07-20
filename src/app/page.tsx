import React from "react";
import Image from "next/image";
import { H1, H2 } from "@/components/ui/typography";
import homepic from "@/../../public/home.jpg"
import logo from "@/../../public/Marvel.png"
import xmen from "@/../../public/xmen.jpg"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({ variable: '--font-grotesk', subsets: ['latin'], weight: '600'})

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col justify-between bg-slate-900">
      <div className="flex flex-row gap-4 h-screen">
        <div className="bg-slate-50 flex flex-col w-full gap-8 p-36 justify-center items-start">
          <Image 
            src={logo}
            alt="Marvel logo"
            height={80}
          />
          <div className="flex flex-col justify-start w-full gap-2">
            <H1 className="text-8xl">Superpowered!</H1>
            <H2>Create a team of Marvel Characters to describe your personality to your friends or team.</H2>
          </div>
          <div className="flex flex-col gap-4 w-full items-start justify-start">
            <div className="flex flex-col gap-1 w-full">
              <label>Email</label>
              <Input className="focus-visible:ring-red-600" type="email" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Password</label>
              <Input className="focus-visible:ring-red-600" type="password" />
            </div>
          </div>
          <Button type='submit' className="hover:bg-red-600">Sign In</Button>
          <Button className="text-slate-400" variant={'link'}>...or Create New Account</Button>
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
