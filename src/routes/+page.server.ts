import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './+page.svelte';
import { zod } from 'sveltekit-superforms/adapters';

export async function load() {
	const form = await superValidate(zod(formSchema));

	return { form };
}

export const actions = {
	default: (event) => {
		
	}
}