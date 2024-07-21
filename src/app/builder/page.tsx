import React from 'react';
import marvel from '@/../../public/Marvel.png'
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { H1, H2 } from '@/components/ui/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { heroes } from '@/data/heroData';
import { Input } from '@/components/ui/input';
import thor from '@/../../public/cards/thor.jpg'


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
                    <H1 className='text-3xl'>SUPERPOWERED</H1>
                </div>
                <Avatar className='hover:ring-2 hover:ring-red-400 cursor-pointer'>
                    <AvatarImage className='object-cover' src='https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    <AvatarFallback>TH</AvatarFallback>
                </Avatar>
            </section>

            <section className='flex flex-col bg-slate-50 h-[1000px] w-full p-8 gap-10'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <H1>Your Team</H1>
                    </div>
                    <div className='flex flex-row gap-6'>
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
               
                <div className='flex flex-col gap-5'>
                    <div>
                        <H1>Search Superheroes </H1>
                        <H2>Select up to 5 superheroes that sum up your personality.</H2>
                    </div>
                    <Input type='text' placeholder='Search Marvel characters...' />
                    <div className='grid grid-cols-4 gap-6'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Thor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={thor}
                                    alt='Thor'
                                    className='w-full h-full object-cover rounded-md'
                                />
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