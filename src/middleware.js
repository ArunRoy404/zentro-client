import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const middleware = async (req) => {
    const token = await getToken({ req })
    const role = await token?.user?.role
    console.log(role);


    const isTokenOK = Boolean(token)
    const { pathname } = req.nextUrl

    const isDashboard = pathname.startsWith("/dashboard");
    const isJobDetails = /^\/jobs\/[^/]+$/.test(pathname);



    return NextResponse.next()
};

export default middleware;
