import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	/* if (request.nextUrl.pathname.startsWith('/order')) {
		
	} */

	return NextResponse.next()
}

export const config = {
	matcher: ['/order/:path*'],
}
