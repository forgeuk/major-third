const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: ["class"],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": theme('colors.black'),
						"--tw-prose-headings": theme('colors.black'),
						"--tw-prose-lead": theme('colors.black'),
						"--tw-prose-links": theme('colors.black'),
						"--tw-prose-bold": theme('colors.black'),
						"--tw-prose-counters": theme('colors.black'),
						"--tw-prose-bullets": theme('colors.black'),
						"--tw-prose-hr": theme('colors.black'),
						"--tw-prose-quotes": theme('colors.black'),
						"--tw-prose-quote-borders": theme('colors.black'),
						"--tw-prose-captions": 'rgba(0, 0, 0, .5)',
						"--tw-prose-kbd": theme('colors.black'),
						"--tw-prose-kbd-shadows": '0 0 0',
						"--tw-prose-code": theme('colors.black'),
						"--tw-prose-pre-code": theme('colors.black'),
						"--tw-prose-pre-bg": 'rgba(0, 0, 0, .1)',
						"--tw-prose-th-borders": theme('colors.black'),
						"--tw-prose-td-borders": 'rgba(0, 0, 0, .25)',
						"--tw-prose-invert-body": theme('colors.white'),
						"--tw-prose-invert-headings": theme('colors.white'),
						"--tw-prose-invert-lead": theme('colors.white'),
						"--tw-prose-invert-links": theme('colors.white'),
						"--tw-prose-invert-bold": theme('colors.white'),
						"--tw-prose-invert-counters": theme('colors.white'),
						"--tw-prose-invert-bullets": theme('colors.white'),
						"--tw-prose-invert-hr": theme('colors.white'),
						"--tw-prose-invert-quotes": theme('colors.white'),
						"--tw-prose-invert-quote-borders": theme('colors.white'),
						"--tw-prose-invert-captions": 'rgba(255, 255, 255, .5)',
						"--tw-prose-invert-kbd": theme('colors.white'),
						"--tw-prose-invert-kbd-shadows": '255 255 255',
						"--tw-prose-invert-code": theme('colors.white'),
						"--tw-prose-invert-pre-code": theme('colors.white'),
						"--tw-prose-invert-pre-bg": 'rgba(255, 255, 255, .1)',
						"--tw-prose-invert-th-borders": theme('colors.white'),
						"--tw-prose-invert-td-borders": 'rgba(255, 255, 255, .25)',
						h1: {
							fontWeight: 500,
							letterSpacing: "-0.25px",
							lineHeight: 1.2,
						},
						h2: {
							fontWeight: 500,
							letterSpacing: "-0.25px",
							lineHeight: 1.2,
						},
						h3: {
							fontWeight: 500,
							letterSpacing: "-0.25px",
							lineHeight: 1.2,
						},
						h4: {
							fontWeight: 500,
							letterSpacing: "-0.25px",
							lineHeight: 1.2,
						},
						h5: {
							fontWeight: 500,
							letterSpacing: "-0.25px",
							lineHeight: 1.2,
						},
						p: {
							fontWeight: 300,
							letterSpacing: "-0.25px",
							lineHeight: 1.5,
						},
						li: {
							fontWeight: 300,
							letterSpacing: "-0.25px",
							lineHeight: 1.5,
						},
					},
				},
				sm: {
					css: {
						h1: {
							lineHeight: 1.2,
						},
						h2: {
							lineHeight: 1.2,
						},
						h3: {
							letterSpacing: "-0.125px",
							lineHeight: 1.2,
						},
						h4: {
							letterSpacing: "-0.125px",
							lineHeight: 1.2,
						},
						h5: {
							letterSpacing: "-0.125px",
							lineHeight: 1.2,
						},
						p: {
							lineHeight: 1.5,
							letterSpacing: "-0.125px",
						},
						li: {
							letterSpacing: "-0.125px",
						},
					},
				},
				base: {
					css: {
						h1: {
							fontSize: "3em",
							lineHeight: 1.2,
							marginBottom: "0.416666666666667em",
						},
						h2: {
							fontSize: "2.5em",
							lineHeight: 1.2,
							marginBottom: "0.416666666666667em",
						},
						h3: {
							fontSize: "2em",
							lineHeight: 1.2,
							marginBottom: "0.416666666666667em",
						},
						h4: {
							fontSize: "1.5em",
							lineHeight: 1.2,
							marginBottom: "0.416666666666667em",
						},
						h5: {
							fontSize: "1.25em",
							lineHeight: 1.2,
							marginBottom: "0.416666666666667em",
						},
						p: {
							lineHeight: 1.5,
							marginBottom: "1.25em",
							marginTop: "1.25em",
						},
					},
				},
				lg: {
					css: {
						h1: {
							fontSize: "3em",
							lineHeight: 1.2,
							marginBottom: "0.37037037037037em",
						},
						h2: {
							fontSize: "2.444444444444444em",
							lineHeight: 1.2,
							marginBottom: "0.37037037037037em",
						},
						h3: {
							fontSize: "2em",
							lineHeight: 1.2,
							marginBottom: "0.37037037037037em",
						},
						h4: {
							fontSize: "1.555555555555556em",
							lineHeight: 1.2,
							marginBottom: "0.37037037037037em",
						},
						h5: {
							fontSize: "1.222222222222222em",
							lineHeight: 1.2,
							marginBottom: "0.37037037037037em",
						},
						p: {
							lineHeight: 1.5,
							marginBottom: "1.111111111111111em",
							marginTop: "1.111111111111111em",
						}
					},
				},
				xl: {
					css: {
						h1: {
							fontSize: "3.1em",
							lineHeight: 1.2,
							marginBottom: "0.32258064516129em",
						},
						h2: {
							fontSize: "2.4em",
							lineHeight: 1.2,
							marginBottom: "0.32258064516129em",
						},
						h3: {
							fontSize: "2em",
							lineHeight: 1.2,
							marginBottom: "0.32258064516129em",
						},
						h4: {
							fontSize: "1.6em",
							lineHeight: 1.2,
							marginBottom: "0.32258064516129em",
						},
						h5: {
							fontSize: "1.25em",
							lineHeight: 1.2,
							marginBottom: "0.32258064516129em",
						},
						p: {
							lineHeight: 1.5,
							marginBottom: "1em",
							marginTop: "1em",
						},
					},
				},
				"2xl": {
					css: {
						h1: {
							fontSize: "3.041666666666667em",
							lineHeight: 1.2,
							marginBottom: "0.273972602739726em",
						},
						h2: {
							fontSize: "2.458333333333333em",
							lineHeight: 1.2,
							marginBottom: "0.273972602739726em",
						},
						h3: {
							fontSize: "1.916666666666667em",
							lineHeight: 1.2,
							marginBottom: "0.273972602739726em",
						},
						h4: {
							fontSize: "1.583333333333333em",
							lineHeight: 1.2,
							marginBottom: "0.273972602739726em",
						},
						h5: {
							fontSize: "1.25em",
							lineHeight: 1.2,
							marginBottom: "0.273972602739726em",
						},
						p: {
							lineHeight: 1.5,
							marginBottom: '0.833333333333333em',
							marginTop: '0.833333333333333em',
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
};
