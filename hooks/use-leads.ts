"use client";

import { useState, useMemo } from 'react';
import { Lead } from '@/lib/types/lead';

const initialLeads: Lead[] = [
  {
    id: "1",
    name: "Jane Reyes",
    title: "COO",
    company: "Northwind Traders",
    description: "Interested in upgrading espresso machines for her in-store coffee shops.",
    intent: "High buying intent",
    value: "$45,000",
    status: "in-progress",
    createdAt: "2024-03-20",
    decisionMaker: true,
    nextMeeting: "2024-04-01",
    lastContact: "2024-03-15",
    notes: "Prefers premium Italian machines. Budget approved."
  },
  {
    id: "2",
    name: "Allan Munger",
    title: "Head of Real Estate",
    company: "Contoso Coffee",
    description: "Looking to upgrade service contract for multiple locations.",
    intent: "Meeting scheduled",
    value: "$75,000",
    status: "new",
    createdAt: "2024-03-18",
    decisionMaker: true,
    nextMeeting: "2024-03-30",
    lastContact: "2024-03-25",
    notes: "Interested in comprehensive maintenance package."
  },
  {
    id: "3",
    name: "Sarah Chen",
    title: "Procurement Manager",
    company: "Global Cafe Chain",
    description: "Expansion project requiring new equipment setup.",
    intent: "Evaluating options",
    value: "$120,000",
    status: "in-progress",
    createdAt: "2024-03-15",
    decisionMaker: false,
    nextMeeting: "2024-04-05",
    lastContact: "2024-03-20",
    notes: "Needs approval from regional director."
  }
];

export function useLeads() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const filteredLeads = useMemo(() => {
    return initialLeads.filter(lead => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  return {
    leads: filteredLeads,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    viewMode,
    setViewMode
  };
}