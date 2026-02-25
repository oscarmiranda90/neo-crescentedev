import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#FDE047',
                mainAccent: '#f5d011',
                overlay: 'rgba(0,0,0,0.8)',

                bg: '#FFFBF0',
                text: '#000000',
                border: '#000000',

                darkBg: '#1a1a1a',
                darkText: '#eeeeee',
                darkBorder: '#000000',

                secondaryBlack: '#212121',
            },
            borderRadius: {
                base: '5px',
            },
            boxShadow: {
                light: '4px 4px 0px 0px rgba(0,0,0,1)',
                dark: '4px 4px 0px 0px rgba(255,255,255,1)',
            },
            translate: {
                boxShadowX: '4px',
                boxShadowY: '4px',
                reverseBoxShadowX: '-4px',
                reverseBoxShadowY: '-4px',
            },
            fontWeight: {
                base: '500',
                heading: '700',
            },
            fontFamily: {
                sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}

export default config
