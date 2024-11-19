// app/projects/ml-intrusion-detection/page.tsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function MLIDSProject() {
  return (
    <div className="min-h-screen bg-[#f7f5f3] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-[#1a2b3b] mb-6">ML-Based Intrusion Detection System</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Project Overview</h2>
            <p className="text-[#6b7280]">
              Developed an advanced network intrusion detection system using machine learning algorithms to identify and classify potential security threats in real-time network traffic, with emphasis on minimizing false positives while maintaining high detection rates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Technical Implementation</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#6b7280]">
              <li>Implemented ensemble learning approach combining Random Forest and Neural Networks</li>
              <li>Developed real-time packet capture and analysis pipeline</li>
              <li>Created feature engineering pipeline for network traffic analysis</li>
              <li>Built automated model retraining system based on performance metrics</li>
              <li>Implemented distributed processing using Apache Spark</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">ML Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#6b7280]">
              <li>Multiple ML models for different attack types</li>
              <li>Real-time traffic analysis and classification</li>
              <li>Anomaly detection using unsupervised learning</li>
              <li>Automated feature selection and engineering</li>
              <li>Model performance monitoring and optimization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2b3b] mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">TensorFlow</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Scikit-learn</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Apache Spark</span>
              <span className="bg-[#e6f0f7] text-[#1a2b3b] px-3 py-1 rounded-full text-sm">Docker</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}