import { navLinks } from '@/constants/nav-links'
import React from 'react'

const Mobilenav = () => {
    return (
        <div className="fixed md:hidden bottom-0 left-0 w-full bg-background backdrop-blur-md z-50 py-4 flex items-center justify-center rounded-tl-lg rounded-t-lg shadow-lg border-1">
    
           <nav className="flex items-center justify-around w-full max-w-7xl px-4"> 
                {navLinks.map((link, index) => {
                      const{href,title,icon:Icon}=link;
                  return(
                    <a 
                        key={index} 
                        href={href} 
                        className="flex flex-col items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Icon className="size-6 mb-1" />
                        {title}
                    </a>
                  );
            
                })}
            </nav> 
        
       
        </div>
    )
}

export default Mobilenav