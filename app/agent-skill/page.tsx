"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart } from "lucide-react";

export default function AgentSkill() {
  return (
    <PageContainer>
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
              <div className="mt-4 h-[200px] w-full bg-muted/10 rounded-lg"></div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Skill Distribution</h3>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mt-4 h-[200px] w-full bg-muted/10 rounded-lg"></div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Skills Matrix</h3>
            <div className="space-y-4">
              {["Communication", "Problem Solving", "Technical Knowledge", "Customer Service"].map((skill) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill}</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Performance Trends</h3>
            <div className="h-[300px] w-full bg-muted/10 rounded-lg"></div>
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}