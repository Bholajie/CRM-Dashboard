"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface Lead {
  name: string;
  title: string;
  company: string;
  description: string;
  intent: string;
}

interface LeadDetailsDialogProps {
  lead: Lead | null;
  onClose: () => void;
}

export function LeadDetailsDialog({ lead, onClose }: LeadDetailsDialogProps) {
  return (
    <Dialog open={!!lead} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogTitle>Lead Details</DialogTitle>
        {lead && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{lead.name}</h2>
                <p className="text-muted-foreground">{lead.title} • {lead.company}</p>
              </div>
            </div>
            <p>{lead.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {lead.intent}
              </span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}