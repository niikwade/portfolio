// components/CVDownload.tsx
'use client'

import { FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CVDownload() {
  return (
    <Button
      className="bg-[#1a2b3b] text-white hover:bg-[#2d4b6a] transition-colors"
      onClick={() => window.open('/cv.pdf', '_blank')}
    >
      <FileDown className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  );
}