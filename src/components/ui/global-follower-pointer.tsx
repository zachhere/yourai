"use client";

import React from "react";
import { FollowerPointerCard } from "./following-pointer";

interface GlobalFollowerPointerProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
}

export function GlobalFollowerPointer({ children, title }: GlobalFollowerPointerProps) {
  return (
    <FollowerPointerCard className="block min-h-screen w-full" title={title}>
      {children}
    </FollowerPointerCard>
  );
}
