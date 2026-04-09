export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export interface NavDictionary {
  home: string;
  projects: string;
  services: string;
  about: string;
  contact: string;
  start_project: string;
  start_short: string;
  logo_alt: string;
  language: string;
  menu: string;
}

export interface HeroLabelsDictionary {
  digital_identity: string;
  global_protocol: string;
  verification_trust: string;
  infra_scale: string;
  multi_region_active: string;
  server_load: string;
  core_engine: string;
  optimized_runtime: string;
}

export interface HeroDictionary {
  title: string;
  subtitle: string;
  description: string;
  cta_primary: string;
  cta_secondary: string;
  labels: HeroLabelsDictionary;
}

export interface ServicesDictionary {
  title_prefix: string;
  title_highlight: string;
  explore: string;
  learn_more: string;
  cta_title_prefix: string;
  cta_title_highlight: string;
  cta_description: string;
  cta_button: string;
}

export interface ProjectsDictionary {
  title: string;
  view_all: string;
  featured: string;
  view_details: string;
  year: string;
  highlights: string;
  tech_stack: string;
}

export interface FooterDictionary {
  tagline: string;
  links: string;
  legal: string;
  privacy: string;
  terms: string;
  all_rights_reserved: string;
  logo_alt: string;
  description: string;
  services_title: string;
  company_title: string;
  custom_software: string;
  digital_identity: string;
  cloud_solutions: string;
  business_software: string;
  about_us: string;
  projects: string;
  contact: string;
  get_in_touch: string;
}

export interface CtaDictionary {
  title_prefix: string;
  title_highlight: string;
  description: string;
  primary_button: string;
  secondary_button: string;
}

export interface FeatureItemDictionary {
  title: string;
  description: string;
}

export interface FeaturesDictionary {
  title_prefix: string;
  title_highlight: string;
  description: string;
  items: FeatureItemDictionary[];
}

export interface ContactFormValidationDictionary {
  name_required: string;
  email_required: string;
  email_invalid: string;
  message_required: string;
}

export interface ContactFormDictionary {
  validation: ContactFormValidationDictionary;
  success_title: string;
  success_description: string;
  name_label: string;
  email_label: string;
  company_label: string;
  optional: string;
  company_placeholder: string;
  message_label: string;
  message_placeholder: string;
  submit_loading: string;
  submit_idle: string;
}

export interface ServicesPageDictionary {
  hero: {
    title_prefix: string;
    title_highlight: string;
    description: string;
  };
  features_aria_label: string;
  icon_aria_label: string;
}

export interface ProjectsPageDictionary {
  hero: {
    title_prefix: string;
    title_highlight: string;
    description: string;
  };
  key_results: string;
  backend: string;
  frontend: string;
  discuss_project: string;
}

export interface ContactPageDictionary {
  hero: {
    title_prefix: string;
    title_highlight: string;
    description: string;
  };
  intro: {
    title_prefix: string;
    title_highlight: string;
    description: string;
  };
  info_labels: {
    email: string;
    location: string;
    website: string;
  };
  form_section: {
    title: string;
    description: string;
  };
}

export interface AboutPageMissionStatDictionary {
  value: string;
  label: string;
}

export interface AboutPageMissionDictionary {
  title_prefix: string;
  title_highlight: string;
  paragraphs: string[];
  stats: AboutPageMissionStatDictionary[];
}

export interface AboutPageValuesDictionary {
  title_prefix: string;
  title_highlight: string;
  description: string;
  items: FeatureItemDictionary[];
}

export interface AboutPageTeamMemberDictionary {
  name: string;
  role: string;
  description: string;
  initials: string;
}

export interface AboutPageDictionary {
  hero: {
    title_prefix: string;
    title_highlight: string;
    description: string;
  };
  mission: AboutPageMissionDictionary;
  values: AboutPageValuesDictionary;
  team: {
    title: string;
    members: AboutPageTeamMemberDictionary[];
  };
  cta: {
    title_prefix: string;
    title_highlight: string;
    description: string;
    button: string;
  };
}

export interface MetadataPageDictionary {
  title: string;
  description: string;
}

export interface MetadataDictionary {
  site: MetadataPageDictionary;
  pages: {
    about: MetadataPageDictionary;
    projects: MetadataPageDictionary;
    services: MetadataPageDictionary;
    contact: MetadataPageDictionary;
  };
}

export interface Dictionary {
  nav: NavDictionary;
  hero: HeroDictionary;
  services: ServicesDictionary;
  projects: ProjectsDictionary;
  footer: FooterDictionary;
  cta: CtaDictionary;
  features: FeaturesDictionary;
  contact_form: ContactFormDictionary;
  services_page: ServicesPageDictionary;
  projects_page: ProjectsPageDictionary;
  contact_page: ContactPageDictionary;
  about_page: AboutPageDictionary;
  metadata: MetadataDictionary;
}
