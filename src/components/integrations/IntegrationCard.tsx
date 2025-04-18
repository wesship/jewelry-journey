
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { supabase } from "@/integrations/supabase/client"

interface IntegrationCardProps {
  name: string
  baseUrl: string
  isActive: boolean
  apiKey?: string
  onUpdate: () => void
}

export function IntegrationCard({ name, baseUrl, isActive, apiKey, onUpdate }: IntegrationCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newApiKey, setNewApiKey] = useState(apiKey || '')
  const [newIsActive, setNewIsActive] = useState(isActive)

  const handleSave = async () => {
    await supabase
      .from('integrations')
      .update({
        api_key: newApiKey,
        is_active: newIsActive,
      })
      .eq('name', name)

    setIsEditing(false)
    onUpdate()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Base URL</Label>
          <Input value={baseUrl} disabled />
        </div>
        <div className="space-y-2">
          <Label>API Key</Label>
          <Input
            type="password"
            value={newApiKey}
            disabled={!isEditing}
            onChange={(e) => setNewApiKey(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id={`${name}-active`}
            checked={newIsActive}
            disabled={!isEditing}
            onCheckedChange={setNewIsActive}
          />
          <Label htmlFor={`${name}-active`}>Active</Label>
        </div>
      </CardContent>
      <CardFooter className="justify-end space-x-2">
        {isEditing ? (
          <>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        )}
      </CardFooter>
    </Card>
  )
}
