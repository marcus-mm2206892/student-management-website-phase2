export { default } from "next-auth/middleware"
export const config = {
  matcher: ["/api/:path*",
    "/admin/:path*",
    "/student/:path*",
    "/instructor/:path*",
    "/browse/:path*"
  ],
}
