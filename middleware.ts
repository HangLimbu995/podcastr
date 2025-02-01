import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up", "/"]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();
  if (!isPublicRoute(req) && !session) {
    return (await auth()).redirectToSignIn({ returnBackUrl: req.url });
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up", "/"]);

// export default clerkMiddleware(async (auth, req) => {
// if(!isPublicRoute(req)) auth().protect()
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
