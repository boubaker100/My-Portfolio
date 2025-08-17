import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import HomeSection from "@/containers/home";
import ProjectsSection from "@/containers/projects";
import SkillsSection from "@/containers/skills";

export default function Home() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 *:py-12 mb-12">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )


}
