import { headers } from 'next/headers';
import { auth } from './lib/auth';
import { NextResponse } from 'next/server';

 

export async function proxy(request) {
  const session = await auth.api.getSession({
    
    headers: await headers() // 
});
    if(!session && !session?.user) {
     

       return NextResponse.redirect(new URL('/', request.url))
    }
}
 

export const config = {
  matcher: ['/all-rooms/:id', '/my-bookings', '/my-listings',
    '/add-rooms', 
  ]
};