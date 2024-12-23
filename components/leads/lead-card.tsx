"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calendar, DollarSign, Users } from "lucide-react";
import type { Lead } from "@/lib/types/lead";

interface LeadCardProps extends Lead {
  onClick: () => void;
  viewMode?: 'list' | 'grid'; // Made viewMode optional
}

export function LeadCard({ 
  name, 
  title, 
  company, 
  description, 
  intent,
  value,
  status,
  decisionMaker,
  nextMeeting,
  viewMode = 'list', // Added default value
  onClick 
}: LeadCardProps) {
  const statusColors = {
    new: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "in-progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    closed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
  };

  return (
    <Card 
      className={`p-4 hover:shadow-lg transition-all cursor-pointer ${
        viewMode === 'grid' ? 'h-full' : ''
      }`}
      onClick={onClick}
    >
      <div className={`flex ${viewMode === 'grid' ? 'flex-col' : 'items-start'} gap-4`}>
        <Avatar className="h-12 w-12">
          <div className="font-semibold text-sm">{name.split(' ').map(n => n[0]).join('')}</div>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{title} • {company}</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className={statusColors[status]}>
                    {status}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Current status</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <p className="text-sm">{description}</p>
          
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{value}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Deal value</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {nextMeeting && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(nextMeeting).toLocaleDateString()}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Next meeting</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{decisionMaker ? 'Decision Maker' : 'Influencer'}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Contact role</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Card>
  );
}