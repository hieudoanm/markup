'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[239],
	{
		8127: (e, t, n) => {
			function r() {
				return {
					async: !1,
					breaks: !1,
					extensions: null,
					gfm: !0,
					hooks: null,
					pedantic: !1,
					renderer: null,
					silent: !1,
					tokenizer: null,
					walkTokens: null,
				};
			}
			n.d(t, { xI: () => ed });
			var i = r(),
				l = { exec: () => null };
			function s(e, t = '') {
				let n = 'string' == typeof e ? e : e.source,
					r = {
						replace: (e, t) => {
							let i = 'string' == typeof t ? t : t.source;
							return ((i = i.replace(a.caret, '$1')), (n = n.replace(e, i)), r);
						},
						getRegex: () => new RegExp(n, t),
					};
				return r;
			}
			var a = {
					codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
					outputLinkReplace: /\\([\[\]])/g,
					indentCodeCompensation: /^(\s+)(?:```)/,
					beginningSpace: /^\s+/,
					endingHash: /#$/,
					startingSpaceChar: /^ /,
					endingSpaceChar: / $/,
					nonSpaceChar: /[^ ]/,
					newLineCharGlobal: /\n/g,
					tabCharGlobal: /\t/g,
					multipleSpaceGlobal: /\s+/g,
					blankLine: /^[ \t]*$/,
					doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
					blockquoteStart: /^ {0,3}>/,
					blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
					blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
					listReplaceTabs: /^\t+/,
					listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
					listIsTask: /^\[[ xX]\] /,
					listReplaceTask: /^\[[ xX]\] +/,
					anyLine: /\n.*\n/,
					hrefBrackets: /^<(.*)>$/,
					tableDelimiter: /[:|]/,
					tableAlignChars: /^\||\| *$/g,
					tableRowBlankLine: /\n[ \t]*$/,
					tableAlignRight: /^ *-+: *$/,
					tableAlignCenter: /^ *:-+: *$/,
					tableAlignLeft: /^ *:-+ *$/,
					startATag: /^<a /i,
					endATag: /^<\/a>/i,
					startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
					endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
					startAngleBracket: /^</,
					endAngleBracket: />$/,
					pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
					unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
					escapeTest: /[&<>"']/,
					escapeReplace: /[&<>"']/g,
					escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
					escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
					unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
					caret: /(^|[^\[])\^/g,
					percentDecode: /%25/g,
					findPipe: /\|/g,
					splitPipe: / \|/,
					slashPipe: /\\\|/g,
					carriageReturn: /\r\n|\r/g,
					spaceLine: /^ +$/gm,
					notSpaceStart: /^\S*/,
					endingNewline: /\n$/,
					listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
					nextBulletRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
					hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
					fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
					headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
					htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, 'i'),
				},
				o = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
				c = /(?:[*+-]|\d{1,9}[.)])/,
				p =
					/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
				u = s(p)
					.replace(/bull/g, c)
					.replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
					.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
					.replace(/blockquote/g, / {0,3}>/)
					.replace(/heading/g, / {0,3}#{1,6}/)
					.replace(/html/g, / {0,3}<[^\n>]+>\n/)
					.replace(/\|table/g, '')
					.getRegex(),
				h = s(p)
					.replace(/bull/g, c)
					.replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
					.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
					.replace(/blockquote/g, / {0,3}>/)
					.replace(/heading/g, / {0,3}#{1,6}/)
					.replace(/html/g, / {0,3}<[^\n>]+>\n/)
					.replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
					.getRegex(),
				d = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
				f = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
				g = s(
					/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
				)
					.replace('label', f)
					.replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
					.getRegex(),
				m = s(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
					.replace(/bull/g, c)
					.getRegex(),
				k =
					'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
				x = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
				b = s(
					'^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
					'i',
				)
					.replace('comment', x)
					.replace('tag', k)
					.replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
					.getRegex(),
				y = s(d)
					.replace('hr', o)
					.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
					.replace('|lheading', '')
					.replace('|table', '')
					.replace('blockquote', ' {0,3}>')
					.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
					.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
					.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
					.replace('tag', k)
					.getRegex(),
				w = {
					blockquote: s(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
						.replace('paragraph', y)
						.getRegex(),
					code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
					def: g,
					fences:
						/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
					heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
					hr: o,
					html: b,
					lheading: u,
					list: m,
					newline: /^(?:[ \t]*(?:\n|$))+/,
					paragraph: y,
					table: l,
					text: /^[^\n]+/,
				},
				T = s(
					'^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
				)
					.replace('hr', o)
					.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
					.replace('blockquote', ' {0,3}>')
					.replace('code', '(?: {4}| {0,3}	)[^\\n]')
					.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
					.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
					.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
					.replace('tag', k)
					.getRegex(),
				S = {
					...w,
					lheading: h,
					table: T,
					paragraph: s(d)
						.replace('hr', o)
						.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
						.replace('|lheading', '')
						.replace('table', T)
						.replace('blockquote', ' {0,3}>')
						.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
						.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
						.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
						.replace('tag', k)
						.getRegex(),
				},
				A = {
					...w,
					html: s(
						`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
					)
						.replace('comment', x)
						.replace(
							/tag/g,
							'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
						)
						.getRegex(),
					def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
					heading: /^(#{1,6})(.*)(?:\n+|$)/,
					fences: l,
					lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
					paragraph: s(d)
						.replace('hr', o)
						.replace(
							'heading',
							` *#{1,6} *[^
]`,
						)
						.replace('lheading', u)
						.replace('|table', '')
						.replace('blockquote', ' {0,3}>')
						.replace('|fences', '')
						.replace('|list', '')
						.replace('|html', '')
						.replace('|tag', '')
						.getRegex(),
				},
				_ = /^( {2,}|\\)\n(?!\s*$)/,
				R = /[\p{P}\p{S}]/u,
				E = /[\s\p{P}\p{S}]/u,
				N = /[^\s\p{P}\p{S}]/u,
				L = s(/^((?![*_])punctSpace)/, 'u')
					.replace(/punctSpace/g, E)
					.getRegex(),
				C = /(?!~)[\p{P}\p{S}]/u,
				I = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
				v = s(I, 'u').replace(/punct/g, R).getRegex(),
				z = s(I, 'u').replace(/punct/g, C).getRegex(),
				$ =
					'^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
				D = s($, 'gu')
					.replace(/notPunctSpace/g, N)
					.replace(/punctSpace/g, E)
					.replace(/punct/g, R)
					.getRegex(),
				O = s($, 'gu')
					.replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
					.replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
					.replace(/punct/g, C)
					.getRegex(),
				M = s(
					'^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
					'gu',
				)
					.replace(/notPunctSpace/g, N)
					.replace(/punctSpace/g, E)
					.replace(/punct/g, R)
					.getRegex(),
				P = s(/\\(punct)/, 'gu')
					.replace(/punct/g, R)
					.getRegex(),
				B = s(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
					.replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
					.replace(
						'email',
						/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
					)
					.getRegex(),
				U = s(x).replace('(?:--\x3e|$)', '--\x3e').getRegex(),
				H = s(
					'^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
				)
					.replace('comment', U)
					.replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
					.getRegex(),
				q = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
				F = s(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/)
					.replace('label', q)
					.replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
					.replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
					.getRegex(),
				G = s(/^!?\[(label)\]\[(ref)\]/)
					.replace('label', q)
					.replace('ref', f)
					.getRegex(),
				W = s(/^!?\[(ref)\](?:\[\])?/)
					.replace('ref', f)
					.getRegex(),
				Z = s('reflink|nolink(?!\\()', 'g').replace('reflink', G).replace('nolink', W).getRegex(),
				j = {
					_backpedal: l,
					anyPunctuation: P,
					autolink: B,
					blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
					br: _,
					code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
					del: l,
					emStrongLDelim: v,
					emStrongRDelimAst: D,
					emStrongRDelimUnd: M,
					escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
					link: F,
					nolink: W,
					punctuation: L,
					reflink: G,
					reflinkSearch: Z,
					tag: H,
					text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
					url: l,
				},
				Y = {
					...j,
					link: s(/^!?\[(label)\]\((.*?)\)/)
						.replace('label', q)
						.getRegex(),
					reflink: s(/^!?\[(label)\]\s*\[([^\]]*)\]/)
						.replace('label', q)
						.getRegex(),
				},
				Q = {
					...j,
					emStrongRDelimAst: O,
					emStrongLDelim: z,
					url: s(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i')
						.replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
						.getRegex(),
					_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
					del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
					text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
				},
				X = {
					...Q,
					br: s(_).replace('{2,}', '*').getRegex(),
					text: s(Q.text)
						.replace('\\b_', '\\b_| {2,}\\n')
						.replace(/\{2,\}/g, '*')
						.getRegex(),
				},
				K = { normal: w, gfm: S, pedantic: A },
				V = { normal: j, gfm: Q, breaks: X, pedantic: Y },
				J = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
				ee = (e) => J[e];
			function et(e, t) {
				if (t) {
					if (a.escapeTest.test(e)) return e.replace(a.escapeReplace, ee);
				} else if (a.escapeTestNoEncode.test(e)) return e.replace(a.escapeReplaceNoEncode, ee);
				return e;
			}
			function en(e) {
				try {
					e = encodeURI(e).replace(a.percentDecode, '%');
				} catch {
					return null;
				}
				return e;
			}
			function er(e, t) {
				let n = e
						.replace(a.findPipe, (e, t, n) => {
							let r = !1,
								i = t;
							for (; --i >= 0 && '\\' === n[i]; ) r = !r;
							return r ? '|' : ' |';
						})
						.split(a.splitPipe),
					r = 0;
				if ((n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t))
					if (n.length > t) n.splice(t);
					else for (; n.length < t; ) n.push('');
				for (; r < n.length; r++) n[r] = n[r].trim().replace(a.slashPipe, '|');
				return n;
			}
			function ei(e, t, n) {
				let r = e.length;
				if (0 === r) return '';
				let i = 0;
				for (; i < r; ) {
					let l = e.charAt(r - i - 1);
					if (l !== t || n)
						if (l !== t && n) i++;
						else break;
					else i++;
				}
				return e.slice(0, r - i);
			}
			function el(e, t, n, r, i) {
				let l = t.href,
					s = t.title || null,
					a = e[1].replace(i.other.outputLinkReplace, '$1');
				r.state.inLink = !0;
				let o = {
					type: '!' === e[0].charAt(0) ? 'image' : 'link',
					raw: n,
					href: l,
					title: s,
					text: a,
					tokens: r.inlineTokens(a),
				};
				return ((r.state.inLink = !1), o);
			}
			var es = class {
					options;
					rules;
					lexer;
					constructor(e) {
						this.options = e || i;
					}
					space(e) {
						let t = this.rules.block.newline.exec(e);
						if (t && t[0].length > 0) return { type: 'space', raw: t[0] };
					}
					code(e) {
						let t = this.rules.block.code.exec(e);
						if (t) {
							let e = t[0].replace(this.rules.other.codeRemoveIndent, '');
							return {
								type: 'code',
								raw: t[0],
								codeBlockStyle: 'indented',
								text: this.options.pedantic
									? e
									: ei(
											e,
											`
`,
										),
							};
						}
					}
					fences(e) {
						let t = this.rules.block.fences.exec(e);
						if (t) {
							let e = t[0],
								n = (function (e, t, n) {
									let r = e.match(n.other.indentCodeCompensation);
									if (null === r) return t;
									let i = r[1];
									return t
										.split(
											`
`,
										)
										.map((e) => {
											let t = e.match(n.other.beginningSpace);
											if (null === t) return e;
											let [r] = t;
											return r.length >= i.length ? e.slice(i.length) : e;
										}).join(`
`);
								})(e, t[3] || '', this.rules);
							return {
								type: 'code',
								raw: e,
								lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : t[2],
								text: n,
							};
						}
					}
					heading(e) {
						let t = this.rules.block.heading.exec(e);
						if (t) {
							let e = t[2].trim();
							if (this.rules.other.endingHash.test(e)) {
								let t = ei(e, '#');
								(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
							}
							return { type: 'heading', raw: t[0], depth: t[1].length, text: e, tokens: this.lexer.inline(e) };
						}
					}
					hr(e) {
						let t = this.rules.block.hr.exec(e);
						if (t)
							return {
								type: 'hr',
								raw: ei(
									t[0],
									`
`,
								),
							};
					}
					blockquote(e) {
						let t = this.rules.block.blockquote.exec(e);
						if (t) {
							let e = ei(
									t[0],
									`
`,
								).split(`
`),
								n = '',
								r = '',
								i = [];
							for (; e.length > 0; ) {
								let t = !1,
									l = [],
									s;
								for (s = 0; s < e.length; s++)
									if (this.rules.other.blockquoteStart.test(e[s])) (l.push(e[s]), (t = !0));
									else if (t) break;
									else l.push(e[s]);
								e = e.slice(s);
								let a = l.join(`
`),
									o = a
										.replace(
											this.rules.other.blockquoteSetextReplace,
											`
    $1`,
										)
										.replace(this.rules.other.blockquoteSetextReplace2, '');
								((n = n
									? `${n}
${a}`
									: a),
									(r = r
										? `${r}
${o}`
										: o));
								let c = this.lexer.state.top;
								if (
									((this.lexer.state.top = !0),
									this.lexer.blockTokens(o, i, !0),
									(this.lexer.state.top = c),
									0 === e.length)
								)
									break;
								let p = i.at(-1);
								if (p?.type === 'code') break;
								if (p?.type === 'blockquote') {
									let t =
											p.raw +
											`
` +
											e.join(`
`),
										l = this.blockquote(t);
									((i[i.length - 1] = l),
										(n = n.substring(0, n.length - p.raw.length) + l.raw),
										(r = r.substring(0, r.length - p.text.length) + l.text));
									break;
								}
								if (p?.type === 'list') {
									let t =
											p.raw +
											`
` +
											e.join(`
`),
										l = this.list(t);
									((i[i.length - 1] = l),
										(n = n.substring(0, n.length - p.raw.length) + l.raw),
										(r = r.substring(0, r.length - p.raw.length) + l.raw),
										(e = t.substring(i.at(-1).raw.length).split(`
`)));
									continue;
								}
							}
							return { type: 'blockquote', raw: n, tokens: i, text: r };
						}
					}
					list(e) {
						let t = this.rules.block.list.exec(e);
						if (t) {
							let n = t[1].trim(),
								r = n.length > 1,
								i = { type: 'list', raw: '', ordered: r, start: r ? +n.slice(0, -1) : '', loose: !1, items: [] };
							((n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`), this.options.pedantic && (n = r ? n : '[*+-]'));
							let l = this.rules.other.listItemRegex(n),
								s = !1;
							for (; e; ) {
								let n = !1,
									r = '',
									a = '';
								if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) break;
								((r = t[0]), (e = e.substring(r.length)));
								let o = t[2]
										.split(
											`
`,
											1,
										)[0]
										.replace(this.rules.other.listReplaceTabs, (e) => ' '.repeat(3 * e.length)),
									c = e.split(
										`
`,
										1,
									)[0],
									p = !o.trim(),
									u = 0;
								if (
									(this.options.pedantic
										? ((u = 2), (a = o.trimStart()))
										: p
											? (u = t[1].length + 1)
											: ((u = (u = t[2].search(this.rules.other.nonSpaceChar)) > 4 ? 1 : u),
												(a = o.slice(u)),
												(u += t[1].length)),
									p &&
										this.rules.other.blankLine.test(c) &&
										((r +=
											c +
											`
`),
										(e = e.substring(c.length + 1)),
										(n = !0)),
									!n)
								) {
									let t = this.rules.other.nextBulletRegex(u),
										n = this.rules.other.hrRegex(u),
										i = this.rules.other.fencesBeginRegex(u),
										l = this.rules.other.headingBeginRegex(u),
										s = this.rules.other.htmlBeginRegex(u);
									for (; e; ) {
										let h = e.split(
												`
`,
												1,
											)[0],
											d;
										if (
											((c = h),
											(d = this.options.pedantic
												? (c = c.replace(this.rules.other.listReplaceNesting, '  '))
												: c.replace(this.rules.other.tabCharGlobal, '    ')),
											i.test(c) || l.test(c) || s.test(c) || t.test(c) || n.test(c))
										)
											break;
										if (d.search(this.rules.other.nonSpaceChar) >= u || !c.trim())
											a +=
												`
` + d.slice(u);
										else {
											if (
												p ||
												o.replace(this.rules.other.tabCharGlobal, '    ').search(this.rules.other.nonSpaceChar) >= 4 ||
												i.test(o) ||
												l.test(o) ||
												n.test(o)
											)
												break;
											a +=
												`
` + c;
										}
										(p || c.trim() || (p = !0),
											(r +=
												h +
												`
`),
											(e = e.substring(h.length + 1)),
											(o = d.slice(u)));
									}
								}
								i.loose || (s ? (i.loose = !0) : this.rules.other.doubleBlankLine.test(r) && (s = !0));
								let h = null,
									d;
								(this.options.gfm &&
									(h = this.rules.other.listIsTask.exec(a)) &&
									((d = '[ ] ' !== h[0]), (a = a.replace(this.rules.other.listReplaceTask, ''))),
									i.items.push({ type: 'list_item', raw: r, task: !!h, checked: d, loose: !1, text: a, tokens: [] }),
									(i.raw += r));
							}
							let a = i.items.at(-1);
							if (!a) return;
							((a.raw = a.raw.trimEnd()), (a.text = a.text.trimEnd()), (i.raw = i.raw.trimEnd()));
							for (let e = 0; e < i.items.length; e++)
								if (
									((this.lexer.state.top = !1),
									(i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, [])),
									!i.loose)
								) {
									let t = i.items[e].tokens.filter((e) => 'space' === e.type);
									i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
								}
							if (i.loose) for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
							return i;
						}
					}
					html(e) {
						let t = this.rules.block.html.exec(e);
						if (t)
							return {
								type: 'html',
								block: !0,
								raw: t[0],
								pre: 'pre' === t[1] || 'script' === t[1] || 'style' === t[1],
								text: t[0],
							};
					}
					def(e) {
						let t = this.rules.block.def.exec(e);
						if (t) {
							let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ' '),
								n = t[2]
									? t[2].replace(this.rules.other.hrefBrackets, '$1').replace(this.rules.inline.anyPunctuation, '$1')
									: '',
								r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : t[3];
							return { type: 'def', tag: e, raw: t[0], href: n, title: r };
						}
					}
					table(e) {
						let t = this.rules.block.table.exec(e);
						if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
						let n = er(t[1]),
							r = t[2].replace(this.rules.other.tableAlignChars, '').split('|'),
							i = t[3]?.trim()
								? t[3].replace(this.rules.other.tableRowBlankLine, '').split(`
`)
								: [],
							l = { type: 'table', raw: t[0], header: [], align: [], rows: [] };
						if (n.length === r.length) {
							for (let e of r)
								this.rules.other.tableAlignRight.test(e)
									? l.align.push('right')
									: this.rules.other.tableAlignCenter.test(e)
										? l.align.push('center')
										: this.rules.other.tableAlignLeft.test(e)
											? l.align.push('left')
											: l.align.push(null);
							for (let e = 0; e < n.length; e++)
								l.header.push({ text: n[e], tokens: this.lexer.inline(n[e]), header: !0, align: l.align[e] });
							for (let e of i)
								l.rows.push(
									er(e, l.header.length).map((e, t) => ({
										text: e,
										tokens: this.lexer.inline(e),
										header: !1,
										align: l.align[t],
									})),
								);
							return l;
						}
					}
					lheading(e) {
						let t = this.rules.block.lheading.exec(e);
						if (t)
							return {
								type: 'heading',
								raw: t[0],
								depth: '=' === t[2].charAt(0) ? 1 : 2,
								text: t[1],
								tokens: this.lexer.inline(t[1]),
							};
					}
					paragraph(e) {
						let t = this.rules.block.paragraph.exec(e);
						if (t) {
							let e =
								t[1].charAt(t[1].length - 1) ===
								`
`
									? t[1].slice(0, -1)
									: t[1];
							return { type: 'paragraph', raw: t[0], text: e, tokens: this.lexer.inline(e) };
						}
					}
					text(e) {
						let t = this.rules.block.text.exec(e);
						if (t) return { type: 'text', raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
					}
					escape(e) {
						let t = this.rules.inline.escape.exec(e);
						if (t) return { type: 'escape', raw: t[0], text: t[1] };
					}
					tag(e) {
						let t = this.rules.inline.tag.exec(e);
						if (t)
							return (
								!this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
									? (this.lexer.state.inLink = !0)
									: this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1),
								!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0])
									? (this.lexer.state.inRawBlock = !0)
									: this.lexer.state.inRawBlock &&
										this.rules.other.endPreScriptTag.test(t[0]) &&
										(this.lexer.state.inRawBlock = !1),
								{
									type: 'html',
									raw: t[0],
									inLink: this.lexer.state.inLink,
									inRawBlock: this.lexer.state.inRawBlock,
									block: !1,
									text: t[0],
								}
							);
					}
					link(e) {
						let t = this.rules.inline.link.exec(e);
						if (t) {
							let e = t[2].trim();
							if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
								if (!this.rules.other.endAngleBracket.test(e)) return;
								let t = ei(e.slice(0, -1), '\\');
								if ((e.length - t.length) % 2 == 0) return;
							} else {
								let e = (function (e, t) {
									if (-1 === e.indexOf(')')) return -1;
									let n = 0;
									for (let r = 0; r < e.length; r++)
										if ('\\' === e[r]) r++;
										else if ('(' === e[r]) n++;
										else if (e[r] === t[1] && --n < 0) return r;
									return n > 0 ? -2 : -1;
								})(t[2], '()');
								if (-2 === e) return;
								if (e > -1) {
									let n = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + e;
									((t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, n).trim()), (t[3] = ''));
								}
							}
							let n = t[2],
								r = '';
							if (this.options.pedantic) {
								let e = this.rules.other.pedanticHrefTitle.exec(n);
								e && ((n = e[1]), (r = e[3]));
							} else r = t[3] ? t[3].slice(1, -1) : '';
							return (
								(n = n.trim()),
								this.rules.other.startAngleBracket.test(n) &&
									(n =
										this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)),
								el(
									t,
									{
										href: n && n.replace(this.rules.inline.anyPunctuation, '$1'),
										title: r && r.replace(this.rules.inline.anyPunctuation, '$1'),
									},
									t[0],
									this.lexer,
									this.rules,
								)
							);
						}
					}
					reflink(e, t) {
						let n;
						if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
							let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, ' ').toLowerCase()];
							if (!e) {
								let e = n[0].charAt(0);
								return { type: 'text', raw: e, text: e };
							}
							return el(n, e, n[0], this.lexer, this.rules);
						}
					}
					emStrong(e, t, n = '') {
						let r = this.rules.inline.emStrongLDelim.exec(e);
						if (
							!(!r || (r[3] && n.match(this.rules.other.unicodeAlphaNumeric))) &&
							(!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))
						) {
							let n = [...r[0]].length - 1,
								i,
								l,
								s = n,
								a = 0,
								o = '*' === r[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
							for (o.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = o.exec(t)); ) {
								if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) continue;
								if (((l = [...i].length), r[3] || r[4])) {
									s += l;
									continue;
								}
								if ((r[5] || r[6]) && n % 3 && !((n + l) % 3)) {
									a += l;
									continue;
								}
								if ((s -= l) > 0) continue;
								l = Math.min(l, l + s + a);
								let t = [...r[0]][0].length,
									o = e.slice(0, n + r.index + t + l);
								if (Math.min(n, l) % 2) {
									let e = o.slice(1, -1);
									return { type: 'em', raw: o, text: e, tokens: this.lexer.inlineTokens(e) };
								}
								let c = o.slice(2, -2);
								return { type: 'strong', raw: o, text: c, tokens: this.lexer.inlineTokens(c) };
							}
						}
					}
					codespan(e) {
						let t = this.rules.inline.code.exec(e);
						if (t) {
							let e = t[2].replace(this.rules.other.newLineCharGlobal, ' '),
								n = this.rules.other.nonSpaceChar.test(e),
								r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
							return (n && r && (e = e.substring(1, e.length - 1)), { type: 'codespan', raw: t[0], text: e });
						}
					}
					br(e) {
						let t = this.rules.inline.br.exec(e);
						if (t) return { type: 'br', raw: t[0] };
					}
					del(e) {
						let t = this.rules.inline.del.exec(e);
						if (t) return { type: 'del', raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
					}
					autolink(e) {
						let t = this.rules.inline.autolink.exec(e);
						if (t) {
							let e, n;
							return (
								(n = '@' === t[2] ? 'mailto:' + (e = t[1]) : (e = t[1])),
								{ type: 'link', raw: t[0], text: e, href: n, tokens: [{ type: 'text', raw: e, text: e }] }
							);
						}
					}
					url(e) {
						let t;
						if ((t = this.rules.inline.url.exec(e))) {
							let e, n;
							if ('@' === t[2]) n = 'mailto:' + (e = t[0]);
							else {
								let r;
								do ((r = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ''));
								while (r !== t[0]);
								((e = t[0]), (n = 'www.' === t[1] ? 'http://' + t[0] : t[0]));
							}
							return { type: 'link', raw: t[0], text: e, href: n, tokens: [{ type: 'text', raw: e, text: e }] };
						}
					}
					inlineText(e) {
						let t = this.rules.inline.text.exec(e);
						if (t) {
							let e = this.lexer.state.inRawBlock;
							return { type: 'text', raw: t[0], text: t[0], escaped: e };
						}
					}
				},
				ea = class e {
					tokens;
					options;
					state;
					tokenizer;
					inlineQueue;
					constructor(e) {
						((this.tokens = []),
							(this.tokens.links = Object.create(null)),
							(this.options = e || i),
							(this.options.tokenizer = this.options.tokenizer || new es()),
							(this.tokenizer = this.options.tokenizer),
							(this.tokenizer.options = this.options),
							(this.tokenizer.lexer = this),
							(this.inlineQueue = []),
							(this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
						let t = { other: a, block: K.normal, inline: V.normal };
						(this.options.pedantic
							? ((t.block = K.pedantic), (t.inline = V.pedantic))
							: this.options.gfm &&
								((t.block = K.gfm), this.options.breaks ? (t.inline = V.breaks) : (t.inline = V.gfm)),
							(this.tokenizer.rules = t));
					}
					static get rules() {
						return { block: K, inline: V };
					}
					static lex(t, n) {
						return new e(n).lex(t);
					}
					static lexInline(t, n) {
						return new e(n).inlineTokens(t);
					}
					lex(e) {
						((e = e.replace(
							a.carriageReturn,
							`
`,
						)),
							this.blockTokens(e, this.tokens));
						for (let e = 0; e < this.inlineQueue.length; e++) {
							let t = this.inlineQueue[e];
							this.inlineTokens(t.src, t.tokens);
						}
						return ((this.inlineQueue = []), this.tokens);
					}
					blockTokens(e, t = [], n = !1) {
						for (this.options.pedantic && (e = e.replace(a.tabCharGlobal, '    ').replace(a.spaceLine, '')); e; ) {
							let r;
							if (
								this.options.extensions?.block?.some(
									(n) => !!(r = n.call({ lexer: this }, e, t)) && ((e = e.substring(r.raw.length)), t.push(r), !0),
								)
							)
								continue;
							if ((r = this.tokenizer.space(e))) {
								e = e.substring(r.raw.length);
								let n = t.at(-1);
								1 === r.raw.length && void 0 !== n
									? (n.raw += `
`)
									: t.push(r);
								continue;
							}
							if ((r = this.tokenizer.code(e))) {
								e = e.substring(r.raw.length);
								let n = t.at(-1);
								n?.type === 'paragraph' || n?.type === 'text'
									? ((n.raw +=
											`
` + r.raw),
										(n.text +=
											`
` + r.text),
										(this.inlineQueue.at(-1).src = n.text))
									: t.push(r);
								continue;
							}
							if (
								(r = this.tokenizer.fences(e)) ||
								(r = this.tokenizer.heading(e)) ||
								(r = this.tokenizer.hr(e)) ||
								(r = this.tokenizer.blockquote(e)) ||
								(r = this.tokenizer.list(e)) ||
								(r = this.tokenizer.html(e))
							) {
								((e = e.substring(r.raw.length)), t.push(r));
								continue;
							}
							if ((r = this.tokenizer.def(e))) {
								e = e.substring(r.raw.length);
								let n = t.at(-1);
								n?.type === 'paragraph' || n?.type === 'text'
									? ((n.raw +=
											`
` + r.raw),
										(n.text +=
											`
` + r.raw),
										(this.inlineQueue.at(-1).src = n.text))
									: this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title });
								continue;
							}
							if ((r = this.tokenizer.table(e)) || (r = this.tokenizer.lheading(e))) {
								((e = e.substring(r.raw.length)), t.push(r));
								continue;
							}
							let i = e;
							if (this.options.extensions?.startBlock) {
								let t = 1 / 0,
									n = e.slice(1),
									r;
								(this.options.extensions.startBlock.forEach((e) => {
									'number' == typeof (r = e.call({ lexer: this }, n)) && r >= 0 && (t = Math.min(t, r));
								}),
									t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1)));
							}
							if (this.state.top && (r = this.tokenizer.paragraph(i))) {
								let l = t.at(-1);
								(n && l?.type === 'paragraph'
									? ((l.raw +=
											`
` + r.raw),
										(l.text +=
											`
` + r.text),
										this.inlineQueue.pop(),
										(this.inlineQueue.at(-1).src = l.text))
									: t.push(r),
									(n = i.length !== e.length),
									(e = e.substring(r.raw.length)));
								continue;
							}
							if ((r = this.tokenizer.text(e))) {
								e = e.substring(r.raw.length);
								let n = t.at(-1);
								n?.type === 'text'
									? ((n.raw +=
											`
` + r.raw),
										(n.text +=
											`
` + r.text),
										this.inlineQueue.pop(),
										(this.inlineQueue.at(-1).src = n.text))
									: t.push(r);
								continue;
							}
							if (e) {
								let t = 'Infinite loop on byte: ' + e.charCodeAt(0);
								if (this.options.silent) {
									console.error(t);
									break;
								}
								throw Error(t);
							}
						}
						return ((this.state.top = !0), t);
					}
					inline(e, t = []) {
						return (this.inlineQueue.push({ src: e, tokens: t }), t);
					}
					inlineTokens(e, t = []) {
						let n = e,
							r = null;
						if (this.tokens.links) {
							let e = Object.keys(this.tokens.links);
							if (e.length > 0)
								for (; null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)); )
									e.includes(r[0].slice(r[0].lastIndexOf('[') + 1, -1)) &&
										(n =
											n.slice(0, r.index) +
											'[' +
											'a'.repeat(r[0].length - 2) +
											']' +
											n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
						}
						for (; null != (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)); )
							n = n.slice(0, r.index) + '++' + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
						for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(n)); )
							n =
								n.slice(0, r.index) +
								'[' +
								'a'.repeat(r[0].length - 2) +
								']' +
								n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
						let i = !1,
							l = '';
						for (; e; ) {
							let r;
							if (
								(i || (l = ''),
								(i = !1),
								this.options.extensions?.inline?.some(
									(n) => !!(r = n.call({ lexer: this }, e, t)) && ((e = e.substring(r.raw.length)), t.push(r), !0),
								))
							)
								continue;
							if ((r = this.tokenizer.escape(e)) || (r = this.tokenizer.tag(e)) || (r = this.tokenizer.link(e))) {
								((e = e.substring(r.raw.length)), t.push(r));
								continue;
							}
							if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
								e = e.substring(r.raw.length);
								let n = t.at(-1);
								'text' === r.type && n?.type === 'text' ? ((n.raw += r.raw), (n.text += r.text)) : t.push(r);
								continue;
							}
							if (
								(r = this.tokenizer.emStrong(e, n, l)) ||
								(r = this.tokenizer.codespan(e)) ||
								(r = this.tokenizer.br(e)) ||
								(r = this.tokenizer.del(e)) ||
								(r = this.tokenizer.autolink(e)) ||
								(!this.state.inLink && (r = this.tokenizer.url(e)))
							) {
								((e = e.substring(r.raw.length)), t.push(r));
								continue;
							}
							let s = e;
							if (this.options.extensions?.startInline) {
								let t = 1 / 0,
									n = e.slice(1),
									r;
								(this.options.extensions.startInline.forEach((e) => {
									'number' == typeof (r = e.call({ lexer: this }, n)) && r >= 0 && (t = Math.min(t, r));
								}),
									t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1)));
							}
							if ((r = this.tokenizer.inlineText(s))) {
								((e = e.substring(r.raw.length)), '_' !== r.raw.slice(-1) && (l = r.raw.slice(-1)), (i = !0));
								let n = t.at(-1);
								n?.type === 'text' ? ((n.raw += r.raw), (n.text += r.text)) : t.push(r);
								continue;
							}
							if (e) {
								let t = 'Infinite loop on byte: ' + e.charCodeAt(0);
								if (this.options.silent) {
									console.error(t);
									break;
								}
								throw Error(t);
							}
						}
						return t;
					}
				},
				eo = class {
					options;
					parser;
					constructor(e) {
						this.options = e || i;
					}
					space(e) {
						return '';
					}
					code({ text: e, lang: t, escaped: n }) {
						let r = (t || '').match(a.notSpaceStart)?.[0],
							i =
								e.replace(a.endingNewline, '') +
								`
`;
						return r
							? '<pre><code class="language-' +
									et(r) +
									'">' +
									(n ? i : et(i, !0)) +
									`</code></pre>
`
							: '<pre><code>' +
									(n ? i : et(i, !0)) +
									`</code></pre>
`;
					}
					blockquote({ tokens: e }) {
						return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
					}
					html({ text: e }) {
						return e;
					}
					heading({ tokens: e, depth: t }) {
						return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
					}
					hr(e) {
						return `<hr>
`;
					}
					list(e) {
						let t = e.ordered,
							n = e.start,
							r = '';
						for (let t = 0; t < e.items.length; t++) {
							let n = e.items[t];
							r += this.listitem(n);
						}
						let i = t ? 'ol' : 'ul';
						return (
							'<' +
							i +
							(t && 1 !== n ? ' start="' + n + '"' : '') +
							`>
` +
							r +
							'</' +
							i +
							`>
`
						);
					}
					listitem(e) {
						let t = '';
						if (e.task) {
							let n = this.checkbox({ checked: !!e.checked });
							e.loose
								? e.tokens[0]?.type === 'paragraph'
									? ((e.tokens[0].text = n + ' ' + e.tokens[0].text),
										e.tokens[0].tokens &&
											e.tokens[0].tokens.length > 0 &&
											'text' === e.tokens[0].tokens[0].type &&
											((e.tokens[0].tokens[0].text = n + ' ' + et(e.tokens[0].tokens[0].text)),
											(e.tokens[0].tokens[0].escaped = !0)))
									: e.tokens.unshift({ type: 'text', raw: n + ' ', text: n + ' ', escaped: !0 })
								: (t += n + ' ');
						}
						return (
							(t += this.parser.parse(e.tokens, !!e.loose)),
							`<li>${t}</li>
`
						);
					}
					checkbox({ checked: e }) {
						return '<input ' + (e ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
					}
					paragraph({ tokens: e }) {
						return `<p>${this.parser.parseInline(e)}</p>
`;
					}
					table(e) {
						let t = '',
							n = '';
						for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
						t += this.tablerow({ text: n });
						let r = '';
						for (let t = 0; t < e.rows.length; t++) {
							let i = e.rows[t];
							n = '';
							for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
							r += this.tablerow({ text: n });
						}
						return (
							r && (r = `<tbody>${r}</tbody>`),
							`<table>
<thead>
` +
								t +
								`</thead>
` +
								r +
								`</table>
`
						);
					}
					tablerow({ text: e }) {
						return `<tr>
${e}</tr>
`;
					}
					tablecell(e) {
						let t = this.parser.parseInline(e.tokens),
							n = e.header ? 'th' : 'td';
						return (
							(e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
							t +
							`</${n}>
`
						);
					}
					strong({ tokens: e }) {
						return `<strong>${this.parser.parseInline(e)}</strong>`;
					}
					em({ tokens: e }) {
						return `<em>${this.parser.parseInline(e)}</em>`;
					}
					codespan({ text: e }) {
						return `<code>${et(e, !0)}</code>`;
					}
					br(e) {
						return '<br>';
					}
					del({ tokens: e }) {
						return `<del>${this.parser.parseInline(e)}</del>`;
					}
					link({ href: e, title: t, tokens: n }) {
						let r = this.parser.parseInline(n),
							i = en(e);
						if (null === i) return r;
						let l = '<a href="' + (e = i) + '"';
						return (t && (l += ' title="' + et(t) + '"'), (l += '>' + r + '</a>'));
					}
					image({ href: e, title: t, text: n, tokens: r }) {
						r && (n = this.parser.parseInline(r, this.parser.textRenderer));
						let i = en(e);
						if (null === i) return et(n);
						e = i;
						let l = `<img src="${e}" alt="${n}"`;
						return (t && (l += ` title="${et(t)}"`), (l += '>'));
					}
					text(e) {
						return 'tokens' in e && e.tokens
							? this.parser.parseInline(e.tokens)
							: 'escaped' in e && e.escaped
								? e.text
								: et(e.text);
					}
				},
				ec = class {
					strong({ text: e }) {
						return e;
					}
					em({ text: e }) {
						return e;
					}
					codespan({ text: e }) {
						return e;
					}
					del({ text: e }) {
						return e;
					}
					html({ text: e }) {
						return e;
					}
					text({ text: e }) {
						return e;
					}
					link({ text: e }) {
						return '' + e;
					}
					image({ text: e }) {
						return '' + e;
					}
					br() {
						return '';
					}
				},
				ep = class e {
					options;
					renderer;
					textRenderer;
					constructor(e) {
						((this.options = e || i),
							(this.options.renderer = this.options.renderer || new eo()),
							(this.renderer = this.options.renderer),
							(this.renderer.options = this.options),
							(this.renderer.parser = this),
							(this.textRenderer = new ec()));
					}
					static parse(t, n) {
						return new e(n).parse(t);
					}
					static parseInline(t, n) {
						return new e(n).parseInline(t);
					}
					parse(e, t = !0) {
						let n = '';
						for (let r = 0; r < e.length; r++) {
							let i = e[r];
							if (this.options.extensions?.renderers?.[i.type]) {
								let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
								if (
									!1 !== e ||
									![
										'space',
										'hr',
										'heading',
										'code',
										'table',
										'blockquote',
										'list',
										'html',
										'paragraph',
										'text',
									].includes(i.type)
								) {
									n += e || '';
									continue;
								}
							}
							switch (i.type) {
								case 'space':
									n += this.renderer.space(i);
									continue;
								case 'hr':
									n += this.renderer.hr(i);
									continue;
								case 'heading':
									n += this.renderer.heading(i);
									continue;
								case 'code':
									n += this.renderer.code(i);
									continue;
								case 'table':
									n += this.renderer.table(i);
									continue;
								case 'blockquote':
									n += this.renderer.blockquote(i);
									continue;
								case 'list':
									n += this.renderer.list(i);
									continue;
								case 'html':
									n += this.renderer.html(i);
									continue;
								case 'paragraph':
									n += this.renderer.paragraph(i);
									continue;
								case 'text': {
									let l = i,
										s = this.renderer.text(l);
									for (; r + 1 < e.length && 'text' === e[r + 1].type; )
										((l = e[++r]),
											(s +=
												`
` + this.renderer.text(l)));
									t
										? (n += this.renderer.paragraph({
												type: 'paragraph',
												raw: s,
												text: s,
												tokens: [{ type: 'text', raw: s, text: s, escaped: !0 }],
											}))
										: (n += s);
									continue;
								}
								default: {
									let e = 'Token with "' + i.type + '" type was not found.';
									if (this.options.silent) return (console.error(e), '');
									throw Error(e);
								}
							}
						}
						return n;
					}
					parseInline(e, t = this.renderer) {
						let n = '';
						for (let r = 0; r < e.length; r++) {
							let i = e[r];
							if (this.options.extensions?.renderers?.[i.type]) {
								let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
								if (
									!1 !== e ||
									!['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(i.type)
								) {
									n += e || '';
									continue;
								}
							}
							switch (i.type) {
								case 'escape':
								case 'text':
									n += t.text(i);
									break;
								case 'html':
									n += t.html(i);
									break;
								case 'link':
									n += t.link(i);
									break;
								case 'image':
									n += t.image(i);
									break;
								case 'strong':
									n += t.strong(i);
									break;
								case 'em':
									n += t.em(i);
									break;
								case 'codespan':
									n += t.codespan(i);
									break;
								case 'br':
									n += t.br(i);
									break;
								case 'del':
									n += t.del(i);
									break;
								default: {
									let e = 'Token with "' + i.type + '" type was not found.';
									if (this.options.silent) return (console.error(e), '');
									throw Error(e);
								}
							}
						}
						return n;
					}
				},
				eu = class {
					options;
					block;
					constructor(e) {
						this.options = e || i;
					}
					static passThroughHooks = new Set(['preprocess', 'postprocess', 'processAllTokens']);
					preprocess(e) {
						return e;
					}
					postprocess(e) {
						return e;
					}
					processAllTokens(e) {
						return e;
					}
					provideLexer() {
						return this.block ? ea.lex : ea.lexInline;
					}
					provideParser() {
						return this.block ? ep.parse : ep.parseInline;
					}
				},
				eh = new (class {
					defaults = r();
					options = this.setOptions;
					parse = this.parseMarkdown(!0);
					parseInline = this.parseMarkdown(!1);
					Parser = ep;
					Renderer = eo;
					TextRenderer = ec;
					Lexer = ea;
					Tokenizer = es;
					Hooks = eu;
					constructor(...e) {
						this.use(...e);
					}
					walkTokens(e, t) {
						let n = [];
						for (let r of e)
							switch (((n = n.concat(t.call(this, r))), r.type)) {
								case 'table':
									for (let e of r.header) n = n.concat(this.walkTokens(e.tokens, t));
									for (let e of r.rows) for (let r of e) n = n.concat(this.walkTokens(r.tokens, t));
									break;
								case 'list':
									n = n.concat(this.walkTokens(r.items, t));
									break;
								default: {
									let e = r;
									this.defaults.extensions?.childTokens?.[e.type]
										? this.defaults.extensions.childTokens[e.type].forEach((r) => {
												let i = e[r].flat(1 / 0);
												n = n.concat(this.walkTokens(i, t));
											})
										: e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
								}
							}
						return n;
					}
					use(...e) {
						let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
						return (
							e.forEach((e) => {
								let n = { ...e };
								if (
									((n.async = this.defaults.async || n.async || !1),
									e.extensions &&
										(e.extensions.forEach((e) => {
											if (!e.name) throw Error('extension name required');
											if ('renderer' in e) {
												let n = t.renderers[e.name];
												n
													? (t.renderers[e.name] = function (...t) {
															let r = e.renderer.apply(this, t);
															return (!1 === r && (r = n.apply(this, t)), r);
														})
													: (t.renderers[e.name] = e.renderer);
											}
											if ('tokenizer' in e) {
												if (!e.level || ('block' !== e.level && 'inline' !== e.level))
													throw Error("extension level must be 'block' or 'inline'");
												let n = t[e.level];
												(n ? n.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
													e.start &&
														('block' === e.level
															? t.startBlock
																? t.startBlock.push(e.start)
																: (t.startBlock = [e.start])
															: 'inline' === e.level &&
																(t.startInline ? t.startInline.push(e.start) : (t.startInline = [e.start]))));
											}
											'childTokens' in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
										}),
										(n.extensions = t)),
									e.renderer)
								) {
									let t = this.defaults.renderer || new eo(this.defaults);
									for (let n in e.renderer) {
										if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
										if (['options', 'parser'].includes(n)) continue;
										let r = e.renderer[n],
											i = t[n];
										t[n] = (...e) => {
											let n = r.apply(t, e);
											return (!1 === n && (n = i.apply(t, e)), n || '');
										};
									}
									n.renderer = t;
								}
								if (e.tokenizer) {
									let t = this.defaults.tokenizer || new es(this.defaults);
									for (let n in e.tokenizer) {
										if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
										if (['options', 'rules', 'lexer'].includes(n)) continue;
										let r = e.tokenizer[n],
											i = t[n];
										t[n] = (...e) => {
											let n = r.apply(t, e);
											return (!1 === n && (n = i.apply(t, e)), n);
										};
									}
									n.tokenizer = t;
								}
								if (e.hooks) {
									let t = this.defaults.hooks || new eu();
									for (let n in e.hooks) {
										if (!(n in t)) throw Error(`hook '${n}' does not exist`);
										if (['options', 'block'].includes(n)) continue;
										let r = e.hooks[n],
											i = t[n];
										eu.passThroughHooks.has(n)
											? (t[n] = (e) => {
													if (this.defaults.async) return Promise.resolve(r.call(t, e)).then((e) => i.call(t, e));
													let n = r.call(t, e);
													return i.call(t, n);
												})
											: (t[n] = (...e) => {
													let n = r.apply(t, e);
													return (!1 === n && (n = i.apply(t, e)), n);
												});
									}
									n.hooks = t;
								}
								if (e.walkTokens) {
									let t = this.defaults.walkTokens,
										r = e.walkTokens;
									n.walkTokens = function (e) {
										let n = [];
										return (n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n);
									};
								}
								this.defaults = { ...this.defaults, ...n };
							}),
							this
						);
					}
					setOptions(e) {
						return ((this.defaults = { ...this.defaults, ...e }), this);
					}
					lexer(e, t) {
						return ea.lex(e, t ?? this.defaults);
					}
					parser(e, t) {
						return ep.parse(e, t ?? this.defaults);
					}
					parseMarkdown(e) {
						return (t, n) => {
							let r = { ...n },
								i = { ...this.defaults, ...r },
								l = this.onError(!!i.silent, !!i.async);
							if (!0 === this.defaults.async && !1 === r.async)
								return l(
									Error(
										'marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.',
									),
								);
							if (typeof t > 'u' || null === t) return l(Error('marked(): input parameter is undefined or null'));
							if ('string' != typeof t)
								return l(
									Error(
										'marked(): input parameter is of type ' + Object.prototype.toString.call(t) + ', string expected',
									),
								);
							i.hooks && ((i.hooks.options = i), (i.hooks.block = e));
							let s = i.hooks ? i.hooks.provideLexer() : e ? ea.lex : ea.lexInline,
								a = i.hooks ? i.hooks.provideParser() : e ? ep.parse : ep.parseInline;
							if (i.async)
								return Promise.resolve(i.hooks ? i.hooks.preprocess(t) : t)
									.then((e) => s(e, i))
									.then((e) => (i.hooks ? i.hooks.processAllTokens(e) : e))
									.then((e) => (i.walkTokens ? Promise.all(this.walkTokens(e, i.walkTokens)).then(() => e) : e))
									.then((e) => a(e, i))
									.then((e) => (i.hooks ? i.hooks.postprocess(e) : e))
									.catch(l);
							try {
								i.hooks && (t = i.hooks.preprocess(t));
								let e = s(t, i);
								(i.hooks && (e = i.hooks.processAllTokens(e)), i.walkTokens && this.walkTokens(e, i.walkTokens));
								let n = a(e, i);
								return (i.hooks && (n = i.hooks.postprocess(n)), n);
							} catch (e) {
								return l(e);
							}
						};
					}
					onError(e, t) {
						return (n) => {
							if (
								((n.message += `
Please report this to https://github.com/markedjs/marked.`),
								e)
							) {
								let e = '<p>An error occurred:</p><pre>' + et(n.message + '', !0) + '</pre>';
								return t ? Promise.resolve(e) : e;
							}
							if (t) return Promise.reject(n);
							throw n;
						};
					}
				})();
			function ed(e, t) {
				return eh.parse(e, t);
			}
			((ed.options = ed.setOptions =
				function (e) {
					return (eh.setOptions(e), (ed.defaults = eh.defaults), (i = ed.defaults), ed);
				}),
				(ed.getDefaults = r),
				(ed.defaults = i),
				(ed.use = function (...e) {
					return (eh.use(...e), (ed.defaults = eh.defaults), (i = ed.defaults), ed);
				}),
				(ed.walkTokens = function (e, t) {
					return eh.walkTokens(e, t);
				}),
				(ed.parseInline = eh.parseInline),
				(ed.Parser = ep),
				(ed.parser = ep.parse),
				(ed.Renderer = eo),
				(ed.TextRenderer = ec),
				(ed.Lexer = ea),
				(ed.lexer = ea.lex),
				(ed.Tokenizer = es),
				(ed.Hooks = eu),
				(ed.parse = ed),
				ed.options,
				ed.setOptions,
				ed.use,
				ed.walkTokens,
				ed.parseInline,
				ep.parse,
				ea.lex);
		},
		8809: (e, t, n) => {
			n.d(t, { A: () => en });
			let { entries: r, setPrototypeOf: i, isFrozen: l, getPrototypeOf: s, getOwnPropertyDescriptor: a } = Object,
				{ freeze: o, seal: c, create: p } = Object,
				{ apply: u, construct: h } = 'undefined' != typeof Reflect && Reflect;
			(o ||
				(o = function (e) {
					return e;
				}),
				c ||
					(c = function (e) {
						return e;
					}),
				u ||
					(u = function (e, t, n) {
						return e.apply(t, n);
					}),
				h ||
					(h = function (e, t) {
						return new e(...t);
					}));
			let d = E(Array.prototype.forEach),
				f = E(Array.prototype.lastIndexOf),
				g = E(Array.prototype.pop),
				m = E(Array.prototype.push),
				k = E(Array.prototype.splice),
				x = E(String.prototype.toLowerCase),
				b = E(String.prototype.toString),
				y = E(String.prototype.match),
				w = E(String.prototype.replace),
				T = E(String.prototype.indexOf),
				S = E(String.prototype.trim),
				A = E(Object.prototype.hasOwnProperty),
				_ = E(RegExp.prototype.test),
				R =
					((K = TypeError),
					function () {
						for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						return h(K, t);
					});
			function E(e) {
				return function (t) {
					t instanceof RegExp && (t.lastIndex = 0);
					for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
					return u(e, t, r);
				};
			}
			function N(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x;
				i && i(e, null);
				let r = t.length;
				for (; r--; ) {
					let i = t[r];
					if ('string' == typeof i) {
						let e = n(i);
						e !== i && (l(t) || (t[r] = e), (i = e));
					}
					e[i] = !0;
				}
				return e;
			}
			function L(e) {
				let t = p(null);
				for (let [n, i] of r(e))
					A(e, n) &&
						(Array.isArray(i)
							? (t[n] = (function (e) {
									for (let t = 0; t < e.length; t++) A(e, t) || (e[t] = null);
									return e;
								})(i))
							: i && 'object' == typeof i && i.constructor === Object
								? (t[n] = L(i))
								: (t[n] = i));
				return t;
			}
			function C(e, t) {
				for (; null !== e; ) {
					let n = a(e, t);
					if (n) {
						if (n.get) return E(n.get);
						if ('function' == typeof n.value) return E(n.value);
					}
					e = s(e);
				}
				return function () {
					return null;
				};
			}
			let I = o([
					'a',
					'abbr',
					'acronym',
					'address',
					'area',
					'article',
					'aside',
					'audio',
					'b',
					'bdi',
					'bdo',
					'big',
					'blink',
					'blockquote',
					'body',
					'br',
					'button',
					'canvas',
					'caption',
					'center',
					'cite',
					'code',
					'col',
					'colgroup',
					'content',
					'data',
					'datalist',
					'dd',
					'decorator',
					'del',
					'details',
					'dfn',
					'dialog',
					'dir',
					'div',
					'dl',
					'dt',
					'element',
					'em',
					'fieldset',
					'figcaption',
					'figure',
					'font',
					'footer',
					'form',
					'h1',
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'head',
					'header',
					'hgroup',
					'hr',
					'html',
					'i',
					'img',
					'input',
					'ins',
					'kbd',
					'label',
					'legend',
					'li',
					'main',
					'map',
					'mark',
					'marquee',
					'menu',
					'menuitem',
					'meter',
					'nav',
					'nobr',
					'ol',
					'optgroup',
					'option',
					'output',
					'p',
					'picture',
					'pre',
					'progress',
					'q',
					'rp',
					'rt',
					'ruby',
					's',
					'samp',
					'section',
					'select',
					'shadow',
					'small',
					'source',
					'spacer',
					'span',
					'strike',
					'strong',
					'style',
					'sub',
					'summary',
					'sup',
					'table',
					'tbody',
					'td',
					'template',
					'textarea',
					'tfoot',
					'th',
					'thead',
					'time',
					'tr',
					'track',
					'tt',
					'u',
					'ul',
					'var',
					'video',
					'wbr',
				]),
				v = o([
					'svg',
					'a',
					'altglyph',
					'altglyphdef',
					'altglyphitem',
					'animatecolor',
					'animatemotion',
					'animatetransform',
					'circle',
					'clippath',
					'defs',
					'desc',
					'ellipse',
					'filter',
					'font',
					'g',
					'glyph',
					'glyphref',
					'hkern',
					'image',
					'line',
					'lineargradient',
					'marker',
					'mask',
					'metadata',
					'mpath',
					'path',
					'pattern',
					'polygon',
					'polyline',
					'radialgradient',
					'rect',
					'stop',
					'style',
					'switch',
					'symbol',
					'text',
					'textpath',
					'title',
					'tref',
					'tspan',
					'view',
					'vkern',
				]),
				z = o([
					'feBlend',
					'feColorMatrix',
					'feComponentTransfer',
					'feComposite',
					'feConvolveMatrix',
					'feDiffuseLighting',
					'feDisplacementMap',
					'feDistantLight',
					'feDropShadow',
					'feFlood',
					'feFuncA',
					'feFuncB',
					'feFuncG',
					'feFuncR',
					'feGaussianBlur',
					'feImage',
					'feMerge',
					'feMergeNode',
					'feMorphology',
					'feOffset',
					'fePointLight',
					'feSpecularLighting',
					'feSpotLight',
					'feTile',
					'feTurbulence',
				]),
				$ = o([
					'animate',
					'color-profile',
					'cursor',
					'discard',
					'font-face',
					'font-face-format',
					'font-face-name',
					'font-face-src',
					'font-face-uri',
					'foreignobject',
					'hatch',
					'hatchpath',
					'mesh',
					'meshgradient',
					'meshpatch',
					'meshrow',
					'missing-glyph',
					'script',
					'set',
					'solidcolor',
					'unknown',
					'use',
				]),
				D = o([
					'math',
					'menclose',
					'merror',
					'mfenced',
					'mfrac',
					'mglyph',
					'mi',
					'mlabeledtr',
					'mmultiscripts',
					'mn',
					'mo',
					'mover',
					'mpadded',
					'mphantom',
					'mroot',
					'mrow',
					'ms',
					'mspace',
					'msqrt',
					'mstyle',
					'msub',
					'msup',
					'msubsup',
					'mtable',
					'mtd',
					'mtext',
					'mtr',
					'munder',
					'munderover',
					'mprescripts',
				]),
				O = o([
					'maction',
					'maligngroup',
					'malignmark',
					'mlongdiv',
					'mscarries',
					'mscarry',
					'msgroup',
					'mstack',
					'msline',
					'msrow',
					'semantics',
					'annotation',
					'annotation-xml',
					'mprescripts',
					'none',
				]),
				M = o(['#text']),
				P = o([
					'accept',
					'action',
					'align',
					'alt',
					'autocapitalize',
					'autocomplete',
					'autopictureinpicture',
					'autoplay',
					'background',
					'bgcolor',
					'border',
					'capture',
					'cellpadding',
					'cellspacing',
					'checked',
					'cite',
					'class',
					'clear',
					'color',
					'cols',
					'colspan',
					'controls',
					'controlslist',
					'coords',
					'crossorigin',
					'datetime',
					'decoding',
					'default',
					'dir',
					'disabled',
					'disablepictureinpicture',
					'disableremoteplayback',
					'download',
					'draggable',
					'enctype',
					'enterkeyhint',
					'face',
					'for',
					'headers',
					'height',
					'hidden',
					'high',
					'href',
					'hreflang',
					'id',
					'inputmode',
					'integrity',
					'ismap',
					'kind',
					'label',
					'lang',
					'list',
					'loading',
					'loop',
					'low',
					'max',
					'maxlength',
					'media',
					'method',
					'min',
					'minlength',
					'multiple',
					'muted',
					'name',
					'nonce',
					'noshade',
					'novalidate',
					'nowrap',
					'open',
					'optimum',
					'pattern',
					'placeholder',
					'playsinline',
					'popover',
					'popovertarget',
					'popovertargetaction',
					'poster',
					'preload',
					'pubdate',
					'radiogroup',
					'readonly',
					'rel',
					'required',
					'rev',
					'reversed',
					'role',
					'rows',
					'rowspan',
					'spellcheck',
					'scope',
					'selected',
					'shape',
					'size',
					'sizes',
					'span',
					'srclang',
					'start',
					'src',
					'srcset',
					'step',
					'style',
					'summary',
					'tabindex',
					'title',
					'translate',
					'type',
					'usemap',
					'valign',
					'value',
					'width',
					'wrap',
					'xmlns',
					'slot',
				]),
				B = o([
					'accent-height',
					'accumulate',
					'additive',
					'alignment-baseline',
					'amplitude',
					'ascent',
					'attributename',
					'attributetype',
					'azimuth',
					'basefrequency',
					'baseline-shift',
					'begin',
					'bias',
					'by',
					'class',
					'clip',
					'clippathunits',
					'clip-path',
					'clip-rule',
					'color',
					'color-interpolation',
					'color-interpolation-filters',
					'color-profile',
					'color-rendering',
					'cx',
					'cy',
					'd',
					'dx',
					'dy',
					'diffuseconstant',
					'direction',
					'display',
					'divisor',
					'dur',
					'edgemode',
					'elevation',
					'end',
					'exponent',
					'fill',
					'fill-opacity',
					'fill-rule',
					'filter',
					'filterunits',
					'flood-color',
					'flood-opacity',
					'font-family',
					'font-size',
					'font-size-adjust',
					'font-stretch',
					'font-style',
					'font-variant',
					'font-weight',
					'fx',
					'fy',
					'g1',
					'g2',
					'glyph-name',
					'glyphref',
					'gradientunits',
					'gradienttransform',
					'height',
					'href',
					'id',
					'image-rendering',
					'in',
					'in2',
					'intercept',
					'k',
					'k1',
					'k2',
					'k3',
					'k4',
					'kerning',
					'keypoints',
					'keysplines',
					'keytimes',
					'lang',
					'lengthadjust',
					'letter-spacing',
					'kernelmatrix',
					'kernelunitlength',
					'lighting-color',
					'local',
					'marker-end',
					'marker-mid',
					'marker-start',
					'markerheight',
					'markerunits',
					'markerwidth',
					'maskcontentunits',
					'maskunits',
					'max',
					'mask',
					'media',
					'method',
					'mode',
					'min',
					'name',
					'numoctaves',
					'offset',
					'operator',
					'opacity',
					'order',
					'orient',
					'orientation',
					'origin',
					'overflow',
					'paint-order',
					'path',
					'pathlength',
					'patterncontentunits',
					'patterntransform',
					'patternunits',
					'points',
					'preservealpha',
					'preserveaspectratio',
					'primitiveunits',
					'r',
					'rx',
					'ry',
					'radius',
					'refx',
					'refy',
					'repeatcount',
					'repeatdur',
					'restart',
					'result',
					'rotate',
					'scale',
					'seed',
					'shape-rendering',
					'slope',
					'specularconstant',
					'specularexponent',
					'spreadmethod',
					'startoffset',
					'stddeviation',
					'stitchtiles',
					'stop-color',
					'stop-opacity',
					'stroke-dasharray',
					'stroke-dashoffset',
					'stroke-linecap',
					'stroke-linejoin',
					'stroke-miterlimit',
					'stroke-opacity',
					'stroke',
					'stroke-width',
					'style',
					'surfacescale',
					'systemlanguage',
					'tabindex',
					'tablevalues',
					'targetx',
					'targety',
					'transform',
					'transform-origin',
					'text-anchor',
					'text-decoration',
					'text-rendering',
					'textlength',
					'type',
					'u1',
					'u2',
					'unicode',
					'values',
					'viewbox',
					'visibility',
					'version',
					'vert-adv-y',
					'vert-origin-x',
					'vert-origin-y',
					'width',
					'word-spacing',
					'wrap',
					'writing-mode',
					'xchannelselector',
					'ychannelselector',
					'x',
					'x1',
					'x2',
					'xmlns',
					'y',
					'y1',
					'y2',
					'z',
					'zoomandpan',
				]),
				U = o([
					'accent',
					'accentunder',
					'align',
					'bevelled',
					'close',
					'columnsalign',
					'columnlines',
					'columnspan',
					'denomalign',
					'depth',
					'dir',
					'display',
					'displaystyle',
					'encoding',
					'fence',
					'frame',
					'height',
					'href',
					'id',
					'largeop',
					'length',
					'linethickness',
					'lspace',
					'lquote',
					'mathbackground',
					'mathcolor',
					'mathsize',
					'mathvariant',
					'maxsize',
					'minsize',
					'movablelimits',
					'notation',
					'numalign',
					'open',
					'rowalign',
					'rowlines',
					'rowspacing',
					'rowspan',
					'rspace',
					'rquote',
					'scriptlevel',
					'scriptminsize',
					'scriptsizemultiplier',
					'selection',
					'separator',
					'separators',
					'stretchy',
					'subscriptshift',
					'supscriptshift',
					'symmetric',
					'voffset',
					'width',
					'xmlns',
				]),
				H = o(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
				q = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
				F = c(/<%[\w\W]*|[\w\W]*%>/gm),
				G = c(/\$\{[\w\W]*/gm),
				W = c(/^data-[\-\w.\u00B7-\uFFFF]+$/),
				Z = c(/^aria-[\-\w]+$/),
				j = c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
				Y = c(/^(?:\w+script|data):/i),
				Q = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
				X = c(/^html$/i);
			var K,
				V = Object.freeze({
					__proto__: null,
					ARIA_ATTR: Z,
					ATTR_WHITESPACE: Q,
					CUSTOM_ELEMENT: c(/^[a-z][.\w]*(-[.\w]+)+$/i),
					DATA_ATTR: W,
					DOCTYPE_NAME: X,
					ERB_EXPR: F,
					IS_ALLOWED_URI: j,
					IS_SCRIPT_OR_DATA: Y,
					MUSTACHE_EXPR: q,
					TMPLIT_EXPR: G,
				});
			let J = { element: 1, text: 3, progressingInstruction: 7, comment: 8, document: 9 },
				ee = function (e, t) {
					if ('object' != typeof e || 'function' != typeof e.createPolicy) return null;
					let n = null,
						r = 'data-tt-policy-suffix';
					t && t.hasAttribute(r) && (n = t.getAttribute(r));
					let i = 'dompurify' + (n ? '#' + n : '');
					try {
						return e.createPolicy(i, { createHTML: (e) => e, createScriptURL: (e) => e });
					} catch (e) {
						return (console.warn('TrustedTypes policy ' + i + ' could not be created.'), null);
					}
				},
				et = function () {
					return {
						afterSanitizeAttributes: [],
						afterSanitizeElements: [],
						afterSanitizeShadowDOM: [],
						beforeSanitizeAttributes: [],
						beforeSanitizeElements: [],
						beforeSanitizeShadowDOM: [],
						uponSanitizeAttribute: [],
						uponSanitizeElement: [],
						uponSanitizeShadowNode: [],
					};
				};
			var en = (function e() {
				let t,
					n =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: 'undefined' == typeof window
								? null
								: window,
					i = (t) => e(t);
				if (
					((i.version = '3.2.6'),
					(i.removed = []),
					!n || !n.document || n.document.nodeType !== J.document || !n.Element)
				)
					return ((i.isSupported = !1), i);
				let { document: l } = n,
					s = l,
					a = s.currentScript,
					{
						DocumentFragment: c,
						HTMLTemplateElement: u,
						Node: h,
						Element: E,
						NodeFilter: q,
						NamedNodeMap: F = n.NamedNodeMap || n.MozNamedAttrMap,
						HTMLFormElement: G,
						DOMParser: W,
						trustedTypes: Z,
					} = n,
					Y = E.prototype,
					Q = C(Y, 'cloneNode'),
					K = C(Y, 'remove'),
					en = C(Y, 'nextSibling'),
					er = C(Y, 'childNodes'),
					ei = C(Y, 'parentNode');
				if ('function' == typeof u) {
					let e = l.createElement('template');
					e.content && e.content.ownerDocument && (l = e.content.ownerDocument);
				}
				let el = '',
					{ implementation: es, createNodeIterator: ea, createDocumentFragment: eo, getElementsByTagName: ec } = l,
					{ importNode: ep } = s,
					eu = et();
				i.isSupported = 'function' == typeof r && 'function' == typeof ei && es && void 0 !== es.createHTMLDocument;
				let {
						MUSTACHE_EXPR: eh,
						ERB_EXPR: ed,
						TMPLIT_EXPR: ef,
						DATA_ATTR: eg,
						ARIA_ATTR: em,
						IS_SCRIPT_OR_DATA: ek,
						ATTR_WHITESPACE: ex,
						CUSTOM_ELEMENT: eb,
					} = V,
					{ IS_ALLOWED_URI: ey } = V,
					ew = null,
					eT = N({}, [...I, ...v, ...z, ...D, ...M]),
					eS = null,
					eA = N({}, [...P, ...B, ...U, ...H]),
					e_ = Object.seal(
						p(null, {
							tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
							attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
							allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
						}),
					),
					eR = null,
					eE = null,
					eN = !0,
					eL = !0,
					eC = !1,
					eI = !0,
					ev = !1,
					ez = !0,
					e$ = !1,
					eD = !1,
					eO = !1,
					eM = !1,
					eP = !1,
					eB = !1,
					eU = !0,
					eH = !1,
					eq = !0,
					eF = !1,
					eG = {},
					eW = null,
					eZ = N({}, [
						'annotation-xml',
						'audio',
						'colgroup',
						'desc',
						'foreignobject',
						'head',
						'iframe',
						'math',
						'mi',
						'mn',
						'mo',
						'ms',
						'mtext',
						'noembed',
						'noframes',
						'noscript',
						'plaintext',
						'script',
						'style',
						'svg',
						'template',
						'thead',
						'title',
						'video',
						'xmp',
					]),
					ej = null,
					eY = N({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
					eQ = null,
					eX = N({}, [
						'alt',
						'class',
						'for',
						'id',
						'label',
						'name',
						'pattern',
						'placeholder',
						'role',
						'summary',
						'title',
						'value',
						'style',
						'xmlns',
					]),
					eK = 'http://www.w3.org/1998/Math/MathML',
					eV = 'http://www.w3.org/2000/svg',
					eJ = 'http://www.w3.org/1999/xhtml',
					e0 = eJ,
					e1 = !1,
					e3 = null,
					e2 = N({}, [eK, eV, eJ], b),
					e9 = N({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
					e6 = N({}, ['annotation-xml']),
					e4 = N({}, ['title', 'style', 'font', 'a', 'script']),
					e8 = null,
					e5 = ['application/xhtml+xml', 'text/html'],
					e7 = null,
					te = null,
					tt = l.createElement('form'),
					tn = function (e) {
						return e instanceof RegExp || e instanceof Function;
					},
					tr = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						if (!te || te !== e) {
							if (
								((e && 'object' == typeof e) || (e = {}),
								(e = L(e)),
								(e7 =
									'application/xhtml+xml' ===
									(e8 = -1 === e5.indexOf(e.PARSER_MEDIA_TYPE) ? 'text/html' : e.PARSER_MEDIA_TYPE)
										? b
										: x),
								(ew = A(e, 'ALLOWED_TAGS') ? N({}, e.ALLOWED_TAGS, e7) : eT),
								(eS = A(e, 'ALLOWED_ATTR') ? N({}, e.ALLOWED_ATTR, e7) : eA),
								(e3 = A(e, 'ALLOWED_NAMESPACES') ? N({}, e.ALLOWED_NAMESPACES, b) : e2),
								(eQ = A(e, 'ADD_URI_SAFE_ATTR') ? N(L(eX), e.ADD_URI_SAFE_ATTR, e7) : eX),
								(ej = A(e, 'ADD_DATA_URI_TAGS') ? N(L(eY), e.ADD_DATA_URI_TAGS, e7) : eY),
								(eW = A(e, 'FORBID_CONTENTS') ? N({}, e.FORBID_CONTENTS, e7) : eZ),
								(eR = A(e, 'FORBID_TAGS') ? N({}, e.FORBID_TAGS, e7) : L({})),
								(eE = A(e, 'FORBID_ATTR') ? N({}, e.FORBID_ATTR, e7) : L({})),
								(eG = !!A(e, 'USE_PROFILES') && e.USE_PROFILES),
								(eN = !1 !== e.ALLOW_ARIA_ATTR),
								(eL = !1 !== e.ALLOW_DATA_ATTR),
								(eC = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
								(eI = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
								(ev = e.SAFE_FOR_TEMPLATES || !1),
								(ez = !1 !== e.SAFE_FOR_XML),
								(e$ = e.WHOLE_DOCUMENT || !1),
								(eM = e.RETURN_DOM || !1),
								(eP = e.RETURN_DOM_FRAGMENT || !1),
								(eB = e.RETURN_TRUSTED_TYPE || !1),
								(eO = e.FORCE_BODY || !1),
								(eU = !1 !== e.SANITIZE_DOM),
								(eH = e.SANITIZE_NAMED_PROPS || !1),
								(eq = !1 !== e.KEEP_CONTENT),
								(eF = e.IN_PLACE || !1),
								(ey = e.ALLOWED_URI_REGEXP || j),
								(e0 = e.NAMESPACE || eJ),
								(e9 = e.MATHML_TEXT_INTEGRATION_POINTS || e9),
								(e6 = e.HTML_INTEGRATION_POINTS || e6),
								(e_ = e.CUSTOM_ELEMENT_HANDLING || {}),
								e.CUSTOM_ELEMENT_HANDLING &&
									tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
									(e_.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
								e.CUSTOM_ELEMENT_HANDLING &&
									tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
									(e_.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
								e.CUSTOM_ELEMENT_HANDLING &&
									'boolean' == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
									(e_.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
								ev && (eL = !1),
								eP && (eM = !0),
								eG &&
									((ew = N({}, M)),
									(eS = []),
									!0 === eG.html && (N(ew, I), N(eS, P)),
									!0 === eG.svg && (N(ew, v), N(eS, B), N(eS, H)),
									!0 === eG.svgFilters && (N(ew, z), N(eS, B), N(eS, H)),
									!0 === eG.mathMl && (N(ew, D), N(eS, U), N(eS, H))),
								e.ADD_TAGS && (ew === eT && (ew = L(ew)), N(ew, e.ADD_TAGS, e7)),
								e.ADD_ATTR && (eS === eA && (eS = L(eS)), N(eS, e.ADD_ATTR, e7)),
								e.ADD_URI_SAFE_ATTR && N(eQ, e.ADD_URI_SAFE_ATTR, e7),
								e.FORBID_CONTENTS && (eW === eZ && (eW = L(eW)), N(eW, e.FORBID_CONTENTS, e7)),
								eq && (ew['#text'] = !0),
								e$ && N(ew, ['html', 'head', 'body']),
								ew.table && (N(ew, ['tbody']), delete eR.tbody),
								e.TRUSTED_TYPES_POLICY)
							) {
								if ('function' != typeof e.TRUSTED_TYPES_POLICY.createHTML)
									throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
								if ('function' != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
									throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
								el = (t = e.TRUSTED_TYPES_POLICY).createHTML('');
							} else (void 0 === t && (t = ee(Z, a)), null !== t && 'string' == typeof el && (el = t.createHTML('')));
							(o && o(e), (te = e));
						}
					},
					ti = N({}, [...v, ...z, ...$]),
					tl = N({}, [...D, ...O]),
					ts = function (e) {
						let t = ei(e);
						(t && t.tagName) || (t = { namespaceURI: e0, tagName: 'template' });
						let n = x(e.tagName),
							r = x(t.tagName);
						return (
							!!e3[e.namespaceURI] &&
							(e.namespaceURI === eV
								? t.namespaceURI === eJ
									? 'svg' === n
									: t.namespaceURI === eK
										? 'svg' === n && ('annotation-xml' === r || e9[r])
										: !!ti[n]
								: e.namespaceURI === eK
									? t.namespaceURI === eJ
										? 'math' === n
										: t.namespaceURI === eV
											? 'math' === n && e6[r]
											: !!tl[n]
									: e.namespaceURI === eJ
										? (t.namespaceURI !== eV || !!e6[r]) &&
											(t.namespaceURI !== eK || !!e9[r]) &&
											!tl[n] &&
											(e4[n] || !ti[n])
										: 'application/xhtml+xml' === e8 && !!e3[e.namespaceURI])
						);
					},
					ta = function (e) {
						m(i.removed, { element: e });
						try {
							ei(e).removeChild(e);
						} catch (t) {
							K(e);
						}
					},
					to = function (e, t) {
						try {
							m(i.removed, { attribute: t.getAttributeNode(e), from: t });
						} catch (e) {
							m(i.removed, { attribute: null, from: t });
						}
						if ((t.removeAttribute(e), 'is' === e))
							if (eM || eP)
								try {
									ta(t);
								} catch (e) {}
							else
								try {
									t.setAttribute(e, '');
								} catch (e) {}
					},
					tc = function (e) {
						let n = null,
							r = null;
						if (eO) e = '<remove></remove>' + e;
						else {
							let t = y(e, /^[\r\n\t ]+/);
							r = t && t[0];
						}
						'application/xhtml+xml' === e8 &&
							e0 === eJ &&
							(e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + '</body></html>');
						let i = t ? t.createHTML(e) : e;
						if (e0 === eJ)
							try {
								n = new W().parseFromString(i, e8);
							} catch (e) {}
						if (!n || !n.documentElement) {
							n = es.createDocument(e0, 'template', null);
							try {
								n.documentElement.innerHTML = e1 ? el : i;
							} catch (e) {}
						}
						let s = n.body || n.documentElement;
						return (e && r && s.insertBefore(l.createTextNode(r), s.childNodes[0] || null), e0 === eJ)
							? ec.call(n, e$ ? 'html' : 'body')[0]
							: e$
								? n.documentElement
								: s;
					},
					tp = function (e) {
						return ea.call(
							e.ownerDocument || e,
							e,
							q.SHOW_ELEMENT | q.SHOW_COMMENT | q.SHOW_TEXT | q.SHOW_PROCESSING_INSTRUCTION | q.SHOW_CDATA_SECTION,
							null,
						);
					},
					tu = function (e) {
						return (
							e instanceof G &&
							('string' != typeof e.nodeName ||
								'string' != typeof e.textContent ||
								'function' != typeof e.removeChild ||
								!(e.attributes instanceof F) ||
								'function' != typeof e.removeAttribute ||
								'function' != typeof e.setAttribute ||
								'string' != typeof e.namespaceURI ||
								'function' != typeof e.insertBefore ||
								'function' != typeof e.hasChildNodes)
						);
					},
					th = function (e) {
						return 'function' == typeof h && e instanceof h;
					};
				function td(e, t, n) {
					d(e, (e) => {
						e.call(i, t, n, te);
					});
				}
				let tf = function (e) {
						let t = null;
						if ((td(eu.beforeSanitizeElements, e, null), tu(e))) return (ta(e), !0);
						let n = e7(e.nodeName);
						if (
							(td(eu.uponSanitizeElement, e, { tagName: n, allowedTags: ew }),
							(ez &&
								e.hasChildNodes() &&
								!th(e.firstElementChild) &&
								_(/<[/\w!]/g, e.innerHTML) &&
								_(/<[/\w!]/g, e.textContent)) ||
								e.nodeType === J.progressingInstruction ||
								(ez && e.nodeType === J.comment && _(/<[/\w]/g, e.data)))
						)
							return (ta(e), !0);
						if (!ew[n] || eR[n]) {
							if (
								!eR[n] &&
								tm(n) &&
								((e_.tagNameCheck instanceof RegExp && _(e_.tagNameCheck, n)) ||
									(e_.tagNameCheck instanceof Function && e_.tagNameCheck(n)))
							)
								return !1;
							if (eq && !eW[n]) {
								let t = ei(e) || e.parentNode,
									n = er(e) || e.childNodes;
								if (n && t) {
									let r = n.length;
									for (let i = r - 1; i >= 0; --i) {
										let r = Q(n[i], !0);
										((r.__removalCount = (e.__removalCount || 0) + 1), t.insertBefore(r, en(e)));
									}
								}
							}
							return (ta(e), !0);
						}
						return (e instanceof E && !ts(e)) ||
							(('noscript' === n || 'noembed' === n || 'noframes' === n) &&
								_(/<\/no(script|embed|frames)/i, e.innerHTML))
							? (ta(e), !0)
							: (ev &&
									e.nodeType === J.text &&
									((t = e.textContent),
									d([eh, ed, ef], (e) => {
										t = w(t, e, ' ');
									}),
									e.textContent !== t && (m(i.removed, { element: e.cloneNode() }), (e.textContent = t))),
								td(eu.afterSanitizeElements, e, null),
								!1);
					},
					tg = function (e, t, n) {
						if (eU && ('id' === t || 'name' === t) && (n in l || n in tt)) return !1;
						if (eL && !eE[t] && _(eg, t));
						else if (eN && _(em, t));
						else if (!eS[t] || eE[t]) {
							if (
								!(
									(tm(e) &&
										((e_.tagNameCheck instanceof RegExp && _(e_.tagNameCheck, e)) ||
											(e_.tagNameCheck instanceof Function && e_.tagNameCheck(e))) &&
										((e_.attributeNameCheck instanceof RegExp && _(e_.attributeNameCheck, t)) ||
											(e_.attributeNameCheck instanceof Function && e_.attributeNameCheck(t)))) ||
									('is' === t &&
										e_.allowCustomizedBuiltInElements &&
										((e_.tagNameCheck instanceof RegExp && _(e_.tagNameCheck, n)) ||
											(e_.tagNameCheck instanceof Function && e_.tagNameCheck(n))))
								)
							)
								return !1;
						} else if (eQ[t]);
						else if (_(ey, w(n, ex, '')));
						else if (
							('src' === t || 'xlink:href' === t || 'href' === t) &&
							'script' !== e &&
							0 === T(n, 'data:') &&
							ej[e]
						);
						else if (eC && !_(ek, w(n, ex, '')));
						else if (n) return !1;
						return !0;
					},
					tm = function (e) {
						return 'annotation-xml' !== e && y(e, eb);
					},
					tk = function (e) {
						td(eu.beforeSanitizeAttributes, e, null);
						let { attributes: n } = e;
						if (!n || tu(e)) return;
						let r = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: eS, forceKeepAttr: void 0 },
							l = n.length;
						for (; l--; ) {
							let { name: s, namespaceURI: a, value: o } = n[l],
								c = e7(s),
								p = 'value' === s ? o : S(o);
							if (
								((r.attrName = c),
								(r.attrValue = p),
								(r.keepAttr = !0),
								(r.forceKeepAttr = void 0),
								td(eu.uponSanitizeAttribute, e, r),
								(p = r.attrValue),
								eH && ('id' === c || 'name' === c) && (to(s, e), (p = 'user-content-' + p)),
								ez && _(/((--!?|])>)|<\/(style|title)/i, p))
							) {
								to(s, e);
								continue;
							}
							if (r.forceKeepAttr) continue;
							if (!r.keepAttr || (!eI && _(/\/>/i, p))) {
								to(s, e);
								continue;
							}
							ev &&
								d([eh, ed, ef], (e) => {
									p = w(p, e, ' ');
								});
							let u = e7(e.nodeName);
							if (!tg(u, c, p)) {
								to(s, e);
								continue;
							}
							if (t && 'object' == typeof Z && 'function' == typeof Z.getAttributeType)
								if (a);
								else
									switch (Z.getAttributeType(u, c)) {
										case 'TrustedHTML':
											p = t.createHTML(p);
											break;
										case 'TrustedScriptURL':
											p = t.createScriptURL(p);
									}
							if (p !== o)
								try {
									(a ? e.setAttributeNS(a, s, p) : e.setAttribute(s, p), tu(e) ? ta(e) : g(i.removed));
								} catch (t) {
									to(s, e);
								}
						}
						td(eu.afterSanitizeAttributes, e, null);
					},
					tx = function e(t) {
						let n = null,
							r = tp(t);
						for (td(eu.beforeSanitizeShadowDOM, t, null); (n = r.nextNode()); )
							(td(eu.uponSanitizeShadowNode, n, null), tf(n), tk(n), n.content instanceof c && e(n.content));
						td(eu.afterSanitizeShadowDOM, t, null);
					};
				return (
					(i.sanitize = function (e) {
						let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							r = null,
							l = null,
							a = null,
							o = null;
						if (((e1 = !e) && (e = '\x3c!--\x3e'), 'string' != typeof e && !th(e)))
							if ('function' == typeof e.toString) {
								if ('string' != typeof (e = e.toString())) throw R('dirty is not a string, aborting');
							} else throw R('toString is not a function');
						if (!i.isSupported) return e;
						if ((eD || tr(n), (i.removed = []), 'string' == typeof e && (eF = !1), eF)) {
							if (e.nodeName) {
								let t = e7(e.nodeName);
								if (!ew[t] || eR[t]) throw R('root node is forbidden and cannot be sanitized in-place');
							}
						} else if (e instanceof h)
							((l = (r = tc('\x3c!----\x3e')).ownerDocument.importNode(e, !0)).nodeType === J.element &&
								'BODY' === l.nodeName) ||
							'HTML' === l.nodeName
								? (r = l)
								: r.appendChild(l);
						else {
							if (!eM && !ev && !e$ && -1 === e.indexOf('<')) return t && eB ? t.createHTML(e) : e;
							if (!(r = tc(e))) return eM ? null : eB ? el : '';
						}
						r && eO && ta(r.firstChild);
						let p = tp(eF ? e : r);
						for (; (a = p.nextNode()); ) (tf(a), tk(a), a.content instanceof c && tx(a.content));
						if (eF) return e;
						if (eM) {
							if (eP) for (o = eo.call(r.ownerDocument); r.firstChild; ) o.appendChild(r.firstChild);
							else o = r;
							return ((eS.shadowroot || eS.shadowrootmode) && (o = ep.call(s, o, !0)), o);
						}
						let u = e$ ? r.outerHTML : r.innerHTML;
						return (
							e$ &&
								ew['!doctype'] &&
								r.ownerDocument &&
								r.ownerDocument.doctype &&
								r.ownerDocument.doctype.name &&
								_(X, r.ownerDocument.doctype.name) &&
								(u = '<!DOCTYPE ' + r.ownerDocument.doctype.name + '>\n' + u),
							ev &&
								d([eh, ed, ef], (e) => {
									u = w(u, e, ' ');
								}),
							t && eB ? t.createHTML(u) : u
						);
					}),
					(i.setConfig = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						(tr(e), (eD = !0));
					}),
					(i.clearConfig = function () {
						((te = null), (eD = !1));
					}),
					(i.isValidAttribute = function (e, t, n) {
						return (te || tr({}), tg(e7(e), e7(t), n));
					}),
					(i.addHook = function (e, t) {
						'function' == typeof t && m(eu[e], t);
					}),
					(i.removeHook = function (e, t) {
						if (void 0 !== t) {
							let n = f(eu[e], t);
							return -1 === n ? void 0 : k(eu[e], n, 1)[0];
						}
						return g(eu[e]);
					}),
					(i.removeHooks = function (e) {
						eu[e] = [];
					}),
					(i.removeAllHooks = function () {
						eu = et();
					}),
					i
				);
			})();
		},
	},
]);
