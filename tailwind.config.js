module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 经典红黑配色系统 - 与logo完美呼应
        'primary-glow': '#DC2626',      // 与logo红色一致
        'primary-light': '#FF4444',     // 稍亮的红色
        'primary-highlight': '#FF3333', // 更亮的红色强调
        
        // 背景色系统 - 与logo黑色背景一致
        'bg-primary': '#000000',        // 纯黑，与logo背景一致
        'bg-secondary': '#0A0A0A',     // 稍亮的黑色
        
        // 文字色系统 - 与logo白色文字一致
        'text-primary': '#FFFFFF',      // 纯白，与logo文字一致
        'text-secondary': '#CCCCCC',    // 浅灰色
        
        // 功能色
        'accent': '#DC2626',
        'accent-light': '#FF4444',
        
        // Logo红色 - 精确匹配
        'logo-red': '#DC2626',
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(circle at center, rgba(220, 38, 38, 0.2) 0%, rgba(255, 68, 68, 0.1) 20%, rgba(255, 51, 51, 0.05) 40%, rgba(0, 0, 0, 0.9) 70%, rgba(0, 0, 0, 1) 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'HarmonyOS Sans', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-subtitle': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'hero-description': ['1.125rem', { lineHeight: '1.6' }],
      },
      animation: {
        'breathe': 'breathe 1.5s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 30px rgba(255, 184, 74, 0.4)' },
          '100%': { boxShadow: '0 0 60px rgba(255, 184, 74, 0.8)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
