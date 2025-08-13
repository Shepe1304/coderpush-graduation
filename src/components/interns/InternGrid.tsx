import * as React from "react";
import InternProfileCard from "./InternProfileCard";
import InternProfileModal from "./InternProfileModal";
import { InternProfile } from "@/types";

type GridProps = {
  interns: InternProfile[];
  onSelect?: (intern: InternProfile) => void;
};

export default function InternGrid({ interns, onSelect }: GridProps) {
  const [selectedIntern, setSelectedIntern] = React.useState<InternProfile | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenProfile = (intern: InternProfile) => {
    setSelectedIntern(intern);
    setIsModalOpen(true);
    onSelect?.(intern);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIntern(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interns.map((intern, i) => (
          <InternProfileCard
            key={intern.name}
            intern={intern}
            index={i}
            onOpenProfile={() => handleOpenProfile(intern)}
          />
        ))}
      </div>

      {selectedIntern && (
        <InternProfileModal
          intern={selectedIntern}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
