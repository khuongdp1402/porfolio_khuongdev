import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Code, 
  Database, 
  GitBranch,
  MessageSquare,
  Users,
  Target,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  Star,
  Globe,
  Server,
  Layers,
  Box,
  Cloud,
  Monitor,
  Smartphone,
  Zap,
  Settings,
  FileCode,
  Terminal,
  Building,
  Clock,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Palette,
  Cpu,
  HardDrive,
  Workflow,
  Shield,
  Gauge,
  Wrench,
  Smartphone as Mobile,
  Cylinder,
  TreePine,
  Leaf,
  CircuitBoard,
  Folder,
  Bookmark,
  Warehouse,
  Home,
  Plane,
  MonitorPlay,
  Calculator,
  TrendingUp
} from 'lucide-react';

const skillColors = [
  "#E0F7FA", // Sky Blue Light
  "#F3E5F5", // Lavender Mist
  "#E0F2F1", // Mint Cream
  "#FFF3E0", // Light Peach
  "#D6EEFF", // Baby Blue
  "#E8F5E9", // Pale Green
  "#FFEBEE", // Light Coral Blush
  "#FFFFF0", // Ivory White
  "#EDE7F6", // Soft Lilac
  "#ECEFF1", // Blue Gray Light
];

const SkillBar = ({ name, percentage, delay = 0 }: { name: string; percentage: number; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div 
          className={`h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000 ease-out ${
            isVisible ? 'animate-pulse' : ''
          }`}
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const MasonrySkillCard = ({ 
  icon: Icon, 
  name, 
  color, 
  size = 'normal',
  delay = 0,
  customIcon = null
}: { 
  icon: React.ElementType; 
  name: string; 
  color: string; 
  size?: 'small' | 'normal' | 'large' | 'wide' | 'tall';
  delay?: number;
  customIcon?: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1 h-24';
      case 'large':
        return 'col-span-2 row-span-2 h-48';
      case 'wide':
        return 'col-span-2 row-span-1 h-24';
      case 'tall':
        return 'col-span-1 row-span-2 h-48';
      default:
        return 'col-span-1 row-span-1 h-24';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'large':
        return 'text-lg';
      case 'wide':
      case 'tall':
        return 'text-base';
      default:
        return 'text-sm';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'large':
        return 'w-12 h-12';
      case 'wide':
      case 'tall':
        return 'w-8 h-8';
      default:
        return 'w-6 h-6';
    }
  };

  const isHexColor = color?.startsWith('#');
  const bgStyle = isHexColor ? { backgroundColor: color } : {};
  const bgClass = isHexColor ? '' : color;

  return (
    <div 
      className={`relative group transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${getSizeClasses()} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        ...bgStyle,
      }}
    >
      <div className={`${bgClass} rounded-xl h-full w-full p-4 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-opacity-90`}>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="bg-white/30 rounded-full p-2 mb-2 group-hover:scale-110 transition-transform duration-300">
            {customIcon || <Icon className={`${getIconSize()} text-gray-800`} />}
          </div>
          <h4 className={`${getTextSize()} font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300`}>
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
};

// Custom Database Icons
const SQLServerIcon = ({ className }: { className: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="relative">
      <Cylinder className="w-full h-full text-white" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-xs font-bold text-white">SQL</div>
      </div>
    </div>
  </div>
);

const PostgreSQLIcon = ({ className }: { className: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="relative">
      <Database className="w-full h-full text-white" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-blue-300 rounded-full"></div>
    </div>
  </div>
);

const MongoDBIcon = ({ className }: { className: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="relative">
      <Leaf className="w-full h-full text-white" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 h-4 bg-white/80 rounded-full"></div>
      </div>
    </div>
  </div>
);

const MySQLIcon = ({ className }: { className: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="relative">
      <CircuitBoard className="w-full h-full text-white" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-orange-300 rounded-full"></div>
    </div>
  </div>
);

const ProjectCard = ({ 
  title, 
  company, 
  period, 
  description, 
  position, 
  teamSize, 
  responsibilities, 
  techStack, 
  achievements,
  delay = 0 
}: { 
  title: string; 
  company: string; 
  period: string; 
  description: string; 
  position: string; 
  teamSize: string; 
  responsibilities: string[]; 
  techStack: string[]; 
  achievements?: string[];
  delay?: number 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-1">
              <Building className="w-4 h-4" />
              <span>{company}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>{period}</span>
            </div>
          </div>
          <div className="bg-blue-100 rounded-full p-3">
            <Code className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Position & Team
            </h4>
            <p className="text-gray-600 text-sm mb-1">{position}</p>
            <p className="text-gray-500 text-sm">{teamSize}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Settings className="w-4 h-4 text-blue-600" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1">
              {techStack.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <ArrowRight className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-600" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                  <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomerCarousel = () => {
  const logos = [
    { src: 'images/prj_savills.svg', alt: 'Customer 1' },
    { src: 'images/prj_mih.jpg', alt: 'Customer 2' },
    { src: 'images/prj_okdimall.svg', alt: 'Customer 3' },
    { src: 'images/prj_pohang.png', alt: 'Customer 4' },
    { src: 'images/prj_tealife.png', alt: 'Customer 5' },
  ];

  // We duplicate the logos to create a seamless loop
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="slider relative w-full h-full overflow-hidden">
      <div className="slide-track">
        {extendedLogos.map((logo, index) => (
          <div className="slide" key={index}>
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-16 object-contain mx-auto hover:grayscale-0 hover:opacity-100 transition-all" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const experiences = [
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "Built full-featured ERP systems for finance, HRM, CRM, and inventory management.",
    location: "Vietnam, Cambodia",
    icon: Briefcase
  },
  {
    title: "Warehouse Management",
    description: "Developed modules for inbound, outbound, inventory, and printing in a warehouse ERP system.",
    location: "Japan",
    icon: Warehouse
  },
  {
    title: "Real Estate Management",
    description: "Designed leasing, sales, and commission tracking systems for property businesses.",
    location: "Singapore",
    icon: Home
  },
  {
    title: "Travel & Booking Platforms",
    description: "Created end-to-end travel systems for hotel, flight, and tour reservations.",
    location: "Vietnam",
    icon: Plane
  },
  {
    title: "Touchscreen Kiosk Systems",
    description: "Built interactive kiosks with real-time data and map display for tourism.",
    location: "Korea",
    icon: MonitorPlay
  },
  {
    title: "Accounting & Finance",
    description: "Implemented ledger, reporting, and legacy data processing for internal ERP.",
    location: "Vietnam",
    icon: Calculator
  },
  {
    title: "Sales & Commission Systems",
    description: "Developed systems for tracking sales performance and multi-party commissions.",
    location: "Vietnam",
    icon: TrendingUp
  },
  {
    title: "CRM & HRM Systems",
    description: "Integrated employee, customer, and approval workflows into enterprise systems.",
    location: "Vietnam",
    icon: Users
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode class to document element on mount and when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Add dark mode class to HTML element on initial render
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const sections = ['hero', 'about', 'skills', 'experience', 'customers', 'education', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 dark:from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50 border-b border-sky-100 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <div className="text-xl font-bold text-gray-800 dark:text-white"></div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Experience', 'Customers', 'Education', 'Contact'].map((item) => {
                  const sectionId = item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase();
                  return (
                    <button
                      key={item}
                      onClick={() => handleNavClick(sectionId)}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        activeSection === sectionId
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                Hello, I'm
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Đỗ Phú <span className="text-blue-600 dark:text-blue-400">Khương</span>
              </h1>
              <div className="relative inline-block">
                <span className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300">
                  .NET Full Stack Developer
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full"></div>
              </div>
              
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
                I build exceptional digital experiences with clean, efficient code and modern web technologies.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get In Touch
                </button>
                <a
                  href="#" // Replace with your CV link
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
              
              <div className="mt-10 flex justify-center lg:justify-start space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - Avatar */}
            <div className="relative">
              <div className="relative mx-auto lg:mx-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 opacity-20 blur-3xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 left-20 w-32 h-32 bg-sky-100 dark:bg-sky-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -top-8 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                {/* Avatar image */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img 
                    src="/images/khuongdp.jpg" 
                    alt="Đỗ Phú Khương" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sky-100 dark:bg-sky-900/50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 animate-float">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 animate-float animation-delay-2000">
                <Server className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              </div>
              <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 animate-float animation-delay-4000">
                <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => handleNavClick('about')}
              className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">A Glimpse Into My World</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Profile Summary</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With over 4 years of programming experience and a strong background in ERP systems, I have 
                developed sharp logical thinking and a deep understanding of complex software architectures. 
                My short-term goal is to become a professional Full-stack Developer, capable of building and 
                developing complete web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Challenges only fuel my eagerness to learn and my passion for overcoming obstacles. 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> "Practice makes perfect"</span> is my guiding principle, 
                as I believe relentless effort will help me achieve my goals.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am constantly seeking opportunities to learn, staying updated with the latest technologies to grow 
                both personally and professionally. I am confident in my ability to become an outstanding employee 
                and make meaningful contributions to the company's success.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Goals & Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Short-term Goal</h4>
                    <p className="text-gray-600 dark:text-gray-300">Become a professional Full-stack Developer</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Long-term Vision</h4>
                    <p className="text-gray-600 dark:text-gray-300">Advance to a Project Manager position</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Core Values</h4>
                    <p className="text-gray-600 dark:text-gray-300">Excellence through practice, continuous learning, and teamwork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">My Digital Toolbox</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive showcase of my technical expertise across various technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Development */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Frontend</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'HTML5', icon: Globe },
                  { name: 'CSS3', icon: Palette },
                  { name: 'JavaScript', icon: Zap },
                  { name: 'ReactJS', icon: Code },
                  { name: 'Blazor', icon: Monitor },
                  { name: 'Bootstrap', icon: Layers },
                  { name: 'Tailwind CSS', icon: Palette }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Backend</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'C#', icon: FileCode },
                  { name: 'ASP.NET Core', icon: Server },
                  { name: 'Entity Framework', icon: Database },
                  { name: 'RESTful APIs', icon: Cloud },
                  { name: 'Microservices', icon: Workflow },
                  { name: 'Docker', icon: Box },
                  { name: 'Azure', icon: Cloud }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <skill.icon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Database & Cloud</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'MS SQL Server', icon: SQLServerIcon, custom: true },
                  { name: 'PostgreSQL', icon: PostgreSQLIcon, custom: true },
                  { name: 'MongoDB', icon: MongoDBIcon, custom: true },
                  { name: 'MySQL', icon: MySQLIcon, custom: true },
                  { name: 'Redis Cache', icon: Gauge },
                  { name: 'Azure SQL', icon: Database }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    {skill.custom ? (
                      <skill.icon className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                    ) : (
                      <skill.icon className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                    )}
                    <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Tools & DevOps</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Git', icon: GitBranch },
                  { name: 'Docker', icon: Box },
                  { name: 'Azure DevOps', icon: Cloud },
                  { name: 'RabbitMQ', icon: Workflow },
                  { name: 'ElasticSearch', icon: Terminal },
                  { name: 'IIS', icon: Server },
                  { name: 'JWT', icon: Shield }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <skill.icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Other Technologies</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'MQTT', icon: Cpu },
                  { name: 'jQuery', icon: FileCode },
                  { name: 'Clean Architecture', icon: CircuitBoard },
                  { name: 'CQRS', icon: Workflow },
                  { name: 'Hangfire', icon: Clock }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <skill.icon className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Bringing Ideas to Life</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="flex-shrink-0 mb-4">
                  <exp.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{exp.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customer Carousel Section */}
      <section id="customers" className="py-16 g-gray-800 dark:bg-white-900 text-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Who I've Worked With</h2>
            <p className="text-gray-300 mt-2">Building success stories with a diverse range of partners.</p>
          </div>
          <CustomerCarousel />
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Learning Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-2xl w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ho Chi Minh City University of Technology</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">2018 - 2022</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Major: Bachelor of Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Completed comprehensive studies in computer science fundamentals including programming, 
                  software engineering, database systems, and web development. Gained strong theoretical 
                  foundation and practical experience in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">Have a question or a project in mind? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">khuongdp1402@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">0372 803 065</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">40/40 Le Thi Hong, Go Vap District</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm always interested in discussing new opportunities, exciting projects, 
                  or just connecting with fellow developers. Feel free to reach out!
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:khuongdp1402@gmail.com"
                    className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Email
                  </a>
                  <a
                    href="tel:0372803065"
                    className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            2024 Đỗ Phú Khương. All rights reserved. | .NET Developer
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;