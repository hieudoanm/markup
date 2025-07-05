(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		8258: (e, s, t) => {
			'use strict';
			t.d(s, { F: () => i });
			var r = t(5640),
				l = t(2635),
				a = t(7864),
				n = t.n(a);
			let i = () =>
				(0, r.jsx)('header', {
					className: 'w-full',
					children: (0, r.jsxs)('div', {
						className: 'container mx-auto flex items-center justify-between gap-x-2 px-4 py-2 md:px-8 md:py-4',
						children: [
							(0, r.jsx)(n(), {
								href: '/',
								children: (0, r.jsx)('h1', { className: 'text-xl font-bold', children: l.C }),
							}),
							(0, r.jsx)('nav', {
								className: 'space-x-4 font-medium text-neutral-500',
								children: [{ id: 'app', href: '/app', label: 'App' }].map((e) => {
									let { id: s, href: t, label: l } = e;
									return (0, r.jsx)(n(), { href: t, className: 'text-sm md:text-base', children: l }, s);
								}),
							}),
						],
					}),
				});
		},
		8406: (e, s, t) => {
			'use strict';
			(t.r(s), t.d(s, { default: () => m }));
			var r = t(5640),
				l = t(7864),
				a = t.n(l);
			let n = () =>
					(0, r.jsx)('section', {
						className: 'w-full py-16',
						children: (0, r.jsxs)('div', {
							className: 'mx-auto flex max-w-3xl flex-col gap-y-8 text-center',
							children: [
								(0, r.jsx)('h3', {
									className: 'text-2xl font-bold sm:text-3xl',
									children: 'Write and preview Markdown like GitHub',
								}),
								(0, r.jsx)('p', {
									className: 'text-neutral-500',
									children:
										'Edit your Markdown with instant preview styled just like GitHub. No setup, no accounts — just clean and focused writing.',
								}),
								(0, r.jsx)('div', {
									children: (0, r.jsx)(a(), {
										href: '/app',
										children: (0, r.jsx)('button', {
											type: 'button',
											className: 'cursor-pointer rounded-full border border-neutral-800 px-6 py-3 text-neutral-100',
											children: 'Launch Editor',
										}),
									}),
								}),
							],
						}),
					}),
				i = () =>
					(0, r.jsx)('section', {
						className: 'py-16',
						children: (0, r.jsxs)('div', {
							className: 'container mx-auto p-4 text-center md:p-8',
							children: [
								(0, r.jsx)('h3', {
									className: 'text-3xl font-semibold sm:text-4xl',
									children: 'Why Use Our Markdown Editor?',
								}),
								(0, r.jsx)('p', {
									className: 'mx-auto mt-4 max-w-3xl text-neutral-500',
									children:
										'Write, preview, and polish your Markdown content in a distraction-free editor with GitHub-style rendering — no installs, no accounts.',
								}),
								(0, r.jsxs)('div', {
									className: 'mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
									children: [
										(0, r.jsxs)('div', {
											className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
											children: [
												(0, r.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83D\uDCDD Live Preview' }),
												(0, r.jsx)('p', {
													className: 'mt-2 text-sm text-neutral-500',
													children: 'See your Markdown rendered instantly with GitHub’s familiar styling as you type.',
												}),
											],
										}),
										(0, r.jsxs)('div', {
											className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
											children: [
												(0, r.jsx)('h4', {
													className: 'text-lg font-semibold',
													children: '\uD83D\uDD12 Local & Private',
												}),
												(0, r.jsx)('p', {
													className: 'mt-2 text-sm text-neutral-500',
													children: 'Everything stays on your device. No uploads, no tracking — your writing is yours.',
												}),
											],
										}),
										(0, r.jsxs)('div', {
											className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
											children: [
												(0, r.jsx)('h4', { className: 'text-lg font-semibold', children: '⚡ Zero Setup' }),
												(0, r.jsx)('p', {
													className: 'mt-2 text-sm text-neutral-500',
													children:
														'Just open and start writing. No login or configuration required. Works offline too.',
												}),
											],
										}),
									],
								}),
							],
						}),
					});
			var d = t(2635);
			let x = () =>
					(0, r.jsx)('footer', {
						className: 'w-full',
						children: (0, r.jsxs)('div', {
							className:
								'container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 text-sm text-neutral-500 sm:flex-row md:px-8 md:py-4',
							children: [
								(0, r.jsxs)('p', { children: ['\xa9 ', new Date().getFullYear(), ' ', d.C, '. All rights reserved.'] }),
								(0, r.jsx)('div', {
									className: 'space-x-4',
									children: (0, r.jsx)(a(), {
										href: 'https://github.com/hieudoanm/numbers',
										target: '_blank',
										rel: 'noopener noreferrer',
										className: 'hover:underline',
										children: 'GitHub',
									}),
								}),
							],
						}),
					}),
				o = () =>
					(0, r.jsx)('section', {
						className: 'w-full py-20',
						children: (0, r.jsxs)('div', {
							className: 'mx-auto flex max-w-3xl flex-col gap-y-8 text-center',
							children: [
								(0, r.jsx)('h2', { className: 'text-4xl font-extrabold text-neutral-100 sm:text-5xl', children: d.C }),
								(0, r.jsx)('p', {
									className: 'text-lg text-neutral-500',
									children:
										'A fast, clean, and privacy-first Markdown editor — write and preview in GitHub style, right in your browser.',
								}),
								(0, r.jsx)('div', {
									children: (0, r.jsx)(a(), {
										href: '/app',
										children: (0, r.jsx)('button', {
											type: 'button',
											className: 'cursor-pointer rounded-full border border-neutral-800 px-6 py-3 text-neutral-100',
											children: 'Launch Editor',
										}),
									}),
								}),
							],
						}),
					}),
				c = () => (0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' });
			var u = t(8258);
			let m = () =>
				(0, r.jsxs)(r.Fragment, {
					children: [
						(0, r.jsx)(u.F, {}),
						(0, r.jsx)(c, {}),
						(0, r.jsx)(o, {}),
						(0, r.jsx)(c, {}),
						(0, r.jsx)(i, {}),
						(0, r.jsx)(c, {}),
						(0, r.jsx)(n, {}),
						(0, r.jsx)(c, {}),
						(0, r.jsx)(x, {}),
					],
				});
		},
		8898: (e, s, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return t(8406);
				},
			]);
		},
	},
	(e) => {
		var s = (s) => e((e.s = s));
		(e.O(0, [864, 636, 593, 792], () => s(8898)), (_N_E = e.O()));
	},
]);
