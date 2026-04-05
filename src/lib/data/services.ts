import { 
  Code2, 
  ShieldCheck, 
  Cloud, 
  Building2, 
  LucideIcon 
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  fullTitle: { en: string; fr: string };
  description: { en: string; fr: string };
  fullDescription: { en: string; fr: string };
  colorClass: string;
  colorHex: string;
  bgGlow: string;
  iconBg: string;
  borderGlow: string;
  glowUrl: string;
  bgImage: string;
  features: { en: string[]; fr: string[] };
}

export const services: Service[] = [
  {
    id: "software",
    icon: Code2,
    title: { 
      en: "Engineering", 
      fr: "Ingénierie" 
    },
    subtitle: { 
      en: "Custom Software", 
      fr: "Logiciel sur Mesure" 
    },
    fullTitle: { 
      en: "Custom Software Development", 
      fr: "Développement de Logiciels Sur Mesure" 
    },
    description: {
      en: "High-performance web and mobile applications built with modern stacks for maximum scalability.",
      fr: "Applications web et mobiles haute performance conçues avec des stacks modernes pour une scalabilité maximale."
    },
    fullDescription: {
      en: "We design and build high-performance web applications, feature-rich mobile apps, and robust API backends tailored to your exact business requirements. Our engineering team blends clean architecture with modern tooling to deliver software that scales.",
      fr: "Nous concevons et développons des applications web haute performance, des applications mobiles riches en fonctionnalités et des backends API robustes adaptés à vos besoins métier précis. Notre équipe technique allie architecture propre et outils modernes pour livrer des logiciels évolutifs."
    },
    colorClass: "text-blue-500",
    colorHex: "#38BDF8",
    bgGlow: "group-hover:bg-blue-500/5",
    iconBg: "bg-blue-50 text-blue-600",
    borderGlow: "group-hover:border-blue-200",
    glowUrl: "rgba(56,189,248,0.15)",
    bgImage: "/software_dev_bg.jpg",
    features: {
      en: [
        "Responsive web applications (React, Next.js, Vue, SvelteKit)",
        "Cross-platform & native mobile apps (React Native, Flutter, Swift)",
        "REST APIs & GraphQL backends (Node.js, Python, Go, Rust)",
        "AI Integration & LLMs (OpenAI, LangChain, Custom Models)",
        "Real-time systems with WebSockets & event streaming (Kafka, Redis)",
        "Database design & optimization (PostgreSQL, MongoDB, Prisma)",
        "Serverless architectures & Microservices",
        "Legacy system modernization & migration",
      ],
      fr: [
        "Applications web responsives (React, Next.js, Vue, SvelteKit)",
        "Applications mobiles multiplateformes & natives (React Native, Flutter, Swift)",
        "Backends API REST & GraphQL (Node.js, Python, Go, Rust)",
        "Intégration d'Intelligence Artificielle (OpenAI, LangChain, LLMs)",
        "Systèmes temps réel avec WebSockets & streaming d'événements (Kafka, Redis)",
        "Conception & optimisation de bases de données (PostgreSQL, MongoDB, Prisma)",
        "Architectures Serverless & Microservices",
        "Modernisation & migration de systèmes existants",
      ]
    },
  },
  {
    id: "identity",
    icon: ShieldCheck,
    title: { 
      en: "Identity", 
      fr: "Identité" 
    },
    subtitle: { 
      en: "Verification Systems", 
      fr: "Systèmes de Vérification" 
    },
    fullTitle: { 
      en: "Digital Identity Solutions", 
      fr: "Solutions d'Identité Numérique" 
    },
    description: {
      en: "Secure KYC/AML infrastructure designed for global compliance and seamless user onboarding.",
      fr: "Infrastructure KYC/AML sécurisée conçue pour la conformité mondiale et une intégration utilisateur fluide."
    },
    fullDescription: {
      en: "We build end-to-end digital identity platforms that help businesses meet regulatory requirements without friction. From onboarding automation with KYC to continuous AML transaction monitoring, our solutions are built for regulated industries.",
      fr: "Nous construisons des plateformes d'identité numérique de bout en bout qui aident les entreprises à répondre aux exigences réglementaires sans friction. De l'automatisation de l'onboarding avec KYC au monitoring continu des transactions AML, nos solutions sont conçues pour les industries régulées."
    },
    colorClass: "text-sky-500",
    colorHex: "#818CF8",
    bgGlow: "group-hover:bg-sky-500/5",
    iconBg: "bg-sky-50 text-sky-600",
    borderGlow: "group-hover:border-sky-200",
    glowUrl: "rgba(129,140,248,0.15)",
    bgImage: "/digital_identity_bg.jpg",
    features: {
      en: [
        "KYC (Know Your Customer) onboarding flows",
        "KYB (Know Your Business) verification systems",
        "AML (Anti-Money Laundering) transaction monitoring",
        "KYT (Know Your Transaction) analytics",
        "Biometric verification & liveness detection",
        "Regulatory reporting dashboards",
      ],
      fr: [
        "Flux d'onboarding KYC (Know Your Customer)",
        "Systèmes de vérification KYB (Know Your Business)",
        "Monitoring des transactions AML (Anti-Maltraitance)",
        "Analyses KYT (Know Your Transaction)",
        "Vérification biométrique & détection de vivacité",
        "Tableaux de bord de reporting réglementaire",
      ]
    },
  },
  {
    id: "cloud",
    icon: Cloud,
    title: { 
      en: "Cloud", 
      fr: "Cloud" 
    },
    subtitle: { 
      en: "Infrastructure", 
      fr: "Infrastructure" 
    },
    fullTitle: { 
      en: "Cloud Solutions", 
      fr: "Solutions Cloud" 
    },
    description: {
      en: "Resilient cloud architecture and DevOps automation that powers your digital backbone 24/7.",
      fr: "Architecture cloud résiliente et automatisation DevOps pour propulser votre infrastructure numérique 24h/7j."
    },
    fullDescription: {
      en: "From designing cloud-native architectures to automating deployments with CI/CD pipelines, we help you move to the cloud or optimize your existing infrastructure. We work across AWS, GCP, and Azure.",
      fr: "De la conception d'architectures cloud natives à l'automatisation des déploiements avec des pipelines CI/CD, nous vous aidons à migrer vers le cloud ou à optimiser votre infrastructure existante. Nous travaillons sur AWS, GCP et Azure."
    },
    colorClass: "text-indigo-500",
    colorHex: "#A78BFA",
    bgGlow: "group-hover:bg-indigo-500/5",
    iconBg: "bg-indigo-50 text-indigo-600",
    borderGlow: "group-hover:border-indigo-200",
    glowUrl: "rgba(167,139,250,0.15)",
    bgImage: "/cloud_solutions_bg.jpg",
    features: {
      en: [
        "Cloud architecture design (AWS, GCP, Azure)",
        "Kubernetes & container orchestration",
        "CI/CD pipeline setup (GitHub Actions, GitLab, Jenkins)",
        "Infrastructure as Code (Terraform, Pulumi)",
        "Monitoring, logging & alerting (Datadog, Prometheus)",
        "Cost optimization & performance tuning",
      ],
      fr: [
        "Conception d'architecture cloud (AWS, GCP, Azure)",
        "Orchestration Kubernetes & conteneurs",
        "Mise en place de pipelines CI/CD (GitHub Actions, GitLab)",
        "Infrastructure as Code (Terraform, Pulumi)",
        "Monitoring, logging & alertes (Datadog, Prometheus)",
        "Optimisation des coûts & réglage de performance",
      ]
    },
  },
  {
    id: "business",
    icon: Building2,
    title: { 
      en: "Automation", 
      fr: "Automatisation" 
    },
    subtitle: { 
      en: "Enterprise Tools", 
      fr: "Outils d'Entreprise" 
    },
    fullTitle: { 
      en: "Business Software", 
      fr: "Logiciels de Gestion" 
    },
    description: {
      en: "Intelligent process automation and custom ERP solutions to streamline complex business operations.",
      fr: "Automatisation intelligente des processus et solutions ERP sur mesure pour simplifier les opérations complexes."
    },
    fullDescription: {
      en: "We build custom enterprise tools and workflow automation solutions that replace inefficient manual processes. Whether you need an internal dashboard, an ERP module, or a complete process automation system, we deliver software that saves time and money.",
      fr: "Nous créons des outils d'entreprise sur mesure et des solutions d'automatisation de workflow pour remplacer les processus manuels inefficaces. Que vous ayez besoin d'un dashboard interne, d'un module ERP ou d'un système complet d'automatisation, nous livrons des résultats concrets."
    },
    colorClass: "text-violet-500",
    colorHex: "#F472B6",
    bgGlow: "group-hover:bg-violet-500/5",
    iconBg: "bg-violet-50 text-violet-600",
    borderGlow: "group-hover:border-violet-200",
    glowUrl: "rgba(244,114,182,0.15)",
    bgImage: "/business_software_bg.jpg",
    features: {
      en: [
        "Custom ERP & CRM integrations",
        "Internal management dashboards",
        "Workflow & approval automation",
        "Data pipelines & reporting tools",
        "HR, payroll & operations software",
        "Business intelligence & analytics platforms",
      ],
      fr: [
        "Intégrations ERP & CRM sur mesure",
        "Tableaux de bord de gestion interne",
        "Automatisation des workflows & approbations",
        "Pipelines de données & outils de reporting",
        "Logiciels RH, paie & opérations",
        "Plateformes de business intelligence & analytique",
      ]
    },
  },
];
