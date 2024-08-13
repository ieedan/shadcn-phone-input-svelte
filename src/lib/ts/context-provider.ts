import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export const context = <T>(key: string) => {
	return {
		init: (value: T) => setContext(key, writable(value)),
		get: (): Writable<T> => getContext(key),
	};
};
