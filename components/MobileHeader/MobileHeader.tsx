import React from "react";
import { MobileSidebar } from "../MobileSidebar";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { UserProgress } from "../UserProgress";
import { getUserProgress, getUserSubscription } from "@/database/queries";

export const MobileHeader = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, hasUserSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  return (
    <nav className="lg:hidden px-4 h-[50px] flex items-center justify-between bg-green-100 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
      <div className="flex">
        {userProgress && userProgress?.activeCourse && (
          <UserProgress
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={!!hasUserSubscription}
          />
        )}
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </nav>
  );
};
