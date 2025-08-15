import { buttonVariants } from '@/components/ui/button';
import { Effect } from '@/components/ui/effects';
import { SocialLinks } from '@/constants/social-links'
import { ArrowRightCircle, Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const HomeSection = () => {
    return (
        <section id="home" className="grid md:grid-cols-12 gap-6 items-center">
            {/* Social Links */}
            <ul className='flex items-center md:flex-col size-fit mx-auto py-2
            md:py-8 px-8 md:px-2  gap-4 border rounded-3xl'>
                {SocialLinks.map((link, index) => {
                    const { href, icon: Icon } = link;
                    return (
                        <li key={index}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Icon className='size-6' />
                            </a>
                        </li>
                    );
                }
                )}
            </ul>
            {/* Presentation */}
            <div className="flex md:col-span-6 flex-col gap-y-4 items-center justify-between md:items-start  ">
                <h2 className=' text-3xl md:text-5xl text-foreground  font-bold' >
                    Hi, I'm Boubaker Boudina
                </h2>
                <h5 className='text-xl md:text-2xl font-semibold'>
                    Full Stack Developer
                </h5>
                <p className='leading-7 md:*:text-lg  md:text-lg md:max-w-[85%] text-center md:text-start'>
                    I am a passionate developer with experience in building web applications using modern technologies.
                </p>
                <div className='flex items-center gap-x-4 py-4
                '>
                    <a href='#projects' className={buttonVariants({ size: 'lg' })}>
                        <span>my projects</span>
                        <ArrowRightCircle className='size-4' />

                    </a>
                    <a
                        className={buttonVariants({ variant: 'outline', size: 'lg' })}
                        href='/public/Boubaker_CV.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        download='Boubaker_Boudina_CV.pdf'

                    >

                        <span>Download CV</span>
                        <Download className='size-4' />

                    </a>



                </div>
            </div>
            <div className='md:col-span-4 grid place-content-center mt-10 md:mt-10'>
                <div className='relative flex items-center justify-center size-96 md:size-96'>
                    <Effect className='size-full' />
                    <Effect variant="square" size="sm" className='top-[8%] left-[15%] rotate-12'
                    />
                    <Effect variant="square" size="sm" className='top-[50%] right-[-3%] -rotate-25'
                    />
                    <Effect variant="square" size="sm" className='bottom-[14%] left-[8%] -rotate-6'
                    />
                    <Image
                        className='object-fill size[80%] border-2 rounded-full shadow-lg ring-4 ring-primary   ring-offset-4'
                        src="/boubaker.png"
                        alt="profile"
                        width={350}
                        height={100}



                    />

                </div>
            </div>


        </section>
    )
}

export default HomeSection