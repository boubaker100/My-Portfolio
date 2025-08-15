import { SocialLinks } from '@/constants/social-links';
import React from 'react'
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const Footer = () => {
    return (
        <footer className='border-t pb-50 pt-4 md:pb-4'>
            <div className='container flex flex-col justify-between gap-y-4 md:flex-col items-center '>
                <p className='text-sm text-muted-foreground'>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved.
                </p>
                <p className='text-sm text-muted-foreground'>
                    Designed and Developed by Boubaker Boudina
                </p>
                <div className='flex items-center gap-x-4'>
                    {/* Render social links */}
                    {SocialLinks.map((link, index) => {
                        const { href, icon: Icon } = link;
                        return (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(buttonVariants({
                                    variant: "outline",
                                    size: "icon",

                                }), "rounded-full")}
                            >
                                <Icon className='size-6' />

                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

