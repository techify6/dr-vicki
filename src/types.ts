export interface PillarItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
}

export interface CredentialItem {
  name: string;
  organization: string;
  detail: string;
}

export interface MediaFeature {
  type: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export interface BookingFormData {
  fullName: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  primaryObjective: string;
  timeframe: string;
  notes: string;
}
