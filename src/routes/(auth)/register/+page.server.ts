import { invalid, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';

import { db } from '$lib/database';

export const load: PageServerLoad = async ({ locals }) => {
	// redirect to `/` if logged in
	if (locals.user) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const email = data.get('email');
		const password = data.get('password');

		if (
			typeof username !== 'string' ||
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			!username ||
			!email ||
			!password
		) {
			return invalid(400, { invalid: true });
		}

		const user = await db.user.findUnique({
			where: { username }
		});

		if (user) {
			return invalid(400, { user: true });
		}

		const emailUser = await db.user.findUnique({
			where: { email }
		});

		if (emailUser) {
			return invalid(400, { emailUser: true });
		}

		await db.user.create({
			data: {
				username,
				email,
				passwordHash: await bcrypt.hash(password, 10)
			}
		});

		throw redirect(303, '/login');
	}
};
