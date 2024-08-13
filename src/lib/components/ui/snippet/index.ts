import { context } from '$lib/ts/context-provider';
import Root from './snippet.svelte';
import CopyButton from './copy-button.svelte';

type Context = {
	code: string;
};

export const rootContext = context<Context>('root-context');

export { Root, CopyButton };
