import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/server/auth";
const Rount = {
    auth: ["/login", "/register", "/"],
    main: ["/home", "test"],
};

export async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    const authPage = Rount.auth.some((route) => pathName.startsWith(route));
    const protectedPage = Rount.main.some((route) => pathName.startsWith(route));
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session && !authPage && protectedPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (session && (!authPage || !protectedPage) ) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
}

export const config = {
    runtime: "nodejs", // Required for auth.api usage in middleware
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};