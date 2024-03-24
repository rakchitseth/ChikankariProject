export { default } from "next-auth/middleware"

export const config = {
    matcher: '/login',
    callbacks: {
        authorized({ req, token }) {
            console.log(token);
            if (token) return true // If there is a token, the user is authenticated
        }
    }
}