
import { toast } from "@/components/ui/use-toast";

interface CRMContact {
  email: string;
  name: string;
  source?: string;
  tags?: string[];
}

interface CRMCampaign {
  contactId: string;
  campaignId: string;
}

export class CRMService {
  private static instance: CRMService;
  private webhookUrl: string | null = null;

  private constructor() {}

  static getInstance(): CRMService {
    if (!CRMService.instance) {
      CRMService.instance = new CRMService();
    }
    return CRMService.instance;
  }

  setWebhookUrl(url: string) {
    this.webhookUrl = url;
    localStorage.setItem('crm_webhook_url', url);
    toast({
      title: "CRM Integration",
      description: "Webhook URL has been set successfully",
    });
  }

  async createContact(contact: CRMContact): Promise<Response> {
    if (!this.webhookUrl) {
      throw new Error("Webhook URL not configured");
    }

    return fetch(this.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        action: "createContact",
        data: contact
      }),
    });
  }

  async launchCampaign(campaign: CRMCampaign): Promise<Response> {
    if (!this.webhookUrl) {
      throw new Error("Webhook URL not configured");
    }

    return fetch(this.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", 
      body: JSON.stringify({
        action: "launchCampaign",
        data: campaign
      }),
    });
  }
}
