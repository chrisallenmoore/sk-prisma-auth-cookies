# SvelteKit & Prisma with Cookies auth

This is a starter project for using SvelteKit with cookies auth.

It has everything you need to have JWT authentication working with Prisma and SqlLite.

Tailwind CSS is also setup and is used for styling.

_I got a lot of inspiration from https://joyofcode.xyz/sveltekit-authentication-using-cookies_

## First, install npm Dependencies

Here's how to make this project work!

```bash
# from the root directory
npm install
```

## Next create your database from the Prisma schema

```bash
# from the root directory
npx prisma db push
```

## Take a look at your awesome new database with Prisma Studio

```bash
# from the root directory
npx prisma studio
```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```
