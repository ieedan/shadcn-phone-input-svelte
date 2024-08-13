import { marked } from 'marked';

export async function load() {
	const changelogPath =
		'https://raw.githubusercontent.com/ieedan/shadcn-phone-input-svelte/main/CHANGELOG.md';

	const res = await fetch(changelogPath);

	return {
		content: marked.parse(await res.text()),
	};
}
