
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings } from 'lucide-react';
import { toast } from 'sonner';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { ARSettings } from './ARSettings';
import { ARAnalytics } from './ARAnalytics';
import { ARProductGrid } from './ARProductGrid';

export function ARTryOn() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [arSettings, setArSettings] = useState({
    modelQuality: 'high',
    enableRingFitting: true,
    enableEarringTryOn: true,
    enableNecklaceTryOn: false,
    customModelUrl: '',
  });

  const toggleARFeature = () => {
    setIsEnabled(!isEnabled);
    toast.success(`AR Try-On ${!isEnabled ? 'enabled' : 'disabled'} successfully`);
  };

  const handleSaveSettings = () => {
    toast.success('AR settings updated successfully');
    setShowSettings(false);
  };

  const handleTryOn = (product: any) => {
    toast.success(`Launching AR try-on for ${product.name}`);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Virtual Try-On</CardTitle>
            <CardDescription>
              Allow customers to virtually try on your jewelry products using AR
            </CardDescription>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="ar-enabled"
                checked={isEnabled}
                onCheckedChange={toggleARFeature}
              />
              <Label htmlFor="ar-enabled">Enabled</Label>
            </div>
            
            <Sheet open={showSettings} onOpenChange={setShowSettings}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>AR Try-On Settings</SheetTitle>
                  <SheetDescription>
                    Configure your virtual try-on experience
                  </SheetDescription>
                </SheetHeader>
                <ARSettings 
                  settings={arSettings}
                  onSettingsChange={setArSettings}
                  onClose={() => setShowSettings(false)}
                  onSave={handleSaveSettings}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="products">
          <TabsList>
            <TabsTrigger value="products">AR Products</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="space-y-4 pt-4">
            <ARProductGrid onTryOn={handleTryOn} />
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4 pt-4">
            <ARAnalytics />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground border-t pt-6">
        <p>Powered by WebXR technology. <a href="#" className="text-primary hover:underline">Learn more about our AR capabilities</a></p>
      </CardFooter>
    </Card>
  );
}
