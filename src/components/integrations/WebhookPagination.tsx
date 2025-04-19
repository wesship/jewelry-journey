
import React from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface WebhookPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
}

export function WebhookPagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  pageSize,
  onPageSizeChange
}: WebhookPaginationProps) {
  return (
    <div className="flex items-center justify-between">
      <Select
        value={pageSize.toString()}
        onValueChange={(value) => onPageSizeChange(Number(value))}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">5 / page</SelectItem>
          <SelectItem value="10">10 / page</SelectItem>
          <SelectItem value="20">20 / page</SelectItem>
        </SelectContent>
      </Select>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <PaginationPrevious />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <span className="mx-4">
              Page {currentPage} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <PaginationNext />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
