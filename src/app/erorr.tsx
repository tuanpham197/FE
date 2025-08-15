"use client";

import { Button } from "@/components/ui";
import FuzzyText from "@/components/ui/FuzzyText";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function ErrorPage() {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-[var(--background)]">
      <div className="flex flex-col items-center justify-center text-center">
        <FuzzyText
          fontSize={50}
          baseIntensity={0.2}
          hoverIntensity={2}
          enableHover={false}
        >
          403 | Forbidden
        </FuzzyText>

        <RandomizedTextEffect
          className="mt-4 text-xl text-[var(--paragraph)]"
          text={"You don’t have permission to access this page."}
        />

        <div className="mt-8 w-max">
          <Link href="/">
            <Button>
              <IoArrowBack />
              <span>Back To HomePage</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
