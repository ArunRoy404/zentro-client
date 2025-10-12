import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const role = token?.user?.role;
    const isLoggedIn = Boolean(token);
    const { pathname } = req.nextUrl;

    // Define protected paths
    const protectedPaths = [
        /^\/properties\/[^/]+$/, // /properties/:id
        "/agents/apply-agent",
        "/dashboard",
        "/dashboard/agents",
        "/dashboard/users",
    ];

    // Check if path is protected
    const isProtected = protectedPaths.some((route) =>
        typeof route === "string" ? pathname.startsWith(route) : route.test(pathname)
    );

    // 1 If user not logged in and tries to access protected routes → redirect to signin
    if (isProtected && !isLoggedIn) {
        const callbackUrl = encodeURIComponent(req.nextUrl.href);
        return NextResponse.redirect(
            new URL(`/signin?callbackUrl=${callbackUrl}`, req.url)
        );
    }

    //  Authenticated but restricted by role
    if (pathname.startsWith("/dashboard") && role === "customer") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (pathname.startsWith("/dashboard/agents") && role === "agent") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (pathname.startsWith("/dashboard/users") && role === "agent") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    // Logged-in users shouldn’t visit signin
    if (pathname.startsWith("/signin") && isLoggedIn) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // Otherwise, allow access
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/properties/:path*",
        "/agents/:path*",
        "/dashboard/:path*",
        "/signin",
    ],
};
