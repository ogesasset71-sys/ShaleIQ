/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        // ScaleIQ STRICT Brand Colors - Black, White, Gold ONLY
                        'scaleiq-black': '#0B0B0B',
                        'scaleiq-white': '#FFFFFF',
                        'scaleiq-gold': '#DCBF62',
                        'scaleiq-gold-dark': '#B89A3C',
                        
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: '#DCBF62', // GOLD, not blue
                                foreground: '#0B0B0B'
                        },
                        secondary: {
                                DEFAULT: '#0B0B0B',
                                foreground: '#FFFFFF'
                        },
                        muted: {
                                DEFAULT: 'hsl(0 0% 15%)',
                                foreground: 'hsl(0 0% 70%)'
                        },
                        accent: {
                                DEFAULT: '#DCBF62', // GOLD
                                foreground: '#0B0B0B'
                        },
                        destructive: {
                                DEFAULT: 'hsl(0 84% 60%)',
                                foreground: 'hsl(0 0% 98%)'
                        },
                        border: '#DCBF62',
                        input: 'hsl(0 0% 20%)',
                        ring: '#DCBF62', // GOLD focus ring, NOT blue
                        chart: {
                                '1': '#DCBF62',
                                '2': '#0B0B0B',
                                '3': 'hsl(0 0% 40%)',
                                '4': '#B89A3C',
                                '5': 'hsl(0 0% 60%)'
                        }
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        'float': {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-20px)' }
                        },
                        'shimmer': {
                                '0%': { backgroundPosition: '-200% center' },
                                '100%': { backgroundPosition: '200% center' }
                        },
                        'glow-pulse': {
                                '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
                                '50%': { opacity: '0.8', transform: 'scale(1.05)' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                        'shimmer': 'shimmer 3s linear infinite',
                        'glow-pulse': 'glow-pulse 4s ease-in-out infinite'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};