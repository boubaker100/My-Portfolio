import ProjectsItem from '@/components/projects/projects-item';
import SectionTittle from '@/components/section-tittle'
import { Effect } from '@/components/ui/effects'
import { getProjects } from '@/lib/projects';
import React from 'react'

const ProjectsSection = async () => {
  const projects = await getProjects();

  return (


    <section id="projects" className='relative space-y-6 mb-10'>
      <Effect className='top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%]' />
      <SectionTittle description="some things i've built" title="Projects"/>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) =>(
           <ProjectsItem key={project._id} project={project} />
        ))}

      </div>
    </section>
  )
}

export default ProjectsSection
// This file defines a React component named `projectsSection` that returns a simple div containing the