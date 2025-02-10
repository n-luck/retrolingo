import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarItem } from "../SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/" className="mb-4">
        <div className="pt-8 pl-4 flex items-center ga-x-3">
          <Image src="/owl.svg" height="40" width="40" alt="Owl" />{" "}
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide ml-1">
            Retrolingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn" />
        <SidebarItem
          label="Leaderboard"
          iconSrc="/leaderboard.svg"
          href="/leaderboard"
        />
        <SidebarItem label="Quests" iconSrc="/quests.svg" href="/quests" />
        <SidebarItem label="Shop" iconSrc="/shop.svg" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
