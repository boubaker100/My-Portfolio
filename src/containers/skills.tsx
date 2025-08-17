import SectionTittle from "@/components/section-tittle";
import SkillsContainer from "@/components/skills/skills-container";
import { Effect } from "@/components/ui/effects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabItems } from "@/constants/tap-items";
import { getSkills } from "@/lib/skils";
import React from "react";

const SkillsSection = async () => {
  const frontendSkills = await getSkills("frontend");
  const backendSkills = await getSkills("backend");
  const tools = await getSkills("tools");

  return (
    <section id="skills" className="w-full relative space-y-6">
      <Effect className="-right-20 bottom-8 md:-right-36 md:bottom-2" />
      <SectionTittle title="skills" description="my technical proficiency" />
      <Tabs defaultValue={TabItems[0].value}>
        <div className="flex items-center flex-col gap-4 mx-5 md:mx-50 ">
          {/* tabs list */}
          <TabsList className="grid grid-cols-3 gap-2 w-full h-fit">
            {TabItems.map((item) => {
              const { value, label, icon: Icon } = item;
              return (
                <TabsTrigger key={value} value={value} className="w-full gap-2">
                  <Icon className="size-4" />
                  <span className="capitalize">{label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="col-span-2 w- bg-background/50 w-full">
            <TabsContent value="frontend">
              <SkillsContainer data={frontendSkills} label="front end" />
            </TabsContent>
            <TabsContent value="backend">
              <SkillsContainer data={backendSkills} label="back end" />
            </TabsContent>
            <TabsContent value="tools">
              <SkillsContainer data={tools} label="tools" />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;