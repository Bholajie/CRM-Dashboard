"use client";

import { Sidebar } from "@/components/sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart } from "lucide-react";

export default function AgentSkill() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Agent Performance Analytics</h1>
            <p className="text-muted-foreground">Track and analyze agent performance metrics</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="skills">Skills Matrix</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-4">
                  <h3 className="font-medium text-muted-foreground">Average Response Time</h3>
                  <p className="text-2xl font-bold">2.5 min</p>
                  <Progress value={75} className="mt-2" />
                </Card>
                <Card className="p-4">
                  <h3 className="font-medium text-muted-foreground">Customer Satisfaction</h3>
                  <p className="text-2xl font-bold">92%</p>
                  <Progress value={92} className="mt-2" />
                </Card>
                <Card className="p-4">
                  <h3 className="font-medium text-muted-foreground">Resolution Rate</h3>
                  <p className="text-2xl font-bold">88%</p>
                  <Progress value={88} className="mt-2" />
                </Card>
                <Card className="p-4">
                  <h3 className="font-medium text-muted-foreground">Active Tickets</h3>
                  <p className="text-2xl font-bold">45</p>
                  <Progress value={45} className="mt-2" />
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Performance Trend</h3>
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  {/* Chart component will be added here */}
                </Card>
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Skill Distribution</h3>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  {/* Chart component will be added here */}
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="space-y-4">
              {/* Skills matrix content */}
            </TabsContent>

            <TabsContent value="trends" className="space-y-4">
              {/* Trends content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}