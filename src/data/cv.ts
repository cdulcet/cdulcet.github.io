import type { LucideIcon } from 'lucide-react';
import {
  Code2, Database, Boxes, Wrench, Mail, Github, GraduationCap, BookOpen,
  Server, Cloud, GitBranch, Container, Shield, Cpu, Globe, Compass, Calendar, Monitor, Briefcase,
} from 'lucide-react';

export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'educacion', label: 'Educación' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'contacto', label: 'Contacto' },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Lenguajes',
    icon: Code2,
    skills: [
      { name: 'Java', level: 95 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Dart (Flutter)', level: 70 },
      { name: 'Shell Scripting', level: 75 },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Oracle', level: 85 },
      { name: 'SQL Server', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    icon: Boxes,
    skills: [
      { name: 'Spring Boot', level: 92 },
      { name: 'REST APIs', level: 95 },
      { name: 'SOAP', level: 80 },
      { name: 'JWT / OAuth2', level: 88 },
      { name: 'Nginx', level: 75 },
      { name: 'JUnit', level: 85 },
    ],
  },
  {
    title: 'DevOps & Otros',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 95 },
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
    ],
  },
];

export interface ExperienceItem {
  company: string;
  logo: LucideIcon;
  role: string;
  project?: string;
  projectUrl?: string;
  period: string;
  description: string;
  highlights?: string[];
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Imatia Innovation',
    logo: Compass,
    role: 'Director de Proyecto',
    project: 'Administración Electrónica',
    projectUrl: 'https://try.cividas.com/cividas/',
    period: '2026 — Presente',
    description:
      'Dirección y gestión del equipo de Administración Electrónica (CIVIDAS), desempeñando funciones de Product Owner (PO) y Project Manager (PM).',
    highlights: [
      'Liderazgo, coordinación y organización del equipo de desarrollo, planificación de tareas y asignación de recursos.',
      'Definición, priorización y gestión del backlog, alineando las necesidades del negocio con las soluciones técnicas.',
      'Gestión y seguimiento de proyectos, planificación de hitos, control de plazos y coordinación de entregas.',
      'Interlocución con clientes y stakeholders para la toma de requisitos, definición funcional y seguimiento de necesidades.',
      'Supervisión de la evolución de la plataforma CIVIDAS, impulsando mejoras funcionales, evolución tecnológica y resolución de incidencias.',
      'Coordinación entre los equipos técnicos, funcionales y otros departamentos, garantizando la calidad y cumplimiento de los objetivos.',
    ],
    tags: ['Dirección de proyectos', 'Product Owner', 'Project Manager', 'CIVIDAS', 'Liderazgo', 'Metodologías ágiles'],
  },
  {
    company: 'Imatia Innovation',
    logo: Server,
    role: 'Líder Técnico & Backend Developer',
    project: 'Cividas',
    projectUrl: 'https://try.cividas.com/cividas/',
    period: '2020 — 2026',
    description:
      'Liderazgo técnico y desarrollo backend en la plataforma Cividas. Toma de decisiones de arquitectura, coordinación de equipos y aplicación de buenas prácticas en el ciclo completo de desarrollo.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Arquitectura', 'Liderazgo'],
  },
  {
    company: 'Imatia Innovation',
    logo: Globe,
    role: 'Full Stack Developer',
    project: 'VivirEnCasa',
    projectUrl: 'http://appvivirencasa.uma.es',
    period: '2018 — 2020',
    description:
      'Desarrollo full stack para la plataforma VivirEnCasa. Implementación de funcionalidades front-end y back-end, integración de servicios y mantenimiento de la base de datos.',
    tags: ['Java', 'Angular', 'REST API', 'SQL'],
  },
  {
    company: 'ATSistemas (cliente: Inditex)',
    logo: Cloud,
    role: 'Backend Developer',
    project: 'Zara',
    projectUrl: 'https://www.zara.com/',
    period: '2017 — 2018',
    description:
      'Desarrollo backend para los sistemas internos de Zara dentro del ecosistema Inditex. Optimización de APIs y servicios de alta concurrencia.',
    tags: ['Java', 'Spring', 'Oracle', 'Microservicios'],
  },
  {
    company: 'Altia',
    logo: Cpu,
    role: 'Software Engineer',
    project: 'ALTIA',
    projectUrl: 'https://www.altiacompany.com/',
    period: '2015 — 2017',
    description:
      'Desarrollo y mantenimiento de aplicaciones empresariales para distintos clientes. Trabajo en entornos colaborativos siguiendo metodologías ágiles.',
    tags: ['Java', 'SQL Server', 'REST', 'Agile'],
  },
  {
    company: 'General Software',
    logo: GitBranch,
    role: 'Junior Developer',
    project: 'General Software',
    projectUrl: 'https://www.generalsw.com/',
    period: '2014 — 2015',
    description:
      'Primeros pasos en desarrollo profesional de software. Participación en proyectos corporativos y aprendizaje de buenas prácticas de programación.',
    tags: ['Java', 'SQL', 'HTML/CSS'],
  },
  {
    company: 'Coritel (Accenture)',
    logo: Shield,
    role: 'Junior Developer',
    project: 'Coritel',
    projectUrl: 'https://www.coritel.it/',
    period: '2013 — 2014',
    description:
      'Colaboración en proyectos de desarrollo de software a medida. Fundamentos de ingeniería de software en un entorno corporativo de gran escala.',
    tags: ['Java', 'Oracle', 'J2EE'],
  },
];

export interface EducationItem {
  institution: string;
  url: string;
  location: string;
  degree: string;
  icon: LucideIcon;
}

export const education: EducationItem = {
  institution: 'Escola Técnica Profesional Jesuïtes El Clot',
  url: 'https://www.formacioprofessional.com/ca/jesuites-el-clot',
  location: 'Barcelona, España',
  degree: 'Grado Superior — DAI: Desarrollo de Aplicaciones Informáticas',
  icon: GraduationCap,
};

export interface CourseItem {
  date: string;
  title: string;
  mode: string;
  hours?: number;
  icon: LucideIcon;
}

export const courses: CourseItem[] = [
  {
    date: '08/03/2023',
    title: 'Desarrollo de aplicaciones web con Angular 15',
    mode: 'Online',
    hours: 50,
    icon: Code2,
  },
  {
    date: '01/04/2026',
    title: 'Dividir y Conquistar: Delegar Tareas en Agentes de IA',
    mode: 'Online',
    icon: Cpu,
  },
  {
    date: '22/10/2026',
    title: 'Gestión de proyectos IT',
    mode: 'Online',
    icon: Briefcase,
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:cdulcet@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/cdulcet', icon: Github },
];

export const techIcons = [Server, Cloud, GitBranch, Container, Cpu, Database, Globe, Shield];
