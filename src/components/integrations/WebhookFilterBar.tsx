
import React from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar } from "lucide-react"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface WebhookFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeFilterChange: (value: string) => void;
  showInactive: boolean;
  onShowInactiveChange: (value: boolean) => void;
  dateRange: { from: Date | undefined; to: Date | undefined };
  onDateRangeChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
}

export function WebhookFilterBar({ 
  search, 
  onSearchChange, 
  typeFilter, 
  onTypeFilterChange,
  showInactive,
  onShowInactiveChange,
  dateRange,
  onDateRangeChange
}: WebhookFilterBarProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search webhooks by name or URL..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={typeFilter} onValueChange={onTypeFilterChange}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All types</SelectItem>
            <SelectItem value="slack">Slack</SelectItem>
            <SelectItem value="discord">Discord</SelectItem>
            <SelectItem value="zapier">Zapier</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            id="show-inactive"
            checked={showInactive}
            onCheckedChange={onShowInactiveChange}
          />
          <Label htmlFor="show-inactive">Show inactive webhooks</Label>
        </div>
        
        <DatePickerWithRange
          date={dateRange}
          onDateChange={onDateRangeChange}
        />
      </div>
    </div>
  )
}
