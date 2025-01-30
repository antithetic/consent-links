import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

// src/types/social.ts

export type SocialPlatform =
  | "soundcloud"
  | "instagram"
  | "ra"
  | "mixcloud"
  | "threads"
  | "twitter"
  | "custom";

export type CardStyle = {
  background?: string;
  hoverBackground?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;
  shadow?: string;
  iconBackground?: string;
  iconHoverBackground?: string;
  iconTextColor?: string;
  padding?: string;
};

export interface SocialLink {
  platform: SocialPlatform;
  username: string;
  url: string;
  label?: string;
  icon?: string;
  active: boolean;
  customStyle?: CardStyle;
  customIconStyle?: CardStyle;
  bgPattern?: {
    type: "dots" | "lines" | "squares" | "noise";
    color?: string;
    opacity?: string;
  };
}
