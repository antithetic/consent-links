function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
		  colors: {
			main: 'var(--main)',
			overlay: 'var(--overlay)',
			bg: 'var(--bg)',
			bw: 'var(--bw)',
			blank: 'var(--blank)',
			text: 'var(--text)',
			mtext: 'var(--mtext)',
			border: 'var(--border)',
			ring: 'var(--ring)',
			ringOffset: 'var(--ring-offset)',
			// Soundcloud Theme
			soundcloud: {
				DEFAULT: '#ff5500',
				hover: '#ff7733',
				text: '#ffffff',
				border: '#000000',
			  },
			  // Instagram Theme
			  instagram: {
				DEFAULT: '#E4405F',
				hover: '#e65d77',
				text: '#ffffff',
				border: '#000000',
			  },
			  // Resident Advisor Theme
			  ra: {
				DEFAULT: '#000000',
				hover: '#333333',
				text: '#ffffff',
				border: '#ffffff',
			  },
			  // Mixcloud Theme
			  mixcloud: {
				DEFAULT: '#52aad8',
				hover: '#73bce0',
				text: '#ffffff',
				border: '#000000',
			  },
			  // Threads Theme
			  threads: {
				DEFAULT: '#000000',
				hover: '#333333',
				text: '#ffffff',
				border: '#ffffff',
			  },
			  // Twitter Theme
			  twitter: {
				DEFAULT: '#1DA1F2',
				hover: '#4db5f5',
				text: '#ffffff',
				border: '#000000',
			  },
			
			secondaryBlack: '#212121', 
		  },
		  borderRadius: {
			base: '0px'
		  },
		  boxShadow: {
			shadow: 'var(--shadow)'
		  },
		  translate: {
			boxShadowX: '5px',
			boxShadowY: '5px',
			reverseBoxShadowX: '-5px',
			reverseBoxShadowY: '-5px',
		  },
		  fontWeight: {
			base: '500',
			heading: '800',
		  },
		},
	  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
