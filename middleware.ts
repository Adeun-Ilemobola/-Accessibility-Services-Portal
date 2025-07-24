import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname
    const authPage = pathName === "/";
    const protectedPage = pathName.startsWith("/home") || pathName.startsWith("/test");
    const sessionCookie = getSessionCookie(request);
    console.log({
        protectedPage,
        authPage,
        sessionCookie,
        pathName,
    });

    if (pathName.startsWith("/api")) {
        return NextResponse.next();
    }

    if (!sessionCookie && !authPage && protectedPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (sessionCookie && (authPage || !protectedPage)) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
}

export const config = {

    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};