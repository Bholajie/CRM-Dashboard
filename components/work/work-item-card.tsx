"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2 } from "lucide-react";
import type { WorkItem } from "@/lib/types/lead";

const priorityColors = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800"
};

const statusColors = {
  pending: "bg-gray-100 text-gray-800",
  "in-progress": "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800"
};

export function WorkItemCard({ title, description, dueDate, status, priority }: WorkItem) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Due {new Date(dueDate).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="secondary" className={priorityColors[priority]}>
            {priority}
          </Badge>
          <Badge variant="secondary" className={statusColors[status]}>
            {status}
          </Badge>
        </div>
      </div>
    </Card>
  );
}