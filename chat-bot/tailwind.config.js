module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Grounding sage green for trust and stability
        primary: {
          DEFAULT: "#4A7C59", // green-700
          50: "#F0F5F2", // green-50
          100: "#D9E7DD", // green-100
          200: "#B8D4C1", // green-200
          300: "#8FB89E", // green-300
          400: "#6A9D7E", // green-400
          500: "#4A7C59", // green-500
          600: "#3D6649", // green-600
          700: "#315139", // green-700
          800: "#253D2B", // green-800
          900: "#1A2A1E", // green-900
        },
        // Secondary Colors - Supporting therapeutic warmth and growth
        secondary: {
          DEFAULT: "#6B8E7A", // teal-600
          50: "#F2F6F4", // teal-50
          100: "#DFE9E3", // teal-100
          200: "#C4D7CB", // teal-200
          300: "#A1BFAD", // teal-300
          400: "#86A793", // teal-400
          500: "#6B8E7A", // teal-500
          600: "#587564", // teal-600
          700: "#465D4F", // teal-700
          800: "#36463D", // teal-800
          900: "#26312B", // teal-900
        },
        // Accent Colors - Gentle encouragement and positive moments
        accent: {
          DEFAULT: "#E8B86D", // amber-400
          50: "#FDF8F0", // amber-50
          100: "#F9EDDB", // amber-100
          200: "#F4DCBC", // amber-200
          300: "#EEC894", // amber-300
          400: "#E8B86D", // amber-400
          500: "#D9A04E", // amber-500
          600: "#B8843A", // amber-600
          700: "#8F672D", // amber-700
          800: "#6B4D22", // amber-800
          900: "#4A3518", // amber-900
        },
        // Background Colors - Clean breathing space for content focus
        background: {
          DEFAULT: "#FAFBFA", // gray-50
          alt: "#F5F7F5", // gray-100
        },
        // Surface Colors - Subtle elevation without harsh shadows
        surface: {
          DEFAULT: "#F5F7F5", // gray-100
          elevated: "#FFFFFF", // white
          hover: "#EEF1EE", // gray-200
        },
        // Text Colors - Readable warmth without stark black
        text: {
          primary: "#2D3E2F", // gray-900
          secondary: "#5A6B5C", // gray-600
          tertiary: "#7A8A7C", // gray-500
          disabled: "#A5B3A7", // gray-400
          inverse: "#FFFFFF", // white
        },
        // Success Colors - Hopeful progress without overwhelming celebration
        success: {
          DEFAULT: "#7BA05B", // green-500
          light: "#A8C78E", // green-300
          dark: "#5D7D44", // green-700
        },
        // Warning Colors - Caring concern without alarm
        warning: {
          DEFAULT: "#D4A574", // orange-400
          light: "#E5C19F", // orange-300
          dark: "#B38854", // orange-600
        },
        // Error Colors - Supportive redirection rather than harsh correction
        error: {
          DEFAULT: "#C17B7B", // red-400
          light: "#D9A3A3", // red-300
          dark: "#A05E5E", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E9E5", // gray-300
          light: "#F0F3F0", // gray-200
          focus: "#4A7C59", // primary
        },
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(74, 124, 89, 0.06)',
        'md': '0 2px 8px rgba(74, 124, 89, 0.08)',
        'lg': '0 4px 16px rgba(74, 124, 89, 0.10)',
        'xl': '0 8px 24px rgba(74, 124, 89, 0.12)',
        'therapeutic': '0 2px 8px rgba(74, 124, 89, 0.08)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      transitionDuration: {
        'base': '300ms',
        'fast': '150ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'therapeutic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [],
}