import { NextRequest, NextResponse } from "next/server";

function unauthorized(message = "Authentication required") {
  return new NextResponse(message, {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Area"',
    },
  });
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect only admin area
  if (pathname.startsWith("/admin")) {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      return new NextResponse("Admin credentials are not configured", {
        status: 500,
      });
    }

    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return unauthorized();
    }

    const [scheme, encoded] = authHeader.split(" ");

    if (scheme !== "Basic" || !encoded) {
      return unauthorized();
    }

    let credentials = "";

    try {
      credentials = atob(encoded);
    } catch {
      return unauthorized("Invalid credentials");
    }

    const separatorIndex = credentials.indexOf(":");

    if (separatorIndex === -1) {
      return unauthorized("Invalid credentials");
    }

    const inputUsername = credentials.slice(0, separatorIndex);
    const inputPassword = credentials.slice(separatorIndex + 1);

    if (inputUsername !== username || inputPassword !== password) {
      return unauthorized("Invalid credentials");
    }
  }

  // Rewrite /admin to the actual static CMS file after authentication
  if (pathname === "/admin") {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/index.html";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};