
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { supabase } from "@/integrations/supabase/client"
import { toast } from "sonner"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

const INTEGRATION_TYPES = [
  { id: "payment", name: "Payment Processing" },
  { id: "shipping", name: "Shipping Provider" },
  { id: "ai", name: "AI Services" },
  { id: "marketing", name: "Marketing Tools" },
  { id: "analytics", name: "Analytics Platform" },
]

export function AddIntegrationDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [integrationData, setIntegrationData] = useState({
    name: "",
    type: "",
    base_url: "",
    api_key: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setIntegrationData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectType = (value: string) => {
    setIntegrationData(prev => ({ ...prev, type: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!integrationData.name || !integrationData.type || !integrationData.base_url) {
      toast.error("Please fill in all required fields")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const { error } = await supabase
        .from('integrations')
        .insert([{
          name: integrationData.name,
          base_url: integrationData.base_url,
          api_key: integrationData.api_key,
          settings: { type: integrationData.type },
          is_active: true
        }])
      
      if (error) throw error
      
      toast.success("Integration added successfully!")
      onOpenChange(false)
      setIntegrationData({
        name: "",
        type: "",
        base_url: "",
        api_key: "",
      })
    } catch (error) {
      console.error("Error adding integration:", error)
      toast.error("Failed to add integration")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Integration</DialogTitle>
            <DialogDescription>
              Connect a new external service to your jewelry business.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={integrationData.name}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Stripe Payments"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select 
                value={integrationData.type} 
                onValueChange={handleSelectType}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select integration type" />
                </SelectTrigger>
                <SelectContent>
                  {INTEGRATION_TYPES.map(type => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="base_url" className="text-right">
                Base URL
              </Label>
              <Input
                id="base_url"
                name="base_url"
                value={integrationData.base_url}
                onChange={handleChange}
                className="col-span-3"
                placeholder="https://api.example.com"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="api_key" className="text-right">
                API Key
              </Label>
              <Input
                id="api_key"
                name="api_key"
                type="password"
                value={integrationData.api_key}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Enter your API key"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Integration"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
