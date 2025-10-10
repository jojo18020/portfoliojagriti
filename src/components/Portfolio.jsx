import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Menu, 
  X, 
  Code,
  ChevronRight,
  ChevronDown,
  Eye,
  FileText,
  Cpu,
  Settings,
  Brain
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const text = "whoami";
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  // Navigation sections
  const navSections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  // Experience data
  const experiences = [
    {
      id: 'ta',
      role: 'Course Assistant',
      org: 'Spatial Visualization for Engineers (UIUC)',
      location: 'Urbana-Champaign, IL',
      dates: '2022',
      image: '/api/placeholder/80/80',
      tools: ['Onshape/SolidWorks', 'Whiteboard visualizations', 'Rubric templates'],
      bullets: [
        'Mentored 80+ students on 3D geometry, orthographic projection, and isometrics',
        'Built practice sets that improved spatial reasoning capabilities',
        'Held weekly office hours and provided efficient grading with detailed feedback',
        'Introduced "error-pattern" rubrics cutting grading time by ~30%',
        'Improved feedback clarity and student comprehension rates'
      ],
      mediaSlots: ['/api/placeholder/400/300']
    },
    {
      id: 'lab-tech',
      role: 'Lab Technician',
      org: 'Micro/Nano Lab (UIUC)',
      location: 'Urbana-Champaign, IL',
      dates: '2022 - 2023',
      image: '/api/placeholder/80/80',
      tools: ['Cleanroom SOPs', 'Mask design', 'Profilometry', 'Optical microscopy'],
      bullets: [
        'Supported photolithography, deposition, and metrology processes',
        'Maintained SOPs and calibration logs for critical equipment',
        'Assisted with mask design and wafer processing workflows',
        'Created step-by-step safety and startup checklists',
        'Implemented maintenance tracker reducing unscheduled downtime by ~20%'
      ],
      mediaSlots: ['/api/placeholder/400/300']
    },
    {
      id: 'cad',
      role: 'CAD Modeler',
      org: 'Engineering Design Projects',
      location: 'Various',
      dates: '2023 - 2024',
      image: '/api/placeholder/80/80',
      tools: ['SolidWorks', 'Fusion 360', 'Onshape', 'FEA (basic)'],
      bullets: [
        'Built parametric assemblies for robot mechanisms, test rigs, and F1 suspension systems',
        'Produced manufacturing drawings and BOMs for 3D printing and CNC machining',
        'Ran motion studies and static FEA for early design validation',
        'Created photorealistic renders and assembly animations for presentations'
      ],
      mediaSlots: ['/api/placeholder/400/300', '/api/placeholder/400/300']
    },
    {
      id: 'wipro',
      role: 'Junior Member',
      org: 'Wipro PARI (Automation/Robotics)',
      location: 'India',
      dates: '2024 - Present',
      link: 'https://www.wipro.com/',
      image: '/api/placeholder/80/80',
      tools: ['PLC basics', 'Robot teach pendant', 'Excel/Notion logs'],
      bullets: [
        'Supported debugging on industrial automation cells with PLC/robot integration',
        'Assisted with kinematics/trajectory sanity checks and station bring-up tasks',
        'Helped triage line issues with seniors and documented recurrent failure modes',
        'Gained hands-on experience with industrial automation workflows'
      ],
      mediaSlots: ['/api/placeholder/400/300']
    }
  ];

  // Projects data
  const projects = [
    {
      id: 'mri-dynamometer',
      title: 'MRI-Compatible Dynamometer',
      summary: 'Hydraulic force sensor for MRI environments - 90% cost reduction',
      tags: ['CAD', 'FEA', 'LabVIEW', 'MATLAB', 'Medical Device'],
      problem: '$6,000 commercial sensor not MRI-safe/cost-effective',
      solution: 'Designed hydraulic transmission + MRI-safe sensor housing; modeled loads; created assembly CAD; assisted with benchtop validation and calibration scripts.',
      tools: 'CAD (SolidWorks), basic FEA, LabVIEW/DAQ, MATLAB',
      outcome: '~90% cost reduction ($6k → ~$500), functional prototype validated in MRI bench tests',
      media: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
      links: [
        { label: 'Design Doc', url: '#' },
        { label: 'BOM', url: '#' },
        { label: 'Poster', url: '#' }
      ],
      codeSnippets: [
        {
          language: 'matlab',
          title: 'Calibration Script',
          code: `% MRI Dynamometer Calibration
function calibrated_force = calibrate_sensor(raw_voltage)
    % Calibration coefficients from bench tests
    a = 125.4;  % N/V
    b = -2.1;   % N offset
    
    % Apply calibration curve
    calibrated_force = a * raw_voltage + b;
    
    % Filter noise
    calibrated_force = movmean(calibrated_force, 5);
end`
        }
      ]
    },
    {
      id: 'afm-control',
      title: 'AFM Control System',
      summary: 'Hybrid H∞ + PID controller for atomic force microscopy',
      tags: ['Control Systems', 'MATLAB', 'LabVIEW', 'H-infinity'],
      problem: 'Noisy interaction forces + tracking error in AFM reference following',
      solution: 'Modeled cantilever and DMT contact in MATLAB; synthesized H∞ controller for robustness; tuned PID in LabVIEW; integrated hybrid control.',
      tools: 'MATLAB/Simulink, LabVIEW, State-space modeling',
      outcome: 'Smoother tracking and improved disturbance rejection with reproducible pipeline',
      media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      links: [
        { label: 'Technical Report', url: '#' }
      ],
      codeSnippets: [
        {
          language: 'matlab',
          title: 'H-infinity Controller Design',
          code: `% AFM H-infinity Controller Synthesis
s = tf('s');
G = 1/(s^2 + 0.1*s + 1);  % Cantilever model

% Weighting functions
W1 = (s + 1)/(0.01*s + 1);  % Performance
W2 = 0.1;                   % Control effort

% Synthesize controller
K = hinfsyn(G, W1, W2);`
        }
      ]
    },
    {
      id: 'rmdlo',
      title: 'RMDLO - Deformable Object Perception',
      summary: 'Deep learning pipeline for cable/wire segmentation and curve extraction',
      tags: ['PyTorch', 'OpenCV', 'Computer Vision', 'Deep Learning'],
      problem: 'Cables/wires/ropes are hard to segment/represent for manipulation',
      solution: 'Trained DeepLabV3 on curated datasets; integrated ARIADNE+ for curve extraction; skeletonized masks for planning; built evaluation scripts.',
      tools: 'PyTorch, OpenCV, ARIADNE+, Python',
      outcome: 'Higher mIoU on wire-like classes; produced curves usable by planners',
      media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      links: [
        { label: 'GitHub Repo', url: '#' },
        { label: 'Paper', url: '#' }
      ],
      codeSnippets: [
        {
          language: 'python',
          title: 'Training Loop',
          code: `import torch
import torch.nn as nn
from torchvision import models

class DeformableSegNet(nn.Module):
    def __init__(self, num_classes=3):
        super().__init__()
        self.backbone = models.segmentation.deeplabv3_resnet50(
            pretrained=True, progress=True
        )
        self.backbone.classifier[4] = nn.Conv2d(
            256, num_classes, kernel_size=1
        )
    
    def forward(self, x):
        return self.backbone(x)['out']`
        }
      ]
    },
    {
      id: 'fiber-encoder',
      title: 'Fiber-Optic Angle Encoder',
      summary: 'MRI-safe joint angle sensing with optical components',
      tags: ['MRI-Safe', 'Optics', 'Arduino', 'CAD', '3D Printing'],
      problem: 'Need joint angle sensing in MRI without ferromagnetics',
      solution: 'Designed optical encoder with photodiodes + mask; built compact housing; wrote calibration routine (intensity→angle).',
      tools: 'Fusion 360, 3D printing, Arduino, MATLAB',
      outcome: 'Prototype with <2° error across operating range; documented assembly',
      media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      links: [
        { label: 'Build Notes', url: '#' }
      ],
      codeSnippets: [
        {
          language: 'arduino',
          title: 'Angle Readout',
          code: `// Fiber-optic angle encoder readout
#define PHOTODIODE_PIN A0
#define LED_PIN 9

float calibration_curve(int raw_reading) {
  // Polynomial fit from calibration data
  float voltage = raw_reading * (5.0/1023.0);
  return -45.2 * voltage*voltage + 180.5 * voltage - 90.1;
}

void loop() {
  int raw = analogRead(PHOTODIODE_PIN);
  float angle = calibration_curve(raw);
  Serial.println(angle);
  delay(10);
}`
        }
      ]
    },
    {
      id: 'f1-suspension',
      title: 'F1 Double-Wishbone Suspension',
      summary: 'Parametric CAD design with kinematics analysis',
      tags: ['CAD', 'Kinematics', 'FEA', 'Motorsports'],
      solution: 'Parametric CAD; geometry tuning for camber gain, roll stiffness; motion study; early FEA on control arms.',
      outcome: 'Validated kinematics for target ride height range; clean visualization pack',
      media: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      links: [
        { label: 'CAD Viewer', url: '#' }
      ],
      codeSnippets: []
    }
  ];

  // Skills data
  const skillCategories = [
    {
      title: 'Robotics & Control',
      icon: <Settings className="w-6 h-6" />,
      skills: ['PID', 'H∞', 'Impedance', 'State-Space', 'Trajectory Gen', 'Kinematics/Dynamics']
    },
    {
      title: 'Simulation & Tools',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['MATLAB/Simulink', 'Webots', 'Gazebo', 'Fusion 360', 'SolidWorks', 'ANSYS (basic)']
    },
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'C', 'C#', 'ROS2', 'OpenCV', 'URScript', 'Git']
    },
    {
      title: 'Data & ML',
      icon: <Brain className="w-6 h-6" />,
      skills: ['PyTorch', 'Classical CV', 'Dataset Curation', 'Metrics']
    }
  ];

  // Gallery items
  const galleryItems = [
    { id: 1, src: '/api/placeholder/300/200', caption: 'Robot arm assembly', type: 'image' },
    { id: 2, src: '/api/placeholder/300/400', caption: 'CAD rendering of suspension', type: 'image' },
    { id: 3, src: '/api/placeholder/400/300', caption: 'Lab testing setup', type: 'image' },
    { id: 4, src: '/api/placeholder/300/300', caption: 'MRI dynamometer prototype', type: 'image' },
    { id: 5, src: '/api/placeholder/400/250', caption: 'Control system diagram', type: 'image' },
    { id: 6, src: '/api/placeholder/350/300', caption: 'Fiber optic encoder', type: 'image' }
  ];

  // Component: Terminal Prompt
  const TerminalPrompt = ({ command, typing = false }) => (
    <div className="flex items-center font-mono text-sm mb-6">
      <span className="text-[#FFC906]">jojo@portfolio:~$</span>
      <span className="ml-2 text-white">
        {typing ? typingText : command}
        {typing && <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} text-[#FFC906]`}>_</span>}
      </span>
    </div>
  );

  // Component: Chip
  const Chip = ({ children, variant = 'default', onClick, href }) => {
    const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors";
    const variants = {
      default: "bg-[#223971] text-white hover:bg-[#2a4489]",
      primary: "bg-[#CC1E4A] text-white hover:bg-[#b01a42]",
      outline: "border border-[#22397150] text-white hover:bg-[#223971]"
    };

    const Component = href ? 'a' : 'button';
    const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

    return (
      <Component 
        className={`${baseClasses} ${variants[variant]}`}
        {...props}
      >
        {children}
      </Component>
    );
  };

  // Component: Card
  const Card = ({ children, className = "" }) => (
    <div className={`bg-[#121F45] rounded-xl border border-[#22397110] shadow-lg ${className}`}>
      {children}
    </div>
  );

  // Component: Code Block
  const CodeBlock = ({ code, language, title }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="mt-4">
        {title && <h4 className="text-sm font-medium text-white mb-2">{title}</h4>}
        <div className="relative">
          <pre className="bg-[#0d1629] rounded-lg p-4 overflow-x-auto text-sm">
            <code className="text-white font-mono">{code}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Copy code"
            title={copied ? 'Copied!' : 'Copy'}
          >
            {copied ? '✓' : <Code className="w-4 h-4" />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#121F45] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#121F45]/90 backdrop-blur-sm border-b border-[#22397120]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-mono text-xl font-bold text-[#FFC906]">jojo</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="relative text-white hover:text-[#223971] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(section.id);
                  }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC1E4A] rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121F45] border-t border-[#22397120]">
            <div className="px-4 py-2 space-y-2">
              {navSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-3 py-2 text-white hover:bg-[#223971] rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <TerminalPrompt command="whoami" typing={true} />
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-mono">
                Jagriti <span className="text-[#CC1E4A]">(Jojo)</span> Jain
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Robotics & Control Systems • Mechatronics • Simulation
              </p>
              <div className="flex flex-wrap gap-4">
                <Chip variant="primary" href="#">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Chip>
                <Chip href="mailto:jojo@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Chip>
                <Chip href="https://github.com">
                  <Github className="w-4 h-4" />
                </Chip>
                <Chip href="https://linkedin.com">
                  <Linkedin className="w-4 h-4" />
                </Chip>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#223971] to-[#CC1E4A] p-1">
                  <div className="w-full h-full rounded-full bg-[#121F45] flex items-center justify-center">
                    <img 
                      src="/api/placeholder/240/240" 
                      alt="Jojo's headshot"
                      className="w-60 h-60 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0f1a38]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TerminalPrompt command="about" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Mechanical Engineering student at UIUC with an ECE minor, specializing in controls and robotics. 
                I blend hardware design, software development, and data analysis to build robust, intelligent robotic systems. 
                Currently gaining industry experience at Wipro PARI, working on automation and robotics projects.
              </p>
              <p className="text-lg text-gray-300">
                My mission is to develop data-aware robot systems that can adapt and perform reliably in complex, 
                real-world environments. From MRI-compatible medical devices to industrial automation, 
                I love tackling interdisciplinary challenges that push the boundaries of what's possible.
              </p>
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 font-mono">Quick Facts</h3>
                <div className="space-y-3">
                  <div><strong>Location:</strong> India</div>
                  <div><strong>Focus:</strong> Controls/Robotics/Simulation</div>
                  <div><strong>Open to:</strong> Internships • Research • Full-time roles</div>
                  <div><strong>Education:</strong> UIUC MechE (ECE Minor)</div>
                </div>
                <div className="mt-6">
                  <Chip variant="outline" href="#">
                    <FileText className="w-4 h-4 mr-2" />
                    Download CV
                  </Chip>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TerminalPrompt command="cat experience.log" />
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <img 
                          src={exp.image} 
                          alt={`${exp.org} logo`}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold font-mono">{exp.role}</h3>
                          <p className="text-[#CC1E4A]">{exp.org}</p>
                          <p className="text-gray-400 text-sm">{exp.location} • {exp.dates}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tools.map((tool) => (
                          <Chip key={tool} variant="outline">{tool}</Chip>
                        ))}
                        {exp.link && (
                          <Chip href={exp.link}>
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Visit
                          </Chip>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                      className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
                      aria-label="Toggle experience"
                    >
                      {expandedExperience === exp.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {expandedExperience === exp.id && (
                    <div className="mt-6 pt-6 border-t border-[#22397120]">
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start">
                            <span className="text-[#FFC906] mr-3 mt-2">•</span>
                            <span className="text-gray-300">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {exp.mediaSlots.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {exp.mediaSlots.map((media, mediaIndex) => (
                            <img 
                              key={mediaIndex}
                              src={media} 
                              alt={`${exp.role} media ${mediaIndex + 1}`}
                              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => setLightboxImage(media)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#0f1a38]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TerminalPrompt command="ls projects/" />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold font-mono mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.summary}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Chip key={tag} variant="outline">{tag}</Chip>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
                      aria-label="Toggle project"
                    >
                      {expandedProject === project.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Media Preview */}
                  {project.media && project.media.length > 0 && (
                    <div className="mb-4">
                      <img 
                        src={project.media[0]} 
                        alt={`${project.title} preview`}
                        className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setLightboxImage(project.media[0])}
                      />
                    </div>
                  )}

                  {/* Links */}
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, linkIndex) => (
                        <Chip key={linkIndex} href={link.url}>
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {link.label}
                        </Chip>
                      ))}
                    </div>
                  )}

                  {/* Expanded Details */}
                  {expandedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-[#22397120]">
                      <div className="grid gap-4">
                        {project.problem && (
                          <div>
                            <h4 className="font-mono font-semibold text-white mb-1">Problem</h4>
                            <p className="text-gray-300">{project.problem}</p>
                          </div>
                        )}
                        {project.solution && (
                          <div>
                            <h4 className="font-mono font-semibold text-white mb-1">Solution</h4>
                            <p className="text-gray-300">{project.solution}</p>
                          </div>
                        )}
                        {project.tools && (
                          <div>
                            <h4 className="font-mono font-semibold text-white mb-1">Tools</h4>
                            <p className="text-gray-300">{project.tools}</p>
                          </div>
                        )}
                        {project.outcome && (
                          <div>
                            <h4 className="font-mono font-semibold text-white mb-1">Outcome</h4>
                            <p className="text-gray-300">{project.outcome}</p>
                          </div>
                        )}
                        {project.codeSnippets && project.codeSnippets.length > 0 && (
                          <div>
                            <h4 className="font-mono font-semibold text-white mb-2">Code</h4>
                            {project.codeSnippets.map((snip, i) => (
                              <CodeBlock key={i} code={snip.code} language={snip.language} title={snip.title} />
                            ))}
                          </div>
                        )}
                        {project.media && project.media.length > 1 && (
                          <div>
                            <h4 className="font-mono font-semibold text-white mb-2">Gallery</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {project.media.slice(1).map((m, i) => (
                                <img
                                  key={i}
                                  src={m}
                                  alt={`${project.title} media ${i + 2}`}
                                  className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                  onClick={() => setLightboxImage(m)}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TerminalPrompt command="skills --list" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {cat.icon}
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <Chip key={s} variant="outline">{s}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#0f1a38]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TerminalPrompt command="open gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="relative group">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-40 md:h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => setLightboxImage(item.src)}
                />
                <div className="absolute inset-0 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TerminalPrompt command="contact --me" />
          <Card className="p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Chip variant="primary" href="mailto:jojo@example.com">
                <Mail className="w-4 h-4 mr-2" /> jojo@example.com
              </Chip>
              <Chip href="https://github.com">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </Chip>
              <Chip href="https://linkedin.com">
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Chip>
              <Chip variant="outline" href="#">
                <Download className="w-4 h-4 mr-2" /> Resume (PDF)
              </Chip>
            </div>
          </Card>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-h-[85vh] max-w-[90vw] rounded-lg"
          />
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <footer className="py-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Jojo — Built with React & Tailwind
      </footer>
    </div>
  );
};
export default Portfolio;

