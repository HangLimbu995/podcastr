// https://national-sparrow-49.clerk.accounts.dev

const authConfig = {
  providers: [
    {
      domain:process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};

export default authConfig;
