"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Mail, Phone, Users } from "lucide-react";
import type { Lead } from "@/lib/types/lead";

interface LeadDetailsDialogProps {
  lead: Lead | null;
  onClose: () => void;
}

export function LeadDetailsDialog({ lead, onClose }: LeadDetailsDialogProps) {
  if (!lead) return null;

  return (
    <Dialog open={!!lead} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Lead Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-semibold">
                {lead.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{lead.name}</h2>
              <p className="text-muted-foreground">{lead.title} • {lead.company}</p>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  {lead.status}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {lead.intent}
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  Deal Value
                </div>
                <p className="font-medium">{lead.value}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Next Meeting
                </div>
                <p className="font-medium">
                  {lead.nextMeeting ? new Date(lead.nextMeeting).toLocaleDateString() : 'Not scheduled'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  Decision Making
                </div>
                <p className="font-medium">{lead.decisionMaker ? 'Decision Maker' : 'Influencer'}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Last Contact
                </div>
                <p className="font-medium">
                  {lead.lastContact ? new Date(lead.lastContact).toLocaleDateString() : 'No contact'}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Description</h3>
              <p className="text-sm text-muted-foreground">{lead.description}</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Notes</h3>
              <p className="text-sm text-muted-foreground">{lead.notes}</p>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button>
              Schedule Meeting
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}