import React from 'react';
import marvel from '@/../../public/Marvel.png'
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H1, H2 } from '@/components/ui/typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroes from '@/app/data/heroes.json'
import { Input } from '@/components/ui/input';
import thorpic from '@/../../public/cards/thor.jpg'
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const heroNames = heroes.map(hero => hero.name);
const thor = heroes[0];


export default function Builder() {
    return (
        <main className="flex min-w-full flex-col gap-0 bg-slate-900">
            <section className='flex flex-row justify-between h-20 px-8 py-4 items-center bg-slate-50 mb-2'>
                <div className='flex flex-row items-center gap-6'>
                    <Image
                        src={marvel}
                        alt="Marvel"
                        height={40}
                    />
                    <H2 className='font-semibold'>SUPERPOWERED!</H2>
                </div>
                <Avatar className='hover:ring-2 hover:ring-orange-500 cursor-pointer'>
                    <AvatarImage className='object-cover' src='https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <AvatarFallback>TH</AvatarFallback>
                </Avatar>
            </section>

            <section className='flex flex-col bg-slate-50 h-[1000px] w-full p-8 gap-10'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <H1 className='text-4xl'>My Powers</H1>
                    </div>
                    <div className='flex flex-row gap-6 w-full'>
                        <div className='flex flex-col gap-2 w-full'>
                            <H2 className='text-md'>Strength</H2>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{thor.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Image Here
                                </CardContent>
                            </Card>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <H2 className='text-md'>Looks</H2>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{thor.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Image Here
                                </CardContent>
                            </Card>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <H2 className='text-md'>Intelligence</H2>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{thor.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Image Here
                                </CardContent>
                            </Card>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <H2 className='text-md'>Humor</H2>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{thor.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Image Here
                                </CardContent>
                            </Card>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <H2 className='text-md'>Attitude</H2>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{thor.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Image Here
                                </CardContent>
                            </Card>
                        </div>
                        
                        
                    </div>
                </div>
               
                <div className='flex flex-col gap-5'>
                    <div>
                        <H1 className='text-4xl'>Search Superheroes </H1>
                        <H2 className='text-lg'>Select up to 5 superheroes that sum up your personality.</H2>
                    </div>
                    <Input type='text' placeholder='Search Marvel characters...' />
                    <div className='grid grid-cols-4 gap-6'>
                        <Card>
                            <CardHeader className='flex flex-row justify-between items-center'>
                                <CardTitle>Thor</CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <Image
                                    src={thorpic}
                                    alt='Thor'
                                    className='w-full h-full object-cover rounded-md'
                                />
                                <p className='font-semibold'>Known for:</p>
                                <ul>
                                    <li>Being absolutely ripped</li>
                                    <li>Smashing empty glasses</li>
                                </ul>
                                <Button className="mt-3 gap-2" variant={'outline'}><PlusCircle size={20} /> Add to Team</Button>
                            </CardContent>
                            
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Thor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Image Here
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Thor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Image Here
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Thor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Image Here
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Thor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Image Here
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

        </main>
    )
}