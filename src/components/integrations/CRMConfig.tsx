
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { CRMService } from "@/services/crmService";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  webhookUrl: z.string().url({ message: "Please enter a valid URL" }),
  apiKey: z.string().min(1, { message: "API key is required" }),
  enableContacts: z.boolean().default(true),
  enableCampaigns: z.boolean().default(true),
  enableTasks: z.boolean().default(false),
});

export function CRMConfig() {
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<"connected" | "disconnected" | "checking">("checking");
  const [selectedTab, setSelectedTab] = useState("gohighlevel");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      webhookUrl: "",
      apiKey: "",
      enableContacts: true,
      enableCampaigns: true,
      enableTasks: false,
    },
  });

  useEffect(() => {
    // Load saved configuration if any
    const savedUrl = localStorage.getItem('crm_webhook_url');
    const savedApiKey = localStorage.getItem('crm_api_key');
    
    if (savedUrl) {
      form.setValue('webhookUrl', savedUrl);
    }
    
    if (savedApiKey) {
      form.setValue('apiKey', savedApiKey);
    }
    
    // Check connection status
    if (savedUrl && savedApiKey) {
      checkConnection(savedUrl, savedApiKey);
    } else {
      setConnectionStatus("disconnected");
    }
  }, []);

  const checkConnection = async (url: string, apiKey: string) => {
    setConnectionStatus("checking");
    try {
      // Simulate a connection check
      setTimeout(() => {
        if (url && apiKey) {
          setConnectionStatus("connected");
        } else {
          setConnectionStatus("disconnected");
        }
      }, 1000);
    } catch (error) {
      setConnectionStatus("disconnected");
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Save to local storage and service
      localStorage.setItem('crm_webhook_url', values.webhookUrl);
      localStorage.setItem('crm_api_key', values.apiKey);
      
      CRMService.getInstance().setWebhookUrl(values.webhookUrl);
      
      // Update status
      await checkConnection(values.webhookUrl, values.apiKey);
      
      toast.success("CRM integration configured successfully");
    } catch (error) {
      toast.error("Failed to configure CRM integration");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    localStorage.removeItem('crm_webhook_url');
    localStorage.removeItem('crm_api_key');
    form.reset({
      webhookUrl: "",
      apiKey: "",
      enableContacts: true,
      enableCampaigns: true,
      enableTasks: false,
    });
    setConnectionStatus("disconnected");
    toast.success("CRM integration disconnected");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>CRM Integration</CardTitle>
            <CardDescription>
              Connect to your CRM to sync contacts, campaigns, and more
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            {connectionStatus === "connected" && (
              <div className="flex items-center text-green-500">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span className="text-sm">Connected</span>
              </div>
            )}
            {connectionStatus === "disconnected" && (
              <div className="flex items-center text-gray-500">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span className="text-sm">Disconnected</span>
              </div>
            )}
            {connectionStatus === "checking" && (
              <div className="flex items-center text-blue-500">
                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                <span className="text-sm">Checking...</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="gohighlevel">GoHighLevel</TabsTrigger>
            <TabsTrigger value="hubspot">HubSpot</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gohighlevel">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="webhookUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Webhook URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://app.gohighlevel.com/webhook/..."
                          {...field}
                          disabled={connectionStatus === "checking" || isLoading}
                        />
                      </FormControl>
                      <FormDescription>
                        Find this in GoHighLevel under Settings → Integrations → Webhooks
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="apiKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>API Key</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Your GoHighLevel API key"
                          {...field}
                          disabled={connectionStatus === "checking" || isLoading}
                        />
                      </FormControl>
                      <FormDescription>
                        Generate an API key in Settings → API Keys
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Enable Features</h3>
                  
                  <FormField
                    control={form.control}
                    name="enableContacts"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Contact Sync</FormLabel>
                          <FormDescription>
                            Sync contacts between your CRM and application
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="enableCampaigns"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Campaign Automation</FormLabel>
                          <FormDescription>
                            Trigger marketing campaigns based on app events
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="enableTasks"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Task Management</FormLabel>
                          <FormDescription>
                            Create and assign tasks in your CRM
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-end gap-2">
                  {connectionStatus === "connected" && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleDisconnect}
                      disabled={isLoading}
                    >
                      Disconnect
                    </Button>
                  )}
                  <Button type="submit" disabled={isLoading || connectionStatus === "checking"}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {connectionStatus === "connected" ? "Updating..." : "Connecting..."}
                      </>
                    ) : connectionStatus === "connected" ? (
                      "Update Configuration"
                    ) : (
                      "Connect"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="hubspot">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                HubSpot integration is coming soon. Please check back later.
              </p>
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <h3 className="text-lg font-medium">HubSpot Integration</h3>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground border-t pt-6">
        <p>Need help connecting your CRM? <a href="#" className="text-primary hover:underline">View our integration guide</a></p>
      </CardFooter>
    </Card>
  );
}
