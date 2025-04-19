
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface WebhookLogViewerProps {
  webhookId: string
}

export function WebhookLogViewer({ webhookId }: WebhookLogViewerProps) {
  const { data: logs, isLoading } = useQuery({
    queryKey: ['webhook-logs', webhookId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('webhook_logs')
        .select('*')
        .eq('webhook_id', webhookId)
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) throw error
      return data
    },
  })

  if (isLoading) return <div>Loading logs...</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Webhook Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Request</TableHead>
              <TableHead>Response</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs?.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  {new Date(log.created_at || '').toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant={log.status === '200' ? 'default' : 'destructive'}>
                    {log.status}
                  </Badge>
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {JSON.stringify(log.request_data)}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {JSON.stringify(log.response_data)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
