import { fail, message, superValidate } from 'sveltekit-superforms';
import { formSchema } from './+page.svelte';
import { zod } from 'sveltekit-superforms/adapters';

export async function load() {
	const form = await superValidate(zod(formSchema));

	return { form };
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(formSchema));

		if (!form.valid) return fail(400, { regForm: form });

		return message(form, { text: 'Success!' });
	}
};
