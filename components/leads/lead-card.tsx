"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface LeadCardProps {
  name: string;
  title: string;
  company: string;
  description: string;
  intent: string;
  onClick: () => void;
}

export function LeadCard({ name, title, company, description, intent, onClick }: LeadCardProps) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <div className="font-semibold text-xs">{name.split(' ').map(n => n[0]).join('')}</div>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{title} • {company}</p>
            </div>
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-sm">{description}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {intent}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}