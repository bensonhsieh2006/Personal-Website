## A website about me

This personal website is built with [Next.js](https://nextjs.org), deployed with [Vercel](https://vercel.com), and uses [Auth0](https://auth0.com) for authentication.

The project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
Create `.env.local` in the project root with the Auth0 application values from `.env.example`. Keep this file local; it contains credentials and is ignored by Git. Restart the Next.js server after changing it so the environment is reloaded.

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Auth0 Roles

To expose the RBAC roles assigned in Auth0, create a **Post Login** Action in the Auth0 Dashboard and add this code. Use the same namespace each time, deploy the Action, and attach it to the Login flow:

```js
exports.onExecutePostLogin = async (event, api) => {
	const namespace = "https://personal-website.example.com";
	const roles = event.authorization?.roles ?? [];

	api.idToken.setCustomClaim(`${namespace}/roles`, roles);
};
```

After changing the Action, sign out and sign in again. The profile reads the namespaced `/roles` claim and displays the Auth0 roles.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

This app uses Auth0 integration in Vercel project.
