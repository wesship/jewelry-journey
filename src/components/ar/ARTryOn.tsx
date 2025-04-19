
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Loader2, CheckCircle, Settings, Camera } from 'lucide-react';
import { toast } from 'sonner';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

// Mock data for AR products instead of trying to query from Supabase
const mockARProducts = [
  { id: 1, name: 'Diamond Engagement Ring', type: 'ring', model_url: '/models/ring-1.glb' },
  { id: 2, name: 'Sapphire Earrings', type: 'earring', model_url: '/models/earring-1.glb' },
  { id: 3, name: 'Pearl Necklace', type: 'necklace', model_url: '/models/necklace-1.glb' },
];

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
  const [isLoading, setIsLoading] = useState(false);
  const [arProducts, setArProducts] = useState(mockARProducts);

  const toggleARFeature = () => {
    setIsEnabled(!isEnabled);
    toast.success(`AR Try-On ${!isEnabled ? 'enabled' : 'disabled'} successfully`);
  };

  const handleSaveSettings = () => {
    toast.success('AR settings updated successfully');
    setShowSettings(false);
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
                <div className="py-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="model-quality">Model Quality</Label>
                    <select 
                      id="model-quality"
                      className="w-full p-2 border rounded"
                      value={arSettings.modelQuality}
                      onChange={(e) => setArSettings({...arSettings, modelQuality: e.target.value})}
                    >
                      <option value="low">Low (faster loading)</option>
                      <option value="medium">Medium</option>
                      <option value="high">High (detailed)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Enabled Features</h4>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="ring-fitting">Ring Fitting</Label>
                      <Switch
                        id="ring-fitting"
                        checked={arSettings.enableRingFitting}
                        onCheckedChange={(checked) => 
                          setArSettings({...arSettings, enableRingFitting: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="earring-tryon">Earring Try-On</Label>
                      <Switch
                        id="earring-tryon"
                        checked={arSettings.enableEarringTryOn}
                        onCheckedChange={(checked) => 
                          setArSettings({...arSettings, enableEarringTryOn: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="necklace-tryon">Necklace Try-On</Label>
                      <Switch
                        id="necklace-tryon"
                        checked={arSettings.enableNecklaceTryOn}
                        onCheckedChange={(checked) => 
                          setArSettings({...arSettings, enableNecklaceTryOn: checked})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-model">Custom Model URL (Optional)</Label>
                    <Input
                      id="custom-model"
                      placeholder="https://example.com/model.glb"
                      value={arSettings.customModelUrl}
                      onChange={(e) => 
                        setArSettings({...arSettings, customModelUrl: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setShowSettings(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveSettings}>
                    Save Changes
                  </Button>
                </div>
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
            {isLoading ? (
              <div className="flex justify-center items-center p-8">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {arProducts?.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-square bg-gray-100 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="h-12 w-12 text-gray-400" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground capitalize">{product.type}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button variant="outline" size="sm">Preview</Button>
                        <Button size="sm">Try On</Button>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  <Card className="border-dashed border-2 overflow-hidden">
                    <div className="aspect-square flex items-center justify-center">
                      <div className="text-center p-4">
                        <Button variant="outline" className="mb-4">
                          Add New AR Model
                        </Button>
                        <p className="text-sm text-muted-foreground">Upload new 3D models for AR try-on</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            )}
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Try-On Usage</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold">367</p>
                      <p className="text-sm text-muted-foreground">Total Try-Ons</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold">42%</p>
                      <p className="text-sm text-muted-foreground">Completion Rate</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold">28%</p>
                      <p className="text-sm text-muted-foreground">Purchase Rate</p>
                    </div>
                  </div>
                  
                  <div className="h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Usage Chart Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground border-t pt-6">
        <p>Powered by WebXR technology. <a href="#" className="text-primary hover:underline">Learn more about our AR capabilities</a></p>
      </CardFooter>
    </Card>
  );
}
