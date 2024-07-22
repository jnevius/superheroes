import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Car, CircleUserRound, Dumbbell, PlusCircle, PlusSquare, SquarePlus, TrendingDown, UserCircle2, X, Zap } from 'lucide-react';
import heroes from '@/app/data/heroes.json';
import { Button } from './button';
import Image from 'next/image';
import { HeroCardProps, HeroGridProps } from '@/types';
import thor from '@/../../public/cards/thor.jpg';
import { Select, SelectContent, SelectTrigger } from './select';
import { SelectItem } from '@radix-ui/react-select';

interface props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  name: string;
  description: string;
  superpowers: string;
  personality: string;
  pitfalls: string;
  imageUrl?: string;
}

const heroNames = heroes.map((hero) => hero.name);
const heroDescriptions = heroes.map((hero) => hero.description)
const heroPowers = heroes.map((hero) => hero.superpowers)
const heroImages = heroes.map((hero) => hero.image)

export const HeroCard: React.FC<HeroCardProps> = ({
  name,
  description,
  superpowers,
  personality,
  pitfalls,
  imageUrl,
  children,
  ...props
}) => {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='h-15'>
        <CardTitle>{name}</CardTitle>
        <CardDescription className='truncate'>{description}</CardDescription>
      </CardHeader>

      <CardContent className='h-[300px] mb-4'>
        <Image
          src={imageUrl}
          alt="Hero Image"
          width={400}
          height={500}
          className="h-[300px] object-cover object-top rounded-md mb-4"
        />
        {children}
      </CardContent>
      <CardContent>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-2'>
            <Zap className='text-orange-400' size={16} />
            <p className='text-xs'>{superpowers}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <CircleUserRound className='text-orange-400' size={16} />
            <p className='text-xs'>{personality}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <TrendingDown className='text-orange-400' size={16} />
            <p className='text-xs'>{pitfalls}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Select>
          <SelectTrigger value={''} className='focus:ring-2 focus:ring-orange-400 hover:bg-orange-400 hover:text-white'><PlusCircle size={16} />Add to...</SelectTrigger>
          <SelectContent className='p-1 cursor-pointer'>
            <SelectItem className='p-2' value="strength">Strength</SelectItem>
            <SelectItem className='p-2' value="looks">Looks</SelectItem>
            <SelectItem className='p-2' value="intelligence">Intelligence</SelectItem>
            <SelectItem className='p-2' value="humor">Humor</SelectItem>
            <SelectItem className='p-2' value="attitude">Attitude</SelectItem>
          </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  );
};

export const HeroCardEmpty: React.FC<HeroCardProps> = ({
  children,
  description,
  ...props
}) => {
  return (
    <Card className='h-full border-[2px] border-dashed flex flex-col justify-center items-center hover:shadow-none'>
      <CardContent className='flex flex-col justify-center items-center gap-2 '>
        <UserCircle2 size={48} className='text-slate-100' />
      </CardContent>
    </Card>
  );
};

export const HeroCardSelected: React.FC<HeroCardProps> = ({
  children,
  name,
  description,
  imageUrl,
  superpowers,
  ...props
}) => {
  return (
    <Card className='h-full border-2 border-orange-400 hover:shadow-none'>
      <CardHeader>
        <CardTitle className='flex flex-row justify-between items-center'>{heroNames[0]}<X size={16} className='text-slate-400 hover:text-slate-800 cursor-pointer' /></CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>

      <CardContent>
        <Image
          src={imageUrl}
          alt="Hero Image"
          className="object-cover rounded-md mb-4"
        />
        {children}
        <ul>
          <li>{superpowers}</li>
        </ul>
      </CardContent>
    </Card>
  );
};


export const HeroGridMain: React.FC<HeroGridProps> = ({children, ...props}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
};

export const HeroGridSelected: React.FC<HeroGridProps> = ({children, ...props}) => {
  return (
    <div className="grid grid-cols-3 gap-4 h-[240px]">
      {children}
    </div>
  );
};