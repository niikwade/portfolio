// app/page.tsx
import React from 'react';
import { Github, Linkedin, Mail, Book, GraduationCap, BookOpen, Laptop } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import CVDownload from '@/components/ui/CVDownload';



export default function Portfolio() {
  // app/page.tsx (update projects array only)
const projects = [
  {
    title: "RTI File Management System",
    description: "Web application for managing RTI files with metadata handling and file viewing capabilities.",
    skills: ["Python", "Full-stack", "Database Design"],
    link: "/projects/rti-file-management"
  },
  {
    title: "SIEM Implementation",
    description: "Security Information and Event Management system using Azure Sentinel with custom detection rules.",
    skills: ["Azure", "Security", "Log Analytics"],
    link: "/projects/siem-implementation"
  },
  {
    title: "ML-Based Intrusion Detection",
    description: "Network intrusion detection system using machine learning algorithms.",
    skills: ["Python", "ML", "Security"],
    link: "/projects/ml-intrusion-detection"
  }
];

  const continuousLearning = {
    ibmSkillBuild: {
      title: "IBM Skill Build",
      icon: <BookOpen className="h-5 w-5 text-[#1a2b3b]" />,
      courses: [
        {
          name: "Explore Emerging Tech",
          description: "This course gave an understanding of six emerging technologies: AI, blockchain, cloud computing, cybersecurity, data and analytics, and IoT. Covers foundational concepts, terminology, and practical applications in organizations."
        },
        {
          name: "Agile Explorer",
          description: "This course provided a foundational understanding of Agile values, principles, and practices for cultural and behavioral change in work environments."
        },
        {
          name: "Enterprise Design Thinking Practitioner",
          description: "The course was about applying knowledge of Enterprise Design Thinking and its practical implementation in everyday work scenarios."
        }
      ]
    },
    coursera: {
      title: "Coursera",
      icon: <Laptop className="h-5 w-5 text-[#1a2b3b]" />,
      certificates: [
        {
          name: "Google IT Support Professional Certificate",
          status: "Completed",
          modules: [
            "IT Security: Defense against the digital dark arts",
            "Operating Systems and You: Becoming a Power User",
            "System Administration and IT Infrastructure Services",
            "The Bits and Bytes of Computer Networking",
            "Technical Support Fundamentals"
          ]
        },
        {
          name: "Google Cybersecurity Professional Certificate",
          status: "In Progress",
          modules: [
            "Foundations of Cybersecurity",
            "Play It Safe: Manage Security Risks",
            "Connect and Protect: Networks and Network Security",
            "Tools of the Trade: Linux and SQL",
            "Assets, Threats, and Vulnerabilities",
            "Sound the Alarm: Detection and Response",
            "Automate Cybersecurity Tasks with Python"
          ]
        }
      ]
    },
    udacity: {
      title: "Udacity",
      icon: <GraduationCap className="h-5 w-5 text-[#1a2b3b]" />,
      courses: [
        {
          name: "AWS Machine Learning Foundations",
          status: "In Progress",
          description: "Comprehensive introduction to machine learning on AWS, covering fundamental ML concepts, AWS services, and practical implementation."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f3]">
      {/* Hero Section */}
      <header className="bg-white border-b border-[#e6f0f7]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1a2b3b]">Michael Nii Nai Nai-Kwade</h1>
          <p className="mt-2 text-xl text-[#6b7280]">Aspiring Cybersecurity & Machine Learning Engineer</p>
<div className="mt-4 flex justify-between items-center">
  <div className="flex space-x-4">
    <Button variant="ghost" size="icon">
      <a href="https://github.com/niikwade/portfolio" className="text-[#1a2b3b] hover:text-[#6b7280] transition-colors">
        <Github className="h-6 w-6" />
      </a>
    </Button>
    <Button variant="ghost" size="icon">
      <a href="https://www.linkedin.com/in/niikwade/" className="text-[#1a2b3b] hover:text-[#6b7280] transition-colors">
        <Linkedin className="h-6 w-6" />
      </a>
    </Button>
    <Button variant="ghost" size="icon">
      <a href="mailto:niikwade@gmail.com" className="text-[#1a2b3b] hover:text-[#6b7280] transition-colors">
        <Mail className="h-6 w-6" />
      </a>
    </Button>
  </div>
  <CVDownload/>
</div>
```
        </div>
      </header>

      {/* Projects Section */}
<section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-[#1a2b3b] mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Link key={index} href={project.link} className="block hover:no-underline">
          <Card className="bg-white border border-[#e6f0f7] hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-[#1a2b3b]">{project.title}</CardTitle>
              <CardDescription className="text-[#6b7280]">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-[#e6f0f7] text-[#1a2b3b] text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Skills & Certifications Section */}
      <section className="bg-white py-12 border-y border-[#e6f0f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b3b] mb-8">Skills & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-[#e6f0f7] hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1a2b3b]">
                  <Book className="h-5 w-5 text-[#1a2b3b]" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#6b7280]">
                  <li>Python</li>
                  <li>SQL & Database Management</li>
                  <li>Azure Cloud Platform</li>
                  <li>Git & Version Control</li>
                  <li>Cybersecurity Fundamentals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-[#e6f0f7] hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1a2b3b]">
                  <GraduationCap className="h-5 w-5 text-[#1a2b3b]" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#6b7280]">
                  <li>Certified in Cybersecurity (ISC2)</li>
                  <li>Google IT Support Professional</li>
                  <li>ILM Level 2 Award in Leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Continuous Learning Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b3b] mb-8">Continuous Learning</h2>
          <div className="space-y-8">
            {/* IBM SkillsBuild */}
            <Card className="border border-[#e6f0f7] hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1a2b3b]">
                  {continuousLearning.ibmSkillBuild.icon}
                  {continuousLearning.ibmSkillBuild.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-[#6b7280]">
                  {continuousLearning.ibmSkillBuild.courses.map((course, index) => (
                    <li key={index}>
                      <span className="font-semibold text-[#1a2b3b]">{course.name}</span>: {course.description}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Coursera */}
            <Card className="border border-[#e6f0f7] hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1a2b3b]">
                  {continuousLearning.coursera.icon}
                  {continuousLearning.coursera.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6 text-[#6b7280]">
                  {continuousLearning.coursera.certificates.map((cert, index) => (
                    <li key={index} className="space-y-2">
                      <div className="font-semibold flex items-center justify-between">
                        <span className="text-[#1a2b3b]">{cert.name}</span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          cert.status === 'Completed' 
                            ? 'bg-[#e6f0f7] text-[#1a2b3b]' 
                            : 'bg-[#f7f5f3] text-[#6b7280]'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {cert.modules.map((module, moduleIndex) => (
                          <li key={moduleIndex}>{module}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Udacity */}
            <Card className="border border-[#e6f0f7] hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1a2b3b]">
                  {continuousLearning.udacity.icon}
                  {continuousLearning.udacity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-[#6b7280]">
                  {continuousLearning.udacity.courses.map((course, index) => (
                    <li key={index} className="space-y-2">
                      <div className="font-semibold flex items-center justify-between">
                        <span className="text-[#1a2b3b]">{course.name}</span>
                        <span className="text-sm bg-[#e6f0f7] text-[#1a2b3b] px-2 py-1 rounded">
                          {course.status}
                        </span>
                      </div>
                      <p>{course.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}