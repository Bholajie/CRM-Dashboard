"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";

export default function RecentPage() {
  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Recent Activities</h1>
        <p className="text-muted-foreground">View your latest interactions and updates</p>
      </div>
      <div className="grid gap-6">
        <Card className="p-6">
          <p>Recent activities will be displayed here</p>
        </Card>
      </div>
    </PageContainer>
  );
}