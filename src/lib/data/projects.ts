import { 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Layers, 
  BookOpen, 
  ShoppingBag,
  LucideIcon 
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: { en: string; fr: string };
  year: string;
  description: { en: string; fr: string };
  shortDescription: { en: string; fr: string };
  gradient: string;
  bgIcon: LucideIcon;
  highlights: { en: string[]; fr: string[] };
  backendTech: string[];
  frontendTech: string[];
  featured: boolean;
  color: string;
  glowUrl: string;
  imageUrl: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: "origo",
    title: "ORIGO",
    category: {
      en: "AI Commerce & Hybrid ERP",
      fr: "Commerce IA & ERP Hybride"
    },
    year: "2024",
    description: {
      en: "A pioneering Hybrid ERP and AI Ecosystem designed to revolutionize retail in emerging markets. ORIGO solves the infrastructure gap by engineering an offline-first architecture that seamlessly bridges local store operations with cloud intelligence. It empowers retailers with AI-driven WhatsApp sales automation, digital credit management, and real-time inventory synchronization for a borderless commerce experience.",
      fr: "Un écosystème ERP hybride et IA pionnier conçu pour révolutionner la vente au détail dans les marchés émergents. ORIGO comble le fossé infrastructurel en concevant une architecture offline-first qui relie de manière transparente les opérations des magasins locaux à l'intelligence du cloud. Il permet aux détaillants d'automatiser leurs ventes via WhatsApp avec l'IA, de gérer le crédit numérique et de synchroniser les stocks en temps réel."
    },
    shortDescription: {
      en: "A cutting-edge Hybrid ERP & AI Ecosystem architected for the next generation of retail in emerging markets. Engineering a seamless bridge between offline reliability and AI-driven automation via WhatsApp storefronts and real-time inventory sync.",
      fr: "Un écosystème ERP hybride et IA de pointe conçu pour la distribution de demain. Il crée un pont fluide entre la fiabilité hors-ligne et l'automatisation par l'IA via WhatsApp et la synchronisation des stocks."
    },
    gradient: "from-orange-500 to-red-600",
    bgIcon: Cpu,
    highlights: {
      en: [
        "Offline-first PWA architecture ensuring total business continuity during internet outages",
        "Automated WhatsApp Sales Agent using AI for 24/7 order processing and customer support",
        "Dynamic 'Digital Ledger' (Cahier de Dettes) with automated AI credit repayment reminders",
        "Rayon Infini (Infinite Shelf): Real-time catalog sharing and dropshipping between partners",
        "Native integration with M92 hardware for portable POS, QR invoicing, and thermal printing",
        "Multi-store synchronization engine with conflict-resolution for decentralized inventories",
      ],
      fr: [
        "Architecture PWA offline-first garantissant la continuité d'activité sans internet",
        "Agent de vente WhatsApp automatisé par IA pour le support client 24h/7j",
        "Cahier de Dettes numérique dynamique avec rappels de paiement automatisés par IA",
        "Rayon Infini : Partage de catalogue et dropshipping en temps réel entre partenaires",
        "Intégration native avec le matériel M92 pour POS portable et facturation QR",
        "Moteur de synchronisation multi-boutiques avec résolution de conflits d'inventaire",
      ]
    },
    backendTech: ["Node.js", "MongoDB", "RabbitMQ", "WhatsApp API", "LLM / OpenAI", "Docker"],
    frontendTech: ["Next.js (PWA)", "IndexedDB", "Service Workers", "Tailwind CSS", "TanStack Query"],
    featured: true,
    color: "#F97316",
    glowUrl: "rgba(249,115,22,0.15)",
    imageUrl: "/origo.png",
    href: "/projects#origo",
  },
  {
    id: "corp-erp",
    title: "CORP-ERP",
    category: {
      en: "Enterprise ERP & Collaboration",
      fr: "ERP Entreprise & Collaboration"
    },
    year: "2024",
    description: {
      en: "A high-performance Headless ERP & HRIS platform designed for internal corporate management. The system unifies planning, objectives (OKRs), reporting, and document management into a single collaborative ecosystem. Built with a cloud-native mindset, it leverages asynchronous processing and real-time event streaming.",
      fr: "Une plateforme ERP & SIRH Headless haute performance conçue pour la gestion interne des entreprises. Le système unifie la planification, les objectifs (OKR), le reporting et la gestion documentaire dans un seul écosystème collaboratif."
    },
    shortDescription: {
      en: "Cloud-native Headless ERP platform for unified business operations — featuring real-time collaboration, automated reporting, and scalable Kubernetes-ready infrastructure.",
      fr: "Plateforme ERP Headless cloud-native pour des opérations unifiées — collaboration temps réel, reporting automatisé et infrastructure prête pour Kubernetes."
    },
    gradient: "from-violet-600 to-indigo-600",
    bgIcon: Layers,
    highlights: {
      en: [
        "Full Headless architecture with Symfony 7 & API Platform 4",
        "Asynchronous export & mailing pipeline via RabbitMQ queues",
        "Real-time live notifications integrated via Mercure Hub",
        "Complex organizational modeling with Doctrine ORM & MariaDB",
        "Client-side PDF generation & advanced analytics dashboards",
      ],
      fr: [
        "Architecture Full Headless avec Symfony 7 & API Platform 4",
        "Pipeline d'export et d'envoi d'emails asynchrone via RabbitMQ",
        "Notifications en direct intégrées via Mercure Hub",
        "Modélisation organisationnelle complexe avec Doctrine ORM",
        "Génération de PDF côté client et tableaux de bord analytiques avancés",
      ]
    },
    backendTech: ["Symfony 7.2", "API Platform 4", "RabbitMQ", "Mercure", "Docker", "Kubernetes"],
    frontendTech: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Redux", "React Query"],
    featured: false,
    color: "#A855F7",
    glowUrl: "rgba(168,85,247,0.15)",
    imageUrl: "/ptn.png",
    href: "/projects#corp-erp",
  },
  {
    id: "vendor",
    title: "VENDOR",
    category: {
      en: "FoodTech & SaaS",
      fr: "FoodTech & SaaS"
    },
    year: "2024",
    description: {
      en: "A sophisticated multi-tenant SaaS administration platform for restaurant operations. It orchestrates real-time command lifecycles, complex menu catalogs, and multi-currency payment flows via a high-security stateless architecture.",
      fr: "Une plateforme d'administration SaaS multi-tenant sophistiquée pour la gestion de restaurants. Elle orchestre les cycles de commande en temps réel et les paiements multi-devises via une architecture sans état hautement sécurisée."
    },
    shortDescription: {
      en: "Multi-tenant restaurant management ecosystem orchestrating real-time orders, complex catalogs, and secure payment flows via a stateless API-first architecture.",
      fr: "Écosystème de gestion de restaurant multi-tenant orchestrant les commandes en temps réel et les flux de paiement sécurisés via une architecture API-first."
    },
    gradient: "from-amber-500 to-orange-600",
    bgIcon: ShoppingBag,
    highlights: {
      en: [
        "Full Multi-Tenancy: Automatic filtering and isolation across all resources",
        "Stateless JWT Auth with granular RBAC and Doctrine-level security extensions",
        "Event-Driven Payment flow: automatic status transitions and currency conversion",
        "Multipart Media management with absolute URL normalization and VichMapping",
        "Robust CI/CD: Automated build and SSH deployment via GitHub Actions",
      ],
      fr: [
        "Multi-Tenancy complet : isolation automatique des données par client",
        "Authentification JWT avec contrôle d'accès granulaire (RBAC)",
        "Flux de paiement piloté par événements avec conversion de devises",
        "Gestion média multi-parties avec normalisation des URLs",
        "CI/CD robuste : déploiements automatisés via GitHub Actions",
      ]
    },
    backendTech: ["Symfony 8", "API Platform 4.2", "MySQL 8", "Caddy", "Messenger"],
    frontendTech: ["React 18", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS"],
    featured: false,
    color: "#F59E0B",
    glowUrl: "rgba(245,158,11,0.15)",
    imageUrl: "/vendor.png",
    href: "/projects#vendor",
  },
  {
    id: "agp-pact",
    title: "AGP-PACT",
    category: {
      en: "Infrastructure & Governance",
      fr: "Infrastructure & Gouvernance"
    },
    year: "2024",
    description: {
      en: "Full-stack complaint management platform built for the AGP-PACT infrastructure program. The backend delivers a complex, fully auditable business workflow from registration to formal closure. The front-end is a data- and operations-centric web application providing real-time dashboards, operational mapping, analytics reporting, and a seamless UX for case officers and administrators.",
      fr: "Plateforme de gestion des plaintes intégrée pour le programme d'infrastructure AGP-PACT. Le backend assure un flux métier complexe de l'enregistrement à la clôture."
    },
    shortDescription: {
      en: "Full-stack complaint management platform for infrastructure projects — auditable backend workflows with an analytics-driven Next.js 14 front-end, including mapping, PDF reporting and real-time dashboards.",
      fr: "Plateforme complète de gestion des plaintes — workflows auditables, mapping intégré, rapports PDF et tableaux de bord en temps réel."
    },
    gradient: "from-blue-600 to-cyan-500",
    bgIcon: Globe,
    highlights: {
      en: [
        "90% end-to-end workflow automation via backend state machines",
        "50% reduction in average complaint resolution time",
        "100% auditable history — every action logged with full audit trail",
        "Automated merit evaluation & admissibility checks",
        "Real-time analytics dashboards with ApexCharts",
        "Operational cartography with Leaflet / React-Leaflet",
      ],
      fr: [
        "90% d'automatisation des workflows via des machines à états",
        "Réduction de 50% du temps moyen de résolution des plaintes",
        "Historique 100% auditable — chaque action est tracée",
        "Évaluation automatique de la recevabilité des dossiers",
        "Dashboards analytiques en temps réel avec ApexCharts",
        "Cartographie opérationnelle avec Leaflet / React-Leaflet",
      ]
    },
    backendTech: ["Symfony", "Doctrine ORM", "PostgreSQL", "Docker Compose", "Nginx", "Linux"],
    frontendTech: ["Next.js 14", "TypeScript", "Redux Toolkit", "RTK Query", "Leaflet", "ApexCharts"],
    featured: true,
    color: "#38BDF8",
    glowUrl: "rgba(56,189,248,0.15)",
    imageUrl: "/agp.png",
    href: "/projects#agp-pact",
  },
  {
    id: "kyc-manager",
    title: "KYC-MANAGER",
    category: {
      en: "RegTech & Compliance",
      fr: "RegTech & Conformité"
    },
    year: "2024",
    description: {
      en: "Automated KYC/AML management platform engineered for global identity verification and stringent banking compliance. It features a seamless, step-by-step verification front-end with secure document uploads, real-time status tracking, and a robust administrative backend with AI-driven fraud detection and FATF-compliant workflows.",
      fr: "Plateforme de gestion KYC/AML automatisée pour la vérification d'identité mondiale et la conformité bancaire stricte."
    },
    shortDescription: {
      en: "Automated KYC/AML platform for global verification and banking compliance. Featuring AI fraud detection and FATF-compliant workflows.",
      fr: "Plateforme KYC/AML automatisée pour la conformité bancaire. IA de détection de fraude et workflows conformes au GAFI."
    },
    gradient: "from-indigo-600 to-indigo-800",
    bgIcon: ShieldCheck,
    highlights: {
      en: [
        "95% identity verification automation via integrated AI services",
        "70% reduction in total verification and onboarding lead time",
        "100% compliance with FATF & regional African AML standards",
        "Secure step-by-step verification wizard for end-users",
        "Encrypted document storage on AWS S3 with secure preview",
      ],
      fr: [
        "95% d'automatisation de la vérification grâce à l'IA",
        "Gain de temps de 70% sur le processus d'onboarding",
        "100% conforme aux normes GAFI et standards régionaux AML",
        "Assistant de vérification sécurisé pour les utilisateurs",
        "Stockage chiffré des documents sur AWS S3",
      ]
    },
    backendTech: ["Symfony", "RabbitMQ", "PostgreSQL", "AWS S3", "AI Fraud API", "Docker"],
    frontendTech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    featured: false,
    color: "#4F46E5",
    glowUrl: "rgba(79,70,229,0.15)",
    imageUrl: "/kyc.jpg",
    href: "/projects#kyc-manager",
  },
  {
    id: "edu-connect",
    title: "EDU-CONNECT",
    category: {
      en: "EdTech & ERP",
      fr: "EdTech & ERP"
    },
    year: "2024",
    description: {
      en: "A modular SaaS ERP specifically designed for the complete management of academic institutions. From enrollment and grading to billing and multi-channel communication, the platform streamlines the entire educational lifecycle through a Domain-Driven Design (DDD) approach and high-performance asynchronous processes.",
      fr: "Un ERP SaaS modulaire conçu pour la gestion complète des établissements scolaires, de l'inscription à la facturation."
    },
    shortDescription: {
      en: "A modular SaaS ERP for school management. From enrollment to multi-channel communication, streamlining the academic lifecycle.",
      fr: "ERP SaaS modulaire pour la gestion scolaire. Simplification du cycle académique, de l'inscription à la communication multi-canal."
    },
    gradient: "from-emerald-600 to-teal-600",
    bgIcon: BookOpen,
    highlights: {
      en: [
        "Modular architecture inspired by DDD for strict business context separation",
        "Event-Driven notification system (WhatsApp, SMS, Email) via RabbitMQ",
        "Multi-channel integration using Twilio and custom messaging buses",
        "Ultrafast performance via FrankenPHP application server and Caddy",
        "Advanced RBAC security with ultra-granular permission management",
      ],
      fr: [
        "Architecture modulaire inspirée par DDD (Domain-Driven Design)",
        "Système de notification multicanal piloté par événements via RabbitMQ",
        "Intégration native WhatsApp, SMS et Email via Twilio",
        "Performances ultra-rapides avec FrankenPHP et serveur Caddy",
        "Sécurité RBAC avancée avec gestion granulaire des permissions",
      ]
    },
    backendTech: ["Symfony 7.2", "API Platform 4.1", "PHP 8.3", "FrankenPHP", "PostgreSQL", "RabbitMQ"],
    frontendTech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "React Query"],
    featured: false,
    color: "#059669",
    glowUrl: "rgba(5,150,105,0.15)",
    imageUrl: "/educonnect.jpeg",
    href: "/projects#edu-connect",
  },
];
