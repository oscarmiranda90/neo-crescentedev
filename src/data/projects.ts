export interface Project {
    id: number
    title: string
    description: { en: string; es: string }
    image: string
    liveUrl: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'RepSet.fit',
        description: {
            en: 'Fitness tracking app for strength training — log workouts, track PRs, and crush your goals.',
            es: 'App de fitness para entrenamiento de fuerza — registra rutinas, sigue tus marcas y alcanza tus metas.',
        },
        image: 'https://placehold.co/600x400/FDE047/000000?text=RepSet.fit',
        liveUrl: 'https://repset.fit',
    },
    {
        id: 2,
        title: 'Moira: Manifestation Coach',
        description: {
            en: 'AI-powered manifestation and mindset coaching app to help users achieve their goals.',
            es: 'App de coaching de manifestación y mentalidad con IA para ayudar a los usuarios a alcanzar sus metas.',
        },
        image: 'https://placehold.co/600x400/000000/FDE047?text=Moira',
        liveUrl: 'https://trymoira.app/',
    },
    {
        id: 3,
        title: 'Ribeye: Carnivore Diet Tracker',
        description: {
            en: 'Nutrition tracker built for the carnivore diet — log meals, macros and stay on track.',
            es: 'Rastreador de nutrición para la dieta carnívora — registra comidas, macros y mantente en curso.',
        },
        image: 'https://placehold.co/600x400/FDE047/000000?text=Ribeye',
        liveUrl: '/ribeye',
    },
    {
        id: 4,
        title: 'Bolsito.app',
        description: {
            en: 'Collective savings and credit platform — manage group finances with transparency.',
            es: 'Plataforma de crédito y ahorro colectivo — administra las finanzas grupales con transparencia.',
        },
        image: 'https://placehold.co/600x400/000000/FDE047?text=Bolsito',
        liveUrl: 'https://bolsito.app',
    },
    {
        id: 5,
        title: 'Dougsoluciones.com',
        description: {
            en: 'E-commerce and catalog platform for a clinical laboratory supply company. Sells reagents, consumables, and diagnostic equipment to labs across Venezuela.',
            es: 'Plataforma de e-commerce y catálogo para una empresa de insumos de laboratorio clínico. Vende reactivos, consumibles y equipos de diagnóstico a laboratorios en Venezuela.',
        },
        image: 'https://placehold.co/600x400/FDE047/000000?text=DougSoluciones',
        liveUrl: 'https://www.dougsoluciones.com',
    },
    {
        id: 6,
        title: 'Venequian',
        description: {
            en: 'Icon library with Venezuelan cultural inspiration. A growing set of illustrated icons rooted in the colors, symbols, and spirit of Venezuela.',
            es: 'Librería de iconos con inspiración venezolana. Un conjunto creciente de iconos ilustrados basados en los colores, símbolos y espíritu de Venezuela.',
        },
        image: 'https://placehold.co/600x400/000000/FDE047?text=Venequian',
        liveUrl: 'https://venequian.com/',
    },
]
