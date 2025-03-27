import {
  Icon,
  IconBallpen,
  IconBrandAndroid,
  IconBrandAws,
  IconBrandDebian,
  IconBrandDiscord,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandKotlin,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconCloudComputing,
  IconProps,
  IconRocket,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: IconBrandReact },
      { name: "JavaScript / TypeScript", icon: IconBrandTypescript },
      { name: "TailwindCSS", icon: IconBrandTailwind },
      { name: "HTML / CSS", icon: IconBrandHtml5 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: IconBrandNodejs },
      { name: "Express", icon: IconCloudComputing },
      { name: "Appwrite", icon: IconBallpen },
      { name: "Firebase", icon: IconBrandFirebase },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", icon: IconBrandReactNative },
      { name: "Android (Java)", icon: IconBrandAndroid },
      { name: "Expo", icon: IconRocket },
      { name: "Flutter", icon: IconBrandFlutter },
      { name: "Android (Kotlin)", icon: IconBrandKotlin },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git / GitHub", icon: IconBrandGithub },
      { name: "Docker", icon: IconBrandDocker },
      { name: "AWS", icon: IconBrandAws },
      { name: "Linux", icon: IconBrandDebian },
      { name: "Figma", icon: IconBrandFigma },
      { name: "Discord", icon: IconBrandDiscord },
    ],
  },
];
