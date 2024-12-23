"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { LeadCard } from "@/components/leads/lead-card";
import { LeadDetailsDialog } from "@/components/leads/lead-details-dialog";
import { LeadFilters } from "@/components/leads/lead-filters";
import { GoalProgress } from "@/components/dashboard/goal-progress";
import { useLeads } from "@/hooks/use-leads";
import type { Lead } from "@/lib/types/lead";

export default function Home() {
  const { 
    leads, 
    searchTerm, 
    setSearchTerm, 
    statusFilter, 
    setStatusFilter,
    viewMode,
    setViewMode
  } = useLeads();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  return (
    <PageContainer>
      <div className="grid gap-6">
        <GoalProgress 
          name="Mona"
          progress={68}
          target="$45,000"
          message="Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus."
        />
        
        <LeadFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        <div className={`grid gap-4 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {leads.map((lead) => (
            <LeadCard
              key={lead.id}
              {...lead}
              viewMode={viewMode}
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