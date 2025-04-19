
import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ShareProductProps {
  productName: string;
  productUrl: string;
}

export function ShareProduct({ productName, productUrl }: ShareProductProps) {
  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out ${productName}`)}&url=${encodeURIComponent(productUrl)}`,
    },
    {
      name: 'Pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(productUrl)}&description=${encodeURIComponent(productName)}`,
    },
    {
      name: 'Email',
      url: `mailto:?subject=${encodeURIComponent(`Check out ${productName}`)}&body=${encodeURIComponent(`I thought you might like ${productName}: ${productUrl}`)}`,
    },
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/5">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {shareLinks.map((platform) => (
          <DropdownMenuItem
            key={platform.name}
            onClick={() => handleShare(platform.url)}
            className="cursor-pointer"
          >
            Share on {platform.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
