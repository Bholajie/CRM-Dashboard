"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { LeadCard } from "@/components/leads/lead-card";
import { LeadDetailsDialog } from "@/components/leads/lead-details-dialog";
import { GoalProgress } from "@/components/dashboard/goal-progress";

const mockLeads = [
  {
    name: "Jane Reyes",
    title: "COO",
    company: "Northwind Traders",
    description: "Interested in upgrading espresso machines for her in-store coffee shops.",
    intent: "High buying intent",
  },
  {
    name: "Allan Munger",
    title: "Head of Real Estate Development",
    company: "Contoso Coffee",
    description: "Prepare for high-buying intent meeting regarding upgrading service contract.",
    intent: "Meeting scheduled",
  },
];

export default function Home() {
  const [selectedLead, setSelectedLead] = useState<typeof mockLeads[0] | null>(null);

  return (
    <PageContainer>
      <div className="grid gap-6">
        <GoalProgress 
          name="Mona"
          progress={68}
          target="$45,000"
          message="Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus."
        />
        
        <div className="grid gap-4 md:grid-cols-2">
          {mockLeads.map((lead) => (
            <LeadCard
              key={lead.name}
              {...lead}
              onClick={() => setSelectedLead(lead)}
            />
          ))}
        </div>
      </div>

      <LeadDetailsDialog 
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
    </PageContainer>
  );
}