import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our Markdown Editor?</h3>
				<p className="mx-auto mt-4 max-w-3xl text-neutral-500">
					Write, preview, and polish your Markdown content in a distraction-free editor with GitHub-style rendering — no
					installs, no accounts.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">📝 Live Preview</h4>
						<p className="mt-2 text-sm text-neutral-500">
							See your Markdown rendered instantly with GitHub’s familiar styling as you type.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 Local & Private</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Everything stays on your device. No uploads, no tracking — your writing is yours.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Zero Setup</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Just open and start writing. No login or configuration required. Works offline too.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
