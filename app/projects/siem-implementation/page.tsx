
// app/projects/siem-implementation/page.tsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function SIEMProject() {
  return (
    <div className="min-h-screen bg-[#f7f5f3] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-[#1a2b3b] mb-6">SIEM Implementation with Azure Sentinel</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Project Overview</h2>
            <p className="text-[#6b7280]">
              Implemented a comprehensive Security Information and Event Management (SIEM) solution using Azure Sentinel, featuring custom detection rules and automated response workflows to enhance organizational security posture.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Technical Implementation</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#6b7280]">
              <li>Configured Azure Sentinel workspaces with optimized data collection</li>
              <li>Developed custom KQL queries for specific security scenarios</li>
              <li>Created automated response playbooks using Logic Apps</li>
              <li>Implemented machine learning-based anomaly detection</li>
              <li>Built custom dashboards for security metrics visualization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Security Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#6b7280]">
              <li>Real-time threat detection and alerting system</li>
              <li>Advanced correlation rules for complex attack patterns</li>
              <li>Automated incident response workflows</li>
              <li>Compliance reporting and audit trails</li>
              <li>Integration with existing security tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Azure Sentinel</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">KQL</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Logic Apps</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">PowerShell</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Azure Monitor</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
