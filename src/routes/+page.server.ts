import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	/**
	 * Redirect to Dashboard page if signed in
	 */
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
};
