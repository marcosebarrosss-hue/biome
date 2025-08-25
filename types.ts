import React from 'react';

export interface Avatar {
  imageUrl: string;
  skinColor?: string;
  hairColor?: string;
  hairStyle?: 'curto' | 'longo' | 'cacheado' | 'black-power';
}

export interface Item {
  id: string;
  name:string;
  description: string;
  type: 'clothing' | 'equipment';
  profession?: Profession;
  biome: BiomeId;
  imageUrl: string;
  wearableImageUrl?: string;
  wearableStyle?: React.CSSProperties;
}

export interface User {
  id: string;
  username: string;
  password?: string; // Should not be stored long term, but needed for creation/update
  role: 'player';
  avatar?: Avatar;
  profession?: Profession;
  xp: number;
  level: number;
  completedBiomes: BiomeId[];
  inventory: string[]; // array of item IDs
}

export interface Admin {
  id: string;
  username: string;
  password?: string;
  role: 'admin';
}

export enum BiomeId {
  Oceano = 'oceano',
  Litoral = 'litoral',
  Amazonia = 'amazonia',
  Cerrado = 'cerrado',
  Caatinga = 'caatinga',
  MataAtlantica = 'mata_atlantica',
  Pantanal = 'pantanal',
  Pampa = 'pampa'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface BiomeDetail {
  text: string;
  imageUrl?: string;
  videoUrl?: string; // e.g., YouTube URL
}

export interface Biome {
  id: BiomeId;
  name: string;
  description: string;
  states: BiomeDetail;
  culture: BiomeDetail;
  economy: BiomeDetail;
  conservation: {
    status: BiomeDetail;
    threatenedSpecies: string[];
  };
  quiz: QuizQuestion[];
  rewardItemId: string;
  unlocks: BiomeId | null;
  mapPosition: { top: string; left: string; };
  svgPathD: string;
}

export type Profession = 'Biólogo' | 'Enfermeiro' | 'Médico' | 'Engenheiro Civil' | 'Psicólogo' | 'Professor';

interface ComponentBounds {
  width: string;
  height: string;
  x?: number;
  y?: number;
}

export interface AppTheme {
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
  adminAvatarUrl: string;
  
  mapImageUrl: string;
  mapImageObjectFit: 'cover' | 'contain';
  mapImageObjectPosition: string; // e.g. '50% 50%'
  mapImageScale: number; // e.g. 1.0 for 100% zoom

  dashboardBackgroundImageUrl: string;
  dashboardBackgroundSize: string; // 'cover', 'contain', or '150%'
  dashboardBackgroundPosition: string; // e.g. '50% 50%'

  loginBackgroundImageUrl: string;
  loginBackgroundSize: string; // 'cover', 'contain', or '150%'
  loginBackgroundPosition: string; // e.g. '50% 50%'

  registerBackgroundImageUrl: string;
  registerBackgroundSize: string; // 'cover', 'contain', or '150%'
  registerBackgroundPosition: string; // e.g. '50% 50%'

  placeholderImageUrl: string;
  mapHeight: 'h-[50vh]' | 'h-[70vh]' | 'h-full';
  biomeModuleBounds: ComponentBounds;
  managementModalBounds: ComponentBounds;
  adminToolbarBounds: ComponentBounds;
}

export enum View {
  Loading = 'loading',
  Login = 'login',
  Register = 'register',
  AvatarCreator = 'avatarCreator',
  GameDashboard = 'gameDashboard'
}