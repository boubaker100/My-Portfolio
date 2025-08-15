import SectionTittle from '@/components/section-tittle'
import { buttonVariants } from '@/components/ui/button'
import { Effect } from '@/components/ui/effects'
import { getStatistics } from '@/constants/statistic'
import { cn } from '@/lib/utils'
import { ArrowRightCircle } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
    const { statistics } = getStatistics();
    return (
        <section id='about' className='relative'>
            <Effect className="left-32 md:-left-44 " />
            <article className='relative max-w-[50rem] mx-auto p-6 gap-y-6 md:px-8 md:py-12 bg-background/90 backdrop-blur-md rounded-lg shadow-lg border '>
                <Effect variant={'square'} size={"default"} className='top-4 right-5 -z-10 rotate-12' />
                <SectionTittle title='about me' description='a quick introduction about me'
                    className='items-start' />
                <p className='text-lg mt-5 mb-5' >
                    Hello! I'm Boubaker Boudina, a passionate web developer with a focus on creating dynamic and responsive web applications. I have a strong foundation in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs. My goal is to deliver high-quality code and exceptional user experiences.
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-end mt-3'>
                    {statistics.map((statistic, index) => (

                        <div key={index} className='flex flex-col items-center md:items-center'>
                            <p className='text-foreground text-2xl font-bold md:text-4xl md:items-start md:justify-center flex gap-x-2'>
                                +{statistic.value}
                            </p>

                            <p className='whitespace-nowrap  text-sm md:text-lg'>{statistic.label}

                            </p>
                        </div>
                    ))}


                    <a href='#skills' className={cn(buttonVariants({
                        size: "lg",
                    }), "col-span-2 md:col-span-1 ")}>
                        <span className='text-sm md:text-base'>discover skills</span>
                        <ArrowRightCircle className='size-6 ml-2' />

                    </a>

                </div>
            </article>

        </section>
    )
}

export default AboutSection