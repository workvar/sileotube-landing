import { ReactNode } from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

export interface StatProps {
  value: string;
  label: string;
}

