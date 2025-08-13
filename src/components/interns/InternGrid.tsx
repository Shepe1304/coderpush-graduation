import * as React from "react";
import InternProfileCard from "./InternProfileCard";
import { InternProfile } from "@/types";

type GridProps = {
  interns: InternProfile[];
  onSelect?: (intern: InternProfile) => void;
};

export default function InternGrid({ interns, onSelect }: GridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {interns.map((intern, i) => (
        <InternProfileCard
          key={intern.name}
          intern={intern}
          index={i}
          onClick={() => onSelect?.(intern)}
        />
      ))}
    </div>
  );
}
