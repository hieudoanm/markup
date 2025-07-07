(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[336],
	{
		2328: (e, t, s) => {
			'use strict';
			(s.r(t), s.d(t, { default: () => l }));
			var n = s(5640),
				r = s(6262);
			let l = () => (0, n.jsx)(r.L, { code: '404', message: 'Sorry, the page you are looking for does not exist.' });
		},
		5398: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/404',
				function () {
					return s(2328);
				},
			]);
		},
		6262: (e, t, s) => {
			'use strict';
			s.d(t, { L: () => a });
			var n = s(5640),
				r = s(7864),
				l = s.n(r);
			let a = (e) => {
				let { code: t, message: s = '' } = e;
				return (0, n.jsx)('main', {
					className: 'flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-4 text-neutral-100',
					children: (0, n.jsxs)('div', {
						className: 'flex flex-col items-center gap-6 text-center',
						children: [
							(0, n.jsx)('h1', { className: 'text-6xl font-bold', children: t }),
							(0, n.jsx)('p', { className: 'text-xl text-neutral-400', children: s }),
							(0, n.jsx)(l(), {
								href: '/',
								className:
									'rounded-xl bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition hover:bg-neutral-200',
								children: 'Go back home',
							}),
						],
					}),
				});
			};
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		(e.O(0, [864, 636, 593, 792], () => t(5398)), (_N_E = e.O()));
	},
]);
