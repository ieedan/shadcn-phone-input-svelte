import Root from './phone-input.svelte';

export type Country = {
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	name: {
		common: string;
		official: string;
	};
	idd: {
		root: string;
		suffixes: string[];
	};
};

export default Root;
