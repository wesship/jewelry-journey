
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEngagementTracker } from '@/hooks/useEngagementTracker';

// Enhanced mock analytics data
const analyticsData = {
  dailyTryOns: [
    { date: '2025-04-13', count: 42 },
    { date: '2025-04-14', count: 38 },
    { date: '2025-04-15', count: 56 },
    { date: '2025-04-16', count: 44 },
    { date: '2025-04-17', count: 51 },
    { date: '2025-04-18', count: 48 },
    { date: '2025-04-19', count: 39 },
  ],
  conversionRate: 28,
  averageSessionTime: '2:15',
  topProducts: [
    { name: 'Diamond Engagement Ring', tryOns: 156 },
    { name: 'Sapphire Earrings', tryOns: 98 },
    { name: 'Pearl Necklace', tryOns: 87 },
  ]
};

export function ARAnalytics() {
  const { viewTime, interactions } = useEngagementTracker();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Try-On Analytics</CardTitle>
        <CardDescription>Performance metrics for AR features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              title="Total Try-Ons"
              value="367"
              description="Last 30 days"
            />
            <StatCard
              title="Conversion Rate"
              value={`${analyticsData.conversionRate}%`}
              description="Try-on to purchase"
            />
            <StatCard
              title="Avg. Session"
              value={analyticsData.averageSessionTime}
              description="Minutes per try-on"
            />
            <StatCard
              title="Active Users"
              value="189"
              description="This week"
            />
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Most Popular Items</h3>
            <div className="space-y-2">
              {analyticsData.topProducts.map((product, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-secondary/10 rounded">
                  <span className="text-sm">{product.name}</span>
                  <span className="text-sm font-medium">{product.tryOns} try-ons</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatCard({ title, value, description }: { 
  title: string; 
  value: string; 
  description: string; 
}) {
  return (
    <div className="border rounded-lg p-4 text-center">
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
