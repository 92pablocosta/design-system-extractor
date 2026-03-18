/**
 * Letsvibe Design System - React Native Theme
 * * Extracted and normalized from design-system.json.
 * Colors and typography inferred from usage frequency and semantic context.
 */

export const theme = {
  colors: {
    // Brand Colors
    primary: 'rgb(164, 120, 64)',     // Gold/Brown used in CTAs and accents
    success: 'rgb(37, 211, 102)',     // WhatsApp/Green status
    
    // Neutral Scale
    white: 'rgb(255, 255, 255)',
    background: 'rgb(255, 255, 255)',
    backgroundAlt: 'rgb(255, 255, 254)',
    surface: 'rgb(46, 47, 62)',       // Dark surface used in footer/sections
    surfaceDark: 'rgb(41, 45, 52)',
    
    // Text
    textPrimary: 'rgb(41, 45, 52)',   // Main headings/paragraphs
    textSecondary: 'rgb(175, 177, 189)', // Muted text and navigation
    textInverse: 'rgb(255, 255, 255)',
    
    // Accents & Borders
    border: 'rgb(164, 120, 64)',
    overlay: 'rgba(0, 0, 0, 0.3)',
  },

  spacing: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 35,
    section: 150, // Significant section padding found in containers
  },

  typography: {
    families: {
      heading: 'Exo, sans-serif',
      body: 'Open Sans',
      system: 'Tahoma, Verdana, sans-serif',
    },
    sizes: {
      display: 56,
      h1: 35,
      h2: 21,
      h3: 19.6,
      body: 14,
      caption: 11.2,
      tiny: 10,
    },
    weights: {
      thin: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  radius: {
    none: 0,
    sm: 4.2,      // Standard input/form radius
    md: 10,
    lg: 44.8,    // Pill shape used for primary buttons
    full: '50%',
  },

  shadows: {
    // React Native shadow implementation
    none: {
      shadowColor: 'transparent',
      elevation: 0,
    },
    low: {
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 1,
    },
    medium: {
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 15,
      elevation: 5,
    },
    elevated: {
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 30,
      elevation: 10,
    },
    special: {
      shadowColor: 'rgba(7, 94, 84, 0.24)',
      shadowOffset: { width: 1, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 24,
      elevation: 8,
    }
  },

  // Helper for consistent button styles
  buttons: {
    primary: {
      backgroundColor: 'rgb(164, 120, 64)',
      paddingVertical: 11.2,
      paddingHorizontal: 17.92,
      borderRadius: 44.8,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'rgb(255, 255, 255)',
      paddingVertical: 11.2,
      paddingHorizontal: 17.92,
      borderRadius: 44.8,
    }
  }
};