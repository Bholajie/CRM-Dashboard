export interface Lead {
  id: string;
  name: string;
  title: string;
  company: string;
  description: string;
  intent: string;
  value?: string;
  status: 'new' | 'in-progress' | 'closed';
  createdAt: string;
  isPinned?: boolean;
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}