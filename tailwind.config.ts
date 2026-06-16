import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          elevated: "var(--color-bg-elevated)",
          surface: "var(--color-bg-surface)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          muted: "var(--color-accent-muted)",
          secondary: "var(--color-accent-secondary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        border: {
          DEFAULT: "var(--color-border)",
        },
        success: "var(--color-success)",
        main: { "50": "#51cf91", "100": "#4A3D8D" },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "heading-1": [
          "var(--text-heading-1)",
          { lineHeight: "var(--text-heading-1-lh)" },
        ],
        "heading-2": [
          "var(--text-heading-2)",
          { lineHeight: "var(--text-heading-2-lh)" },
        ],
        "heading-3": [
          "var(--text-heading-3)",
          { lineHeight: "var(--text-heading-3-lh)" },
        ],
        body: ["var(--text-body)", { lineHeight: "var(--text-body-lh)" }],
        caption: [
          "var(--text-caption)",
          { lineHeight: "var(--text-caption-lh)" },
        ],
      },
      spacing: {
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "7": "var(--space-7)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
      },
      maxWidth: {
        container: "96rem",
      },
    },
  },
  plugins: [],
};

export default config;
