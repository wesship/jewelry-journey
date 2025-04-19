
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WebhookActivityChartProps {
  webhookId: string;
  days?: number;
}

export function WebhookActivityChart({ webhookId, days = 7 }: WebhookActivityChartProps) {
  const { data: activityData, isLoading } = useQuery({
    queryKey: ['webhook-activity', webhookId, days],
    queryFn: async () => {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      
      const { data, error } = await supabase
        .from('webhook_logs')
        .select('created_at, status')
        .eq('webhook_id', webhookId)
        .gte('created_at', startDate.toISOString())
        .order('created_at', { ascending: true });

      if (error) throw error;

      // Process data for chart
      const dailyStats = data.reduce((acc: any, log) => {
        const date = new Date(log.created_at!).toLocaleDateString();
        if (!acc[date]) {
          acc[date] = { date, success: 0, failed: 0 };
        }
        if (log.status.startsWith('2')) {
          acc[date].success++;
        } else {
          acc[date].failed++;
        }
        return acc;
      }, {});

      return Object.values(dailyStats);
    }
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Activity Loading...</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Webhook Activity (Last {days} Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="success" fill="#16a34a" name="Successful" />
              <Bar dataKey="failed" fill="#dc2626" name="Failed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
