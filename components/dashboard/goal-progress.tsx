"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GoalProgressProps {
  name: string;
  progress: number;
  target: string;
  message: string;
}

export function GoalProgress({ name, progress, target, message }: GoalProgressProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Hi {name},</h2>
          <p className="text-muted-foreground">{progress}% of goal achieved</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Monthly Goal</p>
          <p className="text-2xl font-semibold">{target}</p>
        </div>
      </div>
      <Progress value={progress} className="mt-4" />
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
    </Card>
  );
}