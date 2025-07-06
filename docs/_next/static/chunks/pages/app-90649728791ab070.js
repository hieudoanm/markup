(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[961],
	{
		3447: (e, l, a) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/app',
				function () {
					return a(5186);
				},
			]);
		},
		5186: (e, l, a) => {
			'use strict';
			(a.r(l), a.d(l, { default: () => o }));
			var s = a(5640),
				r = a(8809),
				d = a(148);
			let n = (e) => {
				let { html: l = '' } = e,
					[a, n] = (0, d.useState)('');
				return (
					(0, d.useEffect)(() => {
						n(r.A.sanitize(l));
					}, [l]),
					(0, s.jsx)('div', {
						dangerouslySetInnerHTML: { __html: a },
						className: 'markdown-body h-full w-full !bg-neutral-900 !text-neutral-100',
					})
				);
			};
			var t = a(8258),
				i = a(2635),
				c = a(8127);
			let o = () => {
				let [{ markdown: e = i.b, html: l = '' }, a] = (0, d.useState)({ markdown: i.b, html: '' });
				return (
					(0, d.useEffect)(() => {
						(async () => {
							let l = await (0, c.xI)(e);
							a((e) => ({ ...e, html: l }));
						})();
					}, [e]),
					(0, s.jsxs)('div', {
						className: 'flex h-screen w-screen flex-col overflow-hidden',
						children: [
							(0, s.jsx)(t.F, {}),
							(0, s.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
							(0, s.jsxs)('div', {
								className: 'grid grow divide-x divide-neutral-800 overflow-hidden md:grid-cols-2',
								children: [
									(0, s.jsx)('div', {
										className: 'h-full overflow-hidden md:col-span-1',
										children: (0, s.jsx)('textarea', {
											id: 'markdown',
											name: 'markdown',
											placeholder: 'Markdown',
											className: 'h-full w-full resize-none p-4 focus:outline-none md:p-8',
											value: e,
											onChange: (e) => {
												a((l) => ({ ...l, markdown: e.target.value }));
											},
										}),
									}),
									(0, s.jsx)('div', {
										className: 'h-full overflow-hidden md:col-span-1',
										children: (0, s.jsx)('div', {
											className: 'h-full w-full overflow-auto p-4 md:p-8',
											children: (0, s.jsx)(n, { html: l }),
										}),
									}),
								],
							}),
						],
					})
				);
			};
		},
		8258: (e, l, a) => {
			'use strict';
			a.d(l, { F: () => t });
			var s = a(5640),
				r = a(2635),
				d = a(7864),
				n = a.n(d);
			let t = () =>
				(0, s.jsx)('header', {
					className: 'w-full',
					children: (0, s.jsxs)('div', {
						className: 'container mx-auto flex items-center justify-between gap-x-2 px-4 py-2 md:px-8 md:py-4',
						children: [
							(0, s.jsx)(n(), {
								href: '/',
								children: (0, s.jsx)('h1', { className: 'text-xl font-bold', children: r.C }),
							}),
							(0, s.jsx)('nav', {
								className: 'space-x-4 font-medium text-neutral-500',
								children: [{ id: 'app', href: '/app', label: 'App' }].map((e) => {
									let { id: l, href: a, label: r } = e;
									return (0, s.jsx)(n(), { href: a, className: 'text-sm md:text-base', children: r }, l);
								}),
							}),
						],
					}),
				});
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		(e.O(0, [864, 239, 636, 593, 792], () => l(3447)), (_N_E = e.O()));
	},
]);
