// app/page.tsx
import React from 'react';
import { Github, Linkedin, Mail, Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const projects = [
    {
      title: "RTI File Management System",
      description: "Web application for managing RTI files with metadata handling and file viewing capabilities.",
      skills: ["Python", "Full-stack", "Database Design"],
      link: "#"
    },
    {
      title: "SIEM Implementation",
      description: "Security Information and Event Management system using Azure Sentinel with custom detection rules.",
      skills: ["Azure", "Security", "Log Analytics"],
      link: "#"
    },
    {
      title: "ML-Based Intrusion Detection",
      description: "Network intrusion detection system using machine learning algorithms.",
      skills: ["Python", "ML", "Security"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Michael Nii Nai Nai-Kwade</h1>
          <p className="mt-2 text-xl text-gray-600">Cybersecurity & Machine Learning Engineer</p>
          <div className="mt-4 flex space-x-4">
            <Button variant="ghost" size="icon">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="mailto:example@email.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Python (NumPy, Pandas, Scikit-learn)</li>
                  <li>SQL & Database Management</li>
                  <li>Azure Cloud Platform</li>
                  <li>Git & Version Control</li>
                  <li>Cybersecurity Fundamentals</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>ISC2 Certified in Cybersecurity</li>
                  <li>Google IT Support Professional</li>
                  <li>Azure-104 (In Progress)</li>
                  <li>ILM Level 2 Award in Leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}