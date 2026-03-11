# Deployment Notes

The `/engineeringconcepts` proxy is configured in `next.config.ts`.

Replace this placeholder value with the engineering concepts Vercel deployment URL:

```ts
const ENGINEERING_CONCEPTS_DEPLOYMENT_URL =
  "https://engineeringconcepts-placeholder.vercel.app";
```

After replacing it, redeploy this portfolio site on Vercel.

For the proxied Next.js app to work cleanly under `/engineeringconcepts`, its deployment should serve that app from the same subpath, for example by using `basePath: "/engineeringconcepts"` in that app.
