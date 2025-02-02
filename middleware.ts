// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

// export default clerkMiddleware(async (auth, req) => {
//   const session = await auth();
//   if (!isPublicRoute(req) && !session) {
//     return (await auth()).redirectToSignIn({ returnBackUrl: req.url });
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware(async (auth, req) => {
  const authData = await auth(); // Await the auth() call to get auth data
  
  // Type casting to SignedInAuthObject to access redirectToSignIn
  if (!isPublicRoute(req) && !authData) {
    const signedInAuthData = authData as { redirectToSignIn: () => Response }; // Typecast authData to a signed-in type
    return signedInAuthData.redirectToSignIn(); // Redirect if the user is not signed in
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

