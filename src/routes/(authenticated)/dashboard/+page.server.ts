import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// redirect to `/signin` if not signed in
	if (!locals.user) {
		throw redirect(302, '/signin');
	}
};
