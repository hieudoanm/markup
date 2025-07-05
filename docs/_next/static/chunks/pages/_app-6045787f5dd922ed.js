(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		2147: () => {},
		2635: (n, e, t) => {
			'use strict';
			t.d(e, { C: () => a, b: () => i });
			let a = 'Markup',
				i =
					'# Markdown Cheat Sheet\n\nThanks for visiting [The Markdown Guide](https://www.markdownguide.org)!\n\nThis Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can\'t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).\n\n## Basic Syntax\n\nThese are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.\n\n### Heading\n\n# H1\n## H2\n### H3\n\n### Bold\n\n**bold text**\n\n### Italic\n\n*italicized text*\n\n### Blockquote\n\n> blockquote\n\n### Ordered List\n\n1. First item\n2. Second item\n3. Third item\n\n### Unordered List\n\n- First item\n- Second item\n- Third item\n\n### Code\n\n`code`\n\n### Horizontal Rule\n\n---\n\n### Link\n\n[Markdown Guide](https://www.markdownguide.org)\n\n### Image\n\n![alt text](https://www.markdownguide.org/assets/images/tux.png)\n\n## Extended Syntax\n\nThese elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.\n\n### Table\n\n| Syntax | Description |\n| ----------- | ----------- |\n| Header | Title |\n| Paragraph | Text |\n\n### Fenced Code Block\n\n```\n{\n  "firstName": "John",\n  "lastName": "Smith",\n  "age": 25\n}\n```\n\n### Footnote\n\nHere\'s a sentence with a footnote. [^1]\n\n[^1]: This is the footnote.\n\n### Heading ID\n\n### My Great Heading {#custom-id}\n\n### Definition List\n\nterm\n: definition\n\n### Strikethrough\n\n~~The world is flat.~~\n\n### Task List\n\n- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n\n### Emoji\n\nThat is so funny! :joy:\n\n(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))\n\n### Highlight\n\nI need to highlight these ==very important words==.\n\n### Subscript\n\nH~2~O\n\n### Superscript\n\nX^2^';
		},
		3942: () => {},
		4626: (n, e, t) => {
			n.exports = t(5274);
		},
		6404: (n, e, t) => {
			'use strict';
			(t.r(e), t.d(e, { default: () => h }));
			var a = t(5640),
				i = t(2635);
			(t(2147), t(3942));
			var s = t(7332),
				o = t.n(s),
				r = t(8580),
				d = t.n(r),
				l = t(4626),
				c = t.n(l);
			let h = (n) => {
				let { Component: e, pageProps: t } = n;
				return (0, a.jsxs)(a.Fragment, {
					children: [
						(0, a.jsx)(c(), { children: (0, a.jsx)('title', { children: i.C }) }),
						(0, a.jsx)('div', {
							className: ''.concat(o().className, ' ').concat(d().className, ' bg-neutral-900 text-neutral-100'),
							children: (0, a.jsx)(e, { ...t }),
						}),
					],
				});
			};
		},
		7332: (n) => {
			n.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_15b9a2',
				variable: '__variable_15b9a2',
			};
		},
		8462: (n, e, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return t(6404);
				},
			]);
		},
		8580: (n) => {
			n.exports = {
				style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
				className: '__className_924acc',
				variable: '__variable_924acc',
			};
		},
	},
	(n) => {
		var e = (e) => n((n.s = e));
		(n.O(0, [593, 792], () => (e(8462), e(8231))), (_N_E = n.O()));
	},
]);
