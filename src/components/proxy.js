import { NextResponse } from 'next/server';

export function middleware(request) {
    const authCookie = request.cookies.get('auth');
    const isAddItemPage = request.nextUrl.pathname.startsWith('/add-articles');
    if (isAddItemPage) {
        if (!authCookie || authCookie.value !== 'true') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    } h
    return NextResponse.next();
}
export const config = {
    mmatcher: ['/add-item', '/add-item/:path*'],
};