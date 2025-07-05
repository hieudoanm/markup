import Link from 'next/link';
import { FC } from 'react';

export const CallToAction: FC = () => {
	return (
		<section className="w-full py-16">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-8 text-center">
				<h3 className="text-2xl font-bold sm:text-3xl">Write and preview Markdown like GitHub</h3>
				<p className="text-neutral-500">
					Edit your Markdown with instant preview styled just like GitHub. No setup, no accounts — just clean and
					focused writing.
				</p>
				<div>
					<Link href="/app">
						<button
							type="button"
							className="cursor-pointer rounded-full border border-neutral-800 px-6 py-3 text-neutral-100">
							Launch Editor
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
