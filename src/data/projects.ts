export interface Project {
    id: number
    title: string
    description: { en: string; es: string }
    image: string
    liveUrl: string
    featured?: boolean
    tags?: string[]
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Invitta',
        description: {
            en: 'Web platform for creating digital invitations with RSVP management, seating charts, and event coordination tools.',
            es: 'Plataforma web para crear invitaciones digitales con gestión de confirmaciones, asignación de asientos y herramientas de coordinación de eventos.',
        },
        image: 'https://placehold.co/600x400/FDE047/000000?text=Invitta',
        liveUrl: 'https://invitta.app',
        featured: true,
        tags: ['Next.js', 'Supabase', 'Web'],
    },
    {
        id: 2,
        title: 'Moira: Manifestation Coach',
        description: {
            en: 'AI-powered manifestation and mindset coaching app to help users achieve their goals.',
            es: 'App de coaching de manifestación y mentalidad con IA para ayudar a los usuarios a alcanzar sus metas.',
        },
        image: 'https://placehold.co/600x400/000000/FDE047?text=Moira',
        liveUrl: 'https://apps.apple.com/us/app/moira-manifestation-journal/id6751951846',
        featured: true,
        tags: ['Flutter', 'Firebase', 'AI Companion'],
    },
    {
        id: 3,
        title: 'Ribeye: Carnivore Diet Tracker',
        description: {
            en: 'Nutrition tracker built for the carnivore diet - log meals, macros and stay on track.',
            es: 'Rastreador de nutrición para la dieta carnívora - registra comidas, macros y mantente en curso.',
        },
        image: 'https://placehold.co/600x400/FDE047/000000?text=Ribeye',
        liveUrl: 'https://apps.apple.com/us/app/ribeye-carnivore-diet/id6754494858',
        featured: true,
        tags: ['Flutter', 'Supabase', 'Mobile'],
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
        tags: ['React', 'E-commerce', 'Web'],
    },
    {
        id: 7,
        title: 'LEF Studio',
        description: {
            en: 'Creative production studio with a fully equipped multi-use space - portrait & commercial photography, video production, and podcast recording.',
            es: 'Estudio de producción creativa con un espacio multiuso completamente equipado - fotografía de retratos y comercial, producción de video y grabación de podcast.',
        },
        image: 'https://placehold.co/600x400/111111/FFFFFF?text=LEF+Studio',
        liveUrl: 'https://www.lefstudio.com/',
        tags: ['Next.js', 'Web'],
    },
    {
        id: 8,
        title: 'Hierro Negro',
        description: {
            en: 'E-commerce platform and admin panel for a construction materials retailer - hardware, steel, and building supplies sold wholesale and retail.',
            es: 'Plataforma de e-commerce y panel de administración para ferretería y materiales de construcción - hierro, herramientas e insumos al detal y al mayor.',
        },
        image: 'https://placehold.co/600x400/1a1a1a/FDE047?text=Hierro+Negro',
        liveUrl: 'https://hierronegro-react-13w.pages.dev/',
        tags: ['React', 'E-commerce', 'Web'],
    },
]
