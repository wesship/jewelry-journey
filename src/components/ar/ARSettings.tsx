
import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ARSettingsProps {
  settings: {
    modelQuality: string;
    enableRingFitting: boolean;
    enableEarringTryOn: boolean;
    enableNecklaceTryOn: boolean;
    customModelUrl: string;
  };
  onSettingsChange: (settings: any) => void;
  onClose: () => void;
  onSave: () => void;
}

export function ARSettings({ settings, onSettingsChange, onClose, onSave }: ARSettingsProps) {
  return (
    <div className="py-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="model-quality">Model Quality</Label>
        <select 
          id="model-quality"
          className="w-full p-2 border rounded"
          value={settings.modelQuality}
          onChange={(e) => onSettingsChange({...settings, modelQuality: e.target.value})}
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
            checked={settings.enableRingFitting}
            onCheckedChange={(checked) => 
              onSettingsChange({...settings, enableRingFitting: checked})}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="earring-tryon">Earring Try-On</Label>
          <Switch
            id="earring-tryon"
            checked={settings.enableEarringTryOn}
            onCheckedChange={(checked) => 
              onSettingsChange({...settings, enableEarringTryOn: checked})}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="necklace-tryon">Necklace Try-On</Label>
          <Switch
            id="necklace-tryon"
            checked={settings.enableNecklaceTryOn}
            onCheckedChange={(checked) => 
              onSettingsChange({...settings, enableNecklaceTryOn: checked})}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="custom-model">Custom Model URL (Optional)</Label>
        <Input
          id="custom-model"
          placeholder="https://example.com/model.glb"
          value={settings.customModelUrl}
          onChange={(e) => 
            onSettingsChange({...settings, customModelUrl: e.target.value})}
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}
