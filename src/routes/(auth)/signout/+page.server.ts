import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	// redirect to `/` if not signed in
	if (!locals.user) {
		throw redirect(302, '/');
	}

	// eat the cookie
	cookies.set('session', '', {
		path: '/',
		expires: new Date(0)
	});
};
