// app/projects/rti-file-management/page.tsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function RTIProject() {
  return (
    <div className="min-h-screen bg-[#f7f5f3] py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl font-bold text-[#1a2b3b] mb-6">RTI File Management System</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h1 className="text-xl font-semibold text-[#1a2b3b] mb-4">Project Overview</h1>
            <div className="space-y-4 text-[#6b7280]">
              <p>
                This project was the final team project work in my MSc IT course at the University of Aberdeen. 
                Dubbed the Digital Humanities project, with the aim of demonstrating the potential of digital 
                humanities at the University.
              </p>

              <p>
                The core objective was to develop a proof-of-concept platform showing the potential of digital humanities, 
                with a focus on Reflectance Transformation Imaging (RTI) files. The team developed a "publicly accessible application" 
                (this is only limited to the department as it is still work-in-progress) that can store and display humanities-related images.
              </p>

              <div>
                <h4 className="font-semibold text-[#1a2b3b] mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>A database exclusively hosting digital humanities content</li>
                  <li>A review functionality for administrators to manage uploads and membership requests</li>
                  <li>A user-friendly interface for members to upload digital humanities items</li>
                  <li>An integrated RTI viewer for interactive exploration of digital artifacts in the browser</li>
                </ul>
              </div>

              <p>
                To achieve these objectives, the team adopted Agile methodology, specifically the Scrum framework with elements of Extreme Programming (XP). 
                This approach enabled us to adjust smoothly to changing requirements and produce a product that meets evolving business goals.
              </p>

              <div>
                <h4 className="font-semibold text-[#1a2b3b] mb-2">Project Management Tools:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Miro for visualization and documenting client feedback</li>
                  <li>Trello for project flow management</li>
                  <li>Microsoft Teams for virtual meetings and document sharing</li>
                  <li>WhatsApp for team communication</li>
                  <li>Outlook for email communication with clients and other stakeholders</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#1a2b3b] mb-2">My Direct Role:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Led project planning, using Miro (visualizing app flow) and Trello (dev flow management)</li>
                  <li>Responsible for drafting and coordinating the final report</li>
                  <li>Feature testing</li>
                  <li>Deployment options</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Django</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">SQLite</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Azure</span>
            </div>
          </section>
        </div>
      </div>
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="border-t border-[#e6f0f7] pt-8">
            <Link href="/">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
    </div>
  );
}