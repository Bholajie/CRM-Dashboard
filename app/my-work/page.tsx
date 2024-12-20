"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { WorkItemCard } from "@/components/work/work-item-card";
import { AddTaskDialog } from "@/components/work/add-task-dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { WorkItem } from "@/lib/types/lead";

const initialWorkItems: WorkItem[] = [
  {
    id: "1",
    title: "Review draft and reply to Chris Nadio",
    description: "Cafe A100 for Woodland Bank proposal needs review",
    dueDate: "2024-03-25",
    status: "pending",
    priority: "high"
  },
  {
    id: "2",
    title: "Prepare for Fabrikam's key stakeholder meeting",
    description: "Partnership opportunity discussion",
    dueDate: "2024-03-26",
    status: "in-progress",
    priority: "medium"
  }
];

export default function MyWorkPage() {
  const [workItems, setWorkItems] = useState<WorkItem[]>(initialWorkItems);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleAddTask = (newTask: Omit<WorkItem, "id">) => {
    const task: WorkItem = {
      ...newTask,
      id: Math.random().toString(36).substr(2, 9)
    };
    setWorkItems([...workItems, task]);
  };

  return (
    <PageContainer>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">My Work</h1>
          <p className="text-muted-foreground">Track and manage your tasks</p>
        </div>
        <Button onClick={() => setIsAddTaskOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="grid gap-4">
        {workItems.map((item) => (
          <WorkItemCard key={item.id} {...item} />
        ))}
      </div>

      <AddTaskDialog
        open={isAddTaskOpen}
        onOpenChange={setIsAddTaskOpen}
        onAddTask={handleAddTask}
      />
    </PageContainer>
  );
}