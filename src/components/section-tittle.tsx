import { cn } from '@/lib/utils'
import { FC } from 'react'

interface SectionTittleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description: string
}

const SectionTittle: FC<SectionTittleProps> = ({ title, description, className, ...props }) => {
    return (
        <div className={cn("flex flex-col gap-y-1 md:gap-y-2 items-center capitalize ", className)}{...props} >
            <h5 className=' text-primary font-bold tracking-wide'>{title}</h5>
            <h3 className=' md:text-2xl text-xl font-semibold text-foreground '>{description}</h3>
        </div>
    )
}

export default SectionTittle