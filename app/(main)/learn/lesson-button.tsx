"use client";

import React from "react";
import Link from "next/link";
import { Check, Crown, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CircularProgressbar } from "@/components/CircularProgressbar";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
}: Props) => {
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;
  const Icon = isCompleted ? Check : isLast ? Crown : Star;
  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <div className="flex items-center justify-center w-[102px] h-[102px]">
      <Link
        href={href}
        aria-disabled={locked}
        style={{ pointerEvents: locked ? "none" : "auto" }}
      >
        <div className="relative">
          {current ? (
            <div className="h-[102px] w-[102px] relative flex justify-center items-center">
              <div className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
                Start{" "}
                <div className="absolute left-1/2 -bottom-2 w-o h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
              </div>
              <div>
                <CircularProgressbar
                  value={Number.isNaN(percentage) ? 0 : percentage}
                  strokeWidth={10}
                  sqSize={106}
                />
              </div>
              <div className="absolute">
                <Button
                  size="rounded"
                  variant={locked ? "locked" : "secondary"}
                  className="h-[70px] w-[70px] border-b-8"
                >
                  <Icon
                    className={cn(
                      locked
                        ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                        : "fill-primary-foreground text-primary-foreground",
                      isCompleted && "fill-none stroke-[4]",
                    )}
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Button
                size="rounded"
                variant={
                  locked ? "locked" : isCompleted ? "completed" : "secondary"
                }
                className="h-[70px] w-[70px] border-b-8"
              >
                <Icon
                  className={cn(
                    locked
                      ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",
                    isCompleted && "fill-none stroke-[4]",
                  )}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              </Button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
