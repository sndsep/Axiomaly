// src/components/onboarding/constants.ts

export const VFX_SPECIALIZATIONS = [
  { id: '3d-modeling', label: '3D Modeling' },
  { id: 'animation', label: 'Character Animation' },
  { id: 'compositing', label: 'VFX Compositing' },
  { id: 'texturing', label: 'Texturing & Materials' },
  { id: 'lighting', label: 'Lighting & Rendering' },
  { id: 'fx', label: 'FX & Simulation' }
] as const;

export const SKILL_LEVELS = [
  { 
    value: 'beginner',
    label: 'Beginner',
    description: 'Little to no experience'
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
    description: 'Some experience, seeking to improve'
  },
  {
    value: 'advanced',
    label: 'Advanced',
    description: 'Experienced, looking to specialize'
  }
] as const;

export const LEARNING_GOALS = [
  { id: 'career-change', label: 'Career Change into VFX' },
  { id: 'skill-improvement', label: 'Improve Current Skills' },
  { id: 'hobby', label: 'Personal Projects / Hobby' },
  { id: 'certification', label: 'Professional Certification' },
  { id: 'portfolio', label: 'Build Portfolio' },
  { id: 'industry-ready', label: 'Become Industry Ready' }
] as const;

export const TIME_COMMITMENT_OPTIONS = [
  { value: 5, label: '5h' },
  { value: 10, label: '10h' },
  { value: 20, label: '20h' },
  { value: 30, label: '30h' },
  { value: 40, label: '40h' }
] as const;

export const LEARNING_STYLES = [
  { id: 'visual', label: 'Visual Learning' },
  { id: 'practical', label: 'Hands-on Practice' },
  { id: 'theoretical', label: 'Theory & Concepts' },
  { id: 'collaborative', label: 'Group Projects' },
  { id: 'self-paced', label: 'Self-Paced Study' },
  { id: 'mentored', label: 'Mentored Learning' }
] as const;

export const CAREER_PATH_OPTIONS = {
  SHORT_COURSE: {
    title: 'Short Course',
    description: 'Master specific skills fast',
    icon: 'Rocket',
    duration: '1-3 months per course',
    focus: 'Specific VFX skills',
    outcome: 'Course certificates',
  },
  DEGREE_PROGRAM: {
    title: 'Degree Program',
    description: 'Become a complete VFX artist',
    icon: 'GraduationCap',
    duration: '12-24 months program',
    focus: 'Complete VFX education',
    outcome: 'Professional degree',
  },
} as const;