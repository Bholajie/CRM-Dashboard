"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { LeadCard } from "@/components/leads/lead-card";
import { LeadDetailsDialog } from "@/components/leads/lead-details-dialog";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Lead } from "@/lib/types/lead";

const pinnedLeads: Lead[] = [
  {
    id: "1",
    name: "Jane Reyes",
    title: "COO",
    company: "Northwind Traders",
    description: "Interested in upgrading espresso machines for her in-store coffee shops.",
    intent: "High buying intent",
    status: "in-progress",
    createdAt: "2024-03-20",
    value: "$1M",
    isPinned: true
  }
];

export default function PinnedPage() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Pinned Items</h1>
        <p className="text-muted-foreground">Quick access to important items</p>
      </div>

      <Tabs defaultValue="leads" className="space-y-4">
        <TabsList>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="leads" className="space-y-4">
          {pinnedLeads.map((lead) => (
            <LeadCard
              key={lead.id}
              {...lead}
              onClick={() => setSelectedLead(lead)}
            />
          ))}
        </TabsContent>

        <TabsContent value="tasks">
          <Card className="p-6">
            <p className="text-muted-foreground">No pinned tasks</p>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="p-6">
            <p className="text-muted-foreground">No pinned reports</p>
          </Card>
        </TabsContent>
      </Tabs>

      <LeadDetailsDialog 
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
    </PageContainer>
  );
}