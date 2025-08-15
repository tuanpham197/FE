"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  ShieldIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { SkillsList, skillIconMap } from "@/components/ui/skills";
import { cn } from "@/lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
  security: ShieldIcon,
} as const;

export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIconType;
  skills?: string[];
  isExpanded?: boolean;
  location?: string;
};

export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
};

function ExperienceItem({ experience }: { experience: ExperienceItemType }) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex items-center gap-3 ms-[-4px]">
        <div
          className="flex h-8 w-8 shrink-0 items-center  rounded-full justify-center bg-[var(--card-background)] border p-1"
          aria-hidden
        >
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
            />
          ) : (
            <div className="flex h-6 w-6 shrink-0 items-center justify-center">
              <span className="flex h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            </div>
          )}
        </div>

        <h3 className="text-lg leading-snug font-medium text-[var(--headline)]">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[var(--highlight)] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--highlight)]" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-[var(--border)]">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}

function ExperiencePositionItem({ position }: { position: ExperiencePositionItemType }) {
  const [isOpen, setIsOpen] = useState(position.isExpanded ?? false);

  useEffect(() => {
    if (position.isExpanded !== undefined) setIsOpen(position.isExpanded);
  }, [position.isExpanded]);

  const ExperienceIcon = iconMap[position.icon || "business"];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-[var(--background)]">
        <CollapsibleTrigger asChild>
          <motion.div
            className="group/experience not-prose block w-full text-left select-none"
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="relative z-10 mb-1 flex items-center gap-3 bg-[var(--background)]">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--card-background)] border text-[var(--card-paragraph)]" aria-hidden>
                <ExperienceIcon className="h-4 w-4" />
              </div>
              <h4 className="flex-1 text-base font-medium text-[var(--main)]">
                {position.title}
              </h4>
              <div className="shrink-0 text-[var(--secondary)] [&_svg]:h-4 [&_svg]:w-4" aria-hidden>
                {isOpen ? <ChevronsDownUpIcon /> : <ChevronsUpDownIcon />}
              </div>
            </div>
            <div className="flex items-center gap-2 pl-9 text-sm text-[var(--secondary)]">
              {position.employmentType && (
                <>
                  <dl>
                    <dt className="sr-only">Employment Type</dt>
                    <dd>{position.employmentType}</dd>
                  </dl>
                  <Separator className="data-[orientation=vertical]:h-4" orientation="vertical" style={{ borderColor: "var(--border)" }} />
                </>
              )}
              <dl>
                <dt className="sr-only">Employment Period</dt>
                <dd>{position.employmentPeriod}</dd>
              </dl>
            </div>
          </motion.div>
        </CollapsibleTrigger>
        <AnimatePresence initial={false}>
          <motion.div
            key={isOpen ? "open" : "closed"}
            initial={{ opacity: 0, height: 0 }}
            animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            {isOpen && (
              <CollapsibleContent className="overflow-hidden">
                {position.description && (
                  <DescriptionList description={position.description} />
                )}
                <SkillsSection skills={position.skills} />
              </CollapsibleContent>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Collapsible>
  );
}

function DescriptionList({ description }: { description: string }) {
  return (
    <div className="pt-2 pl-9 max-md:pl-2">
      <ul className="mb-4 list-disc ml-6 space-y-2">
        {description.split("\n\n").map((desc, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-base leading-5">-</span>
            <span>{desc.replace(/^•\s*/, "")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillsSection({ skills }: { skills?: string[] }) {
  return (
    <div className="pl-9 max-md:pl-2">
      <ul className="mb-4 list-disc ml-6 space-y-2">
        <li className="flex items-center gap-2 ">
          <SkillsList skills={Array.isArray(skills) ? skills : []} iconMap={skillIconMap} />
        </li>
      </ul>
    </div>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none font-mono text-[var(--card-paragraph)] prose-zinc dark:prose-invert",
        "prose-a:font-medium prose-a:break-words prose-a:text-[var(--card-paragraph)] prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-[var(--card-background-effect)] prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className
      )}
      {...props}
    />
  );
}

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: ExperienceItemType[];
}) {
  return (
    <div className={cn(" px-4", className)}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
