import React from "react";
import marvel from "@/../../public/Marvel.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { H1, H2 } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import heroes from "@/app/data/heroes.json";
import { Input } from "@/components/ui/input";
import thorpic from "@/../../public/cards/thor.jpg";
import { Button } from "@/components/ui/button";
import { Instagram, PlusCircle, Slack, Sparkles } from "lucide-react";
import { HeroCard, HeroCardEmpty, HeroCardSelected, HeroGridMain, HeroGridSelected } from "@/components/ui/hero-card";
import { v4 as uuidv4 } from 'uuid';


const heroNames = heroes.map((hero) => hero.name);
const thor = heroes[0];

export default function Builder() {

  return (
    <main className="flex min-w-full flex-col gap-0 bg-slate-900">
      <section className="flex flex-row justify-between h-20 px-8 py-4 items-center bg-slate-50 mb-2">
        <div className="flex flex-row items-center gap-6">
          <Image src={marvel} alt="Marvel" height={40} />
          <H2 className="font-semibold">SUPERPOWERED!</H2>
        </div>
        <Avatar className="hover:ring-2 hover:ring-orange-500 cursor-pointer">
          <AvatarImage
            className="object-cover"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <AvatarFallback>TH</AvatarFallback>
        </Avatar>
      </section>

      <section className="flex flex-col bg-slate-50 h-fit w-full p-8 gap-10">
        <div className="flex flex-col h-fit gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full justify-between">
              <H1 className="text-4xl">Superpowered Joel</H1>
              <div className="flex flex-row gap-2">
                <Button size={'sm'}><Slack size={16} className="mr-1" />Send to Slack</Button>
                <Button size={'sm'} variant={'outline'}><Instagram size={16} className="mr-1" />Post to Instagram</Button>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-row items-center gap-1">Summary <Sparkles size={16} className="text-orange-400" /></div>
                </CardTitle>
                <CardDescription>
                You have a strong and humorous disposition that masks your inner pain.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <HeroGridSelected>
            <div className="flex flex-col gap-2 w-full">
              <H2 className="text-md">Powers</H2>
              <HeroCardEmpty />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <H2 className="text-md">description</H2>
              <HeroCardEmpty />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <H2 className="text-md">Pitfalls</H2>
              <HeroCardEmpty />
            </div>
          </HeroGridSelected>
        </div>


        <div className="flex flex-col gap-5">
          <div>
            <H1 className="text-4xl">Search Superheroes </H1>
            <H2 className="text-lg">
              Select up to 5 superheroes that sum up your description.
            </H2>
          </div>
          <Input className="rounded-full" type="text" placeholder="Search Marvel characters..." />
          <HeroGridMain>
            {heroes.map((hero) => (
              <HeroCard
                key={uuidv4()}
                name={hero.name}
                description={hero.description}
                superpowers={hero.superpowers}
                description={hero.description}
                pitfalls={hero.pitfalls}
                 thumbnail={hero.image}
              />
              ))
            }
          </HeroGridMain>
        </div>
      </section>
    </main>
  );
}
