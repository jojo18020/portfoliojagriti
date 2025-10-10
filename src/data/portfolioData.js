import { Code, Cpu, Settings, Brain } from 'lucide-react';

// CRA public base (handles gh-pages too)
const PUB = process.env.PUBLIC_URL || '';

export const heroContent = {
  name: 'Jagriti Jain',
  tagline: 'Robotics & Control Systems • Mechatronics • Simulation',
  resumeUrl: `${PUB}/media/cv.pdf`,
  email: 'jsjain2@illinois.edu',
  githubUrl: 'https://github.com/jojo18020',
  linkedinUrl: 'https://www.linkedin.com/in/jagriti-jain-b448401b4/',
  headshot: `${PUB}/media/me.jpg`

};

export const navSections = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

export const pageIntros = {
  about: {
    eyebrow: 'Get to know me',
    title: 'About',
    highlight: 'Jagriti',
    description:
      'I am a controls-focused engineer who loves blending robotics, mechanics, and software to ship resilient systems. This page gathers the story and quick facts behind my work.'
  },
  experience: {
    eyebrow: 'Career timeline',
    title: 'Experience in',
    highlight: 'Robotics & Controls',
    description:
      'From academic labs to industrial automation, I grow by getting close to the hardware, logging data, and tuning systems until they behave. Dive into the roles and contributions that shaped my skill set.'
  },
  projects: {
    eyebrow: 'Build logs',
    title: 'Projects &',
    highlight: 'Case Studies',
    description:
      'Explore a mix of medical devices, perception pipelines, and automation tooling where I led the design, controls, or data story. Each project highlights the decisions, tools, and outcomes.'
  },
  skills: {
    eyebrow: 'Tools of the trade',
    title: 'Technical',
    highlight: 'Skill Stack',
    description:
      'A snapshot of the software, hardware, and analytical tools I rely on when building robots and automation workflows.'
  },
  gallery: {
    eyebrow: 'Workshop snapshots',
    title: 'Project',
    highlight: 'Gallery',
    description:
      'Scroll through renders, prototypes, and lab captures that spotlight the tactile side of my work.'
  },
  contact: {
    eyebrow: 'Let’s collaborate',
    title: 'Connect with',
    highlight: 'Jagriti Jain',
    description:
      'Reach out if you want to talk robotics, controls, or future collaborations. Email, social, and resume links live below.'
  }
};

export const quickFacts = [
  { label: 'Location', value: 'India' },
  { label: 'Focus', value: 'Controls/Robotics/Simulation' },
  { label: 'Open to', value: 'Internships • Research • Full-time roles' },
  { label: 'Education', value: 'UIUC MechE (ECE Minor)' }
];

export const experiences = [
  {
    id: 'wipro',
    role: 'Junior Member',
    org: 'Wipro PARI (Automation/Robotics)',
    location: 'India',
    dates: '2024 - Present',
    link: 'https://www.wipro.com/',
    image: `${PUB}/media/wp.png`,
    tools: ['PLC basics', 'Robot teach pendant', 'Excel/Notion logs'],
    bullets: [
      'Debugged industrial automation cells with PLC/robot integration and servo amplifier control',
      'Extended internal simulators (BALI/PDCA/HIVE) to replicate shop-floor servers and Apple Bobcat SFC flows',
      'Analyzed I/O card diagnostics, grid refresh logic, and servo positioning issues for production lines',
      'Built Excel-based servo teaching GUIs using EPPlus/ClosedXML to streamline commissioning'
    ],
    mediaSlots: [`${PUB}/media/cadmodeler.png`]
  },
  {
    id: 'ta',
    role: 'Course Assistant',
    org: 'Spatial Visualization for Engineers (UIUC)',
    location: 'Urbana-Champaign, IL',
    dates: '2022',
    image: `${PUB}/media/uiuc.png`,
    tools: ['Onshape/SolidWorks', 'Whiteboard visualizations', 'Rubric templates'],
    bullets: [
      'Mentored 80+ students on 3D geometry, orthographic projection, and isometrics',
      'Built practice sets that improved spatial reasoning capabilities',
      'Held weekly office hours and provided efficient grading with detailed feedback',
      'Introduced "error-pattern" rubrics cutting grading time by ~30%',
      'Improved feedback clarity and student comprehension rates'
    ],
    mediaSlots: [`${PUB}/media/uiuc.png`]
  },
  {
    id: 'lab-tech',
    role: 'Lab Technician',
    org: 'Micro/Nano Lab (UIUC)',
    location: 'Urbana-Champaign, IL',
    dates: '2022 - 2023',
    image: `${PUB}/media/uiuc.png`,
    tools: ['Cleanroom SOPs', 'Mask design', 'Profilometry', 'Optical microscopy'],
    bullets: [
      'Supported photolithography, deposition, and metrology processes',
      'Maintained SOPs and calibration logs for critical equipment',
      'Assisted with mask design and wafer processing workflows',
      'Created step-by-step safety and startup checklists',
      'Implemented maintenance tracker reducing unscheduled downtime by ~20%'
    ],
    mediaSlots: [`${PUB}/media/uiuc.png`]
  },
  {
    id: 'cad',
    role: 'CAD Modeler',
    org: 'Engineering Design Projects',
    location: 'Various',
    dates: '2023 - 2024',
    image: `${PUB}/media/dtl.png`,
    tools: ['SolidWorks', 'Fusion 360', 'Onshape', 'FEA (basic)'],
    bullets: [
      'Built parametric assemblies for robot mechanisms and test rigs',
      'Produced manufacturing drawings and BOMs for 3D printing and CNC machining',
      'Ran motion studies and static FEA for early design validation',
      'Created photorealistic renders and assembly animations for presentations'
    ],
    mediaSlots: [`${PUB}/media/cadmodeler.png`]
  }
];

export const projects = [
  {
    id: 'mri-dynamometer',
    title: 'MRI-Compatible Dynamometer',
    summary: 'Hydraulic force sensor for MRI environments - ~90% cost reduction',
    tags: ['CAD', 'FEA', 'LabVIEW', 'MATLAB', 'Medical Device'],
    problem: '$6,000 commercial sensor not MRI-safe/cost-effective',
    solution:
      'Designed hydraulic transmission + MRI-safe sensor housing; modeled loads; created assembly CAD; assisted with benchtop validation and calibration scripts.',
    tools: 'CAD (SolidWorks), basic FEA, LabVIEW/DAQ, MATLAB',
    outcome: '~90% cost reduction ($6k → ~$500), functional prototype validated in MRI bench tests',
    media: [
      'https://www.youtube.com/embed/0iH9eoRPMxE',
      `${PUB}/media/dyn.png`
    ],
    links: [{ label: 'Paper', url: `${PUB}/media/dynrep.pdf` }]
  },
  {
    id: 'differential-drive',
    title: 'Differential-Drive Trajectory Planning & Simulation',
    summary: 'Polynomial trajectories + ROS 2 + MATLAB; TurtleBot3 sim & analysis',
    tags: ['MATLAB', 'ROS2', 'Gazebo', 'Kinematics', 'Trajectory Gen'],
    problem: 'Smooth, continuous waypoint tracking with speed continuity across segments',
    solution:
      'Cubic/trapezoidal velocity profiles with continuity constraints; generated feedforward v, ω; real-time plotting; ROS 2 integration for simulated robot.',
    tools: 'MATLAB, ROS 2 Humble, TurtleBot3 fake node, custom plotting utilities',
    outcome:
      'Stable tracking across custom waypoints with continuous velocities and clean visualizations',
    media: ['https://www.youtube.com/embed/jhRFe8c3A-A'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jojo18020/DIFFERENTIALDRIVER' }
    ]
  },
  {
    id: 'crs-impedance-robot',
    title: 'CRS Robot — Impedance & Task-Space Control',
    summary: 'Legacy CRS arm controlled with impedance strategies and task-space moves',
    tags: ['Impedance Control', 'Task-Space', 'MATLAB', 'Robotics'],
    problem: 'Safe interaction and compliant behavior during contact-rich tasks',
    solution:
      'Implemented impedance control and task-space planning; executed pick-and-place with calibrated force application.',
    tools: 'MATLAB, custom kinematics/dynamics utilities',
    outcome: 'Reliable execution under variable contact; clean demos',
    media: ['https://www.youtube.com/embed/YZJwGEt9AYQ'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/jojo18020/ME446_repo' }
    ]
  },
  {
    id: 'ur3-drawing-robot',
    title: 'UR3 Drawing Robot — OpenCV Edge Extraction',
    summary: 'UR3 traces images using CV-based edge maps + URScript',
    tags: ['UR3', 'OpenCV', 'Python', 'URScript'],
    problem: 'Convert arbitrary images to robot-traceable paths',
    solution:
      'OpenCV pipeline extracts edges → path generation → URScript streaming to the UR3.',
    tools: 'Python, OpenCV, URScript',
    outcome: 'Consistent drawings with robust edge tracing on planar surface',
    media: [
      'https://www.youtube.com/embed/Zk5gm2d88as',
      'https://www.youtube.com/embed/uApPi0FkuCw'
    ]
  },
  {
    id: 'rmdlo',
    title: 'RMDLO - Deformable Object Perception',
    summary:
      'Deep learning pipeline for cable/wire segmentation and curve extraction',
    tags: ['PyTorch', 'OpenCV', 'Computer Vision', 'Deep Learning'],
    problem: 'Cables/wires/ropes are hard to segment/represent for manipulation',
    solution:
      'Trained DeepLabV3 on curated datasets; integrated ARIADNE+ for curve extraction; skeletonized masks for planning; built evaluation scripts.',
    tools: 'PyTorch, OpenCV, ARIADNE+, Python',
    outcome:
      'Higher mIoU on wire-like classes; produced curves usable by planners',
    media: [`${PUB}/media/rmdloimage.png`]
  },
  {
    id: 'afm-control',
    title: 'AFM Control System',
    summary: 'Hybrid H∞ + PID controller for atomic force microscopy',
    tags: ['Control Systems', 'MATLAB', 'LabVIEW', 'H-infinity'],
    problem: 'Noisy interaction forces + tracking error in AFM reference following',
    solution:
      'Modeled cantilever and DMT contact in MATLAB; synthesized H∞ controller for robustness; tuned PID in LabVIEW; integrated hybrid control.',
    tools: 'MATLAB/Simulink, LabVIEW, State-space modeling',
    outcome:
      'Smoother tracking and improved disturbance rejection with reproducible pipeline',
    media: [`${PUB}/media/afm.png`]
  }
];

export const skillCategories = [
  {
    title: 'Robotics & Control',
    icon: Settings,
    skills: [
      'PID',
      'H∞',
      'Impedance',
      'State-Space',
      'Trajectory Gen',
      'Kinematics/Dynamics'
    ]
  },
  {
    title: 'Simulation & Tools',
    icon: Cpu,
    skills: [
      'MATLAB/Simulink',
      'Webots',
      'Gazebo',
      'Fusion 360',
      'SolidWorks',
      'ANSYS (basic)'
    ]
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'C', 'C#', 'ROS2', 'OpenCV', 'URScript', 'Git']
  },
  {
    title: 'Data & ML',
    icon: Brain,
    skills: ['PyTorch', 'Classical CV', 'Dataset Curation', 'Metrics']
  }
];

export const galleryItems = [
  { id: 1, src: `${PUB}/media/cadmodeler.png`, caption: 'Robot arm assembly', type: 'image' },
  { id: 2, src: `${PUB}/media/dyn.png`, caption: 'MRI dynamometer prototype', type: 'image' },
  { id: 3, src: 'https://www.youtube.com/embed/uApPi0FkuCw', caption: 'UR3 Demo', type: 'video' },
  { id: 4, src: 'https://www.youtube.com/embed/0iH9eoRPMxE', caption: 'MRI Dynamometer Video', type: 'video' },
  { id: 5, src: 'https://www.youtube.com/embed/YZJwGEt9AYQ', caption: 'CRS Robot Contact', type: 'video' }
];

export const contactDetails = {
  email: 'jsjain2@illinois.edu',
  phone: '+91 7767902030',
  location: 'India',
  github: 'https://github.com/jojo18020',
  linkedin: 'https://www.linkedin.com/in/jagriti-jain-b448401b4/'
};
