import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { BicepsFlexed, Car, CircleUserRound, Dumbbell, PlusCircle, PlusSquare, SquarePlus, TrendingDown, UserCircle2, X, Zap } from 'lucide-react';
import heroes from '@/app/data/heroes.json';
import { Button } from './button';
import Image from 'next/image';
import { BlankCardProps, HeroCardProps, HeroGridProps } from '@/types';
import thor from '@/../../public/cards/thor.jpg';
import { Select, SelectContent, SelectSmallTrigger, SelectTrigger } from './select';
import { SelectItem } from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';

interface props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  name: string;
  bio: string;
  superpowers: string;
  description: string;
  thumbnail?: string;
  isSelected?: boolean;
  isEmpty?: boolean;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  name,
  bio,
  superpowers,
  description,
  thumbnail,
  children,
  isSelected,
  className,
  ...props
}) => {
  return (
    <Card className={cn('flex flex-col', className)}>
      <CardHeader className='h-15 pt-6 pb-2'>
        <div className='flex flex-row items-center justify-between'>
          <CardTitle>{name}</CardTitle>
          {!isSelected ? (
            <Select>
              <SelectSmallTrigger value={''} className='focus:ring-0 focus:ring-transparent bg-transparent active-border-0 hover:bg-orange-400 hover:text-white w-fit'>
                <PlusCircle size={16} />
              </SelectSmallTrigger>
              <SelectContent className='p-2 cursor-pointer'>
                <SelectItem className='py-2 px-4' value="superpower1">Superpower 1</SelectItem>
                <SelectItem className='py-2 px-4' value="superpower2">Superpower 2</SelectItem>
                <SelectItem className='py-2 px-4' value="superpower3">Superpower 3</SelectItem>
                <SelectItem className='py-2 px-4' value="weakness">Weakness</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <Button variant={'default'} size={'sm'} className='bg-slate-700'>
              <X size={16}  />
            </Button>
          )
          }
        </div>
        <CardDescription className='truncate'>{bio}</CardDescription>
      </CardHeader>
      <CardContent className='h-fit pb-0'>
        <Image
          src={thumbnail}
          alt="Hero Image"
          width={400}
          height={500}
          className="h-[200px] object-cover object-top rounded-md mb-4"
        />
        {children}
      </CardContent>
        <CardContent>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row gap-1 items-center'>
              <CircleUserRound className='text-orange-400' size={16} />
              <p>Bio</p>
            </div>
            <p className='text-xs'>{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const HeroCardEmpty: React.FC<BlankCardProps> = ({
  children,
  className,
  isWeakness,
  ...props
}) => {
  return (
    <Card className={cn('h-[240px] border-[2px] border-dashed flex flex-col justify-center items-center hover:shadow-none', className)}>
      <CardContent className='flex flex-col justify-center items-center gap-2 '>
        { !isWeakness ? (
          <BicepsFlexed size={48} className='text-slate-100' />
        ) :
        (
          <TrendingDown size={48} className='text-slate-100' />
        )
        }
      </CardContent>
    </Card>
  );
};

export const HeroCardSelected: React.FC<HeroCardProps> = ({
  children,
  name,
  bio,
  thumbnail,
  superpowers,
  ...props
}) => {
  return (
    <Card className='h-full border-2 border-orange-400 hover:shadow-none'>
      <CardHeader>
        <CardTitle className='flex flex-row justify-between items-center'>{name}<X size={16} className='text-slate-400 hover:text-slate-800 cursor-pointer' /></CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>

      <CardContent>
        <Image
          src={thumbnail}
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


export const HeroGridMain: React.FC<HeroGridProps> = ({children, className, ...props}) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", className)}>
      {children}
    </div>
  );
};

export const HeroGridSelected: React.FC<HeroGridProps> = ({
  children,
  isEmpty,
  className,
  ...props
}) => {
  return (
    <div className={cn("grid grid-cols-4 gap-4 h-fit", className)}>
      {children}
      {isEmpty && (
        <HeroCardEmpty isWeakness={false} />
      )}
      {isEmpty && (
        <HeroCardEmpty isWeakness={false} />
      )}
      {isEmpty && (
        <HeroCardEmpty isWeakness={false} />
      )}
      {isEmpty && (
        <HeroCardEmpty isWeakness />
      )}
    </div>
  );
};