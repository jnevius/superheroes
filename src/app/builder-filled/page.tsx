'use client';

import React, { useState } from "react";
import marvel from "@/../../public/Marvel.png";
import Image from "next/image";
import generatedImage from "@/../../public/generated-image.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { H1, H2, H3 } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import heroes from "@/app/data/heroes.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BicepsFlexed, Eye, IterationCw, LifeBuoy, LogOut, PlusCircle, Save, Send, Slack, Sparkles, TrendingDown } from "lucide-react";
import {
  HeroCard,
  HeroCardEmpty,
  HeroCardSelected,
  HeroGridMain,
  HeroGridSelected,
} from "@/components/ui/hero-card";
import { v4 as uuidv4 } from "uuid";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Builder() {
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  const filteredHeroes = heroes.filter((hero) => 
    hero.name.toLowerCase().includes(searchTerm.toLowerCase()
  ));
  
  return (
    <main className="flex min-w-full flex-col gap-0 bg-slate-900">
      <section className="flex flex-row justify-between h-20 px-8 py-4 items-center bg-slate-50 mb-2">
        <div className="flex flex-row items-center gap-6">
          <Image src={marvel} alt="Marvel" height={40} />
          <H2 className="font-semibold">SUPERPOWERED!</H2>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Link href={"./builder"}>
            <Button variant={"outline"}>
              <Eye size={16} className="mr-2" />
              Empty
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none active:border-none focus:ring-0 active:ring-0">
              <Avatar className="hover:ring-2 hover:ring-orange-500 cursor-pointer">
                <AvatarImage
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <AvatarFallback>TH</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 w-[200px]">
              <p className="text-sm text-slate-600">Signed in as</p>
              <p className="text-sm font-semibold">Joel Nevius</p>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex flex-row gap-2 py-2">
                  <LifeBuoy size={16} />
                  Help
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-row gap-2 py-2">
                  <LogOut size={16} />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <section className="flex flex-col bg-slate-50 h-fit w-full p-8 gap-10">
        <div className="flex flex-col h-fit gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row w-full justify-between">
              <H1 className="text-4xl">
                Superpowered <span className="text-orange-400">Joel</span>
              </H1>
              <div className="flex flex-row gap-2">
                <Dialog>
                  <DialogTrigger className="flex flex-row items-center bg-orange-400 text-slate-50 rounded-md gap-1 px-4 hover:bg-orange-400/70">
                    <Sparkles size={16} className="mr-1" />
                    Generate Superpowered Me
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="text-2xl font-semibold">
                      Superpowered Joel
                    </DialogHeader>
                    <p>
                      Thunderstrike, formerly known as Joel Nevius, gained
                      superhuman powers through a gamma-nanotech accident in
                      Phoenix. Wielding cosmic-powered armor that channels
                      lightning, Thunderstrike&apos;s strength grows with emotion. A
                      brilliant strategist and espionage expert, they battle
                      inner demons while fiercely protecting humanity. This
                      complex hero embodies raw power, intellect, and unwavering
                      determination.
                    </p>
                    <Image
                      src={generatedImage}
                      alt="Generated Image"
                      height={500}
                      width={700}
                      className="rounded-lg"
                    />
                    <div className="flex flex-row gap-2 items-center justify-center">
                      <Image src={marvel} alt="Marvel" height={50} width={80} />
                      <p>Welcome to the Marvel Universe!</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Button>
                        <Slack size={16} className="mr-1" />
                        Send to Slack
                      </Button>
                      <Button variant={"outline"}>
                        <Send size={16} className="mr-1" />
                        Email
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant={"secondary"}>
                  <Save size={16} />
                </Button>
                <Button variant={"secondary"}>
                  <IterationCw size={16} />
                </Button>
              </div>
            </div>
            <H2 className="text-lg">
              Heroes are teaming up to create a superpowered YOU. Select your
              top 4 superheroes from the gallery below: 3 for their strengths,
              and 1 for their weakness. Assemble the team, and get a summary of
              superpowered you to share with your peers.
            </H2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-5">
              <Card className="flex flex-row items-center gap-2 border-none shadow-none bg-slate-50">
                <BicepsFlexed className="text-orange-400" />
                <H2 className="font-semibold">Superpower 1</H2>
              </Card>
              <Card className="flex flex-row items-center gap-2 border-none shadow-none bg-slate-50">
                <BicepsFlexed className="text-orange-400" />
                <H2 className="font-semibold">Superpower 2</H2>
              </Card>
              <Card className="flex flex-row items-center gap-2 border-none shadow-none bg-slate-50">
                <BicepsFlexed className="text-orange-400" />
                <H2 className="font-semibold">Superpower 3</H2>
              </Card>
              <Card className="flex flex-row items-center gap-2 border-none shadow-none bg-slate-50">
                <TrendingDown className="text-orange-400" />
                <H2 className="font-semibold">Weakness</H2>
              </Card>
            </div>
            <HeroGridSelected>
              {heroes.slice(0, 4).map((hero) => (
                <HeroCard
                  key={uuidv4()}
                  name={hero.name}
                  description={hero.description}
                  thumbnail={hero.thumbnail}
                  isSelected={true}
                  className="bg-slate-800 text-slate-50"
                />
              ))}
            </HeroGridSelected>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <H1 className="text-4xl">Search Superheroes </H1>
            <H2 className="text-lg">
              Find and select up to 4 superheroes to create a superpowered you.
              Click &apos;+&apos; button and then assign it to your superpowers or
              weakness.
            </H2>
          </div>
          <Input
            className="rounded-full"
            type="text"
            placeholder="Search Marvel characters..."
            onChange={handleSearch}
            value={searchTerm}
          />
          <HeroGridMain>
            {filteredHeroes.map((hero) => (
              <HeroCard
                key={uuidv4()}
                name={hero.name}
                description={hero.description}
                thumbnail={hero.thumbnail}
              />
            ))}
          </HeroGridMain>
        </div>
      </section>
    </main>
  );
}
