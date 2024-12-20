"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { SalesChart } from "@/components/charts/sales-chart";
import { LeadsChart } from "@/components/charts/leads-chart";

export default function ReportsPage() {
  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Reports & Analytics</h1>
        <p className="text-muted-foreground">Track performance and insights</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">Total Sales</h3>
              </div>
              <p className="text-2xl font-bold">$45,231</p>
              <p className="text-sm text-green-600">+12.5% from last month</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <LineChart className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">Conversion Rate</h3>
              </div>
              <p className="text-2xl font-bold">24.8%</p>
              <p className="text-sm text-green-600">+2.3% from last month</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <PieChart className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">Active Leads</h3>
              </div>
              <p className="text-2xl font-bold">156</p>
              <p className="text-sm text-red-600">-3.2% from last month</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <Card className="p-6">
            <h3 className="font-medium mb-4">Sales Performance</h3>
            <SalesChart />
          </Card>
        </TabsContent>

        <TabsContent value="leads">
          <Card className="p-6">
            <h3 className="font-medium mb-4">Lead Analytics</h3>
            <LeadsChart />
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}