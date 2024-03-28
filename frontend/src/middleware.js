import { NextResponse } from "next/server"

const getBackendData = async (url) => {
    const res = await fetch(url, {
        headers: {
            'x-auth-token': 'admin'
        }
    });
    const data = await res.json();
    console.log(data);
    return data;
}

export function middleware(req, res) {

    console.log(req.url);
    // return NextResponse.redirect(new URL('/home', request.url))
    // next();
    getBackendData('http://localhost:5000/get-permission')
        .then((data) => {
            console.log(data);
            if(data.allowed){
                return NextResponse.next();
            }else{
                return NextResponse.redirect(new URL('/authenticate', req.url));
            }
        });
}

export const config = {
    matcher: '/admin/manageproduct'
}