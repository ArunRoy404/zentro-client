import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: 'email' },
            password: { label: "Password", type: 'password' }
        },
        async authorize(credentials) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(credentials),
                    redirect: 'follow'
                }


                const res = await fetch("https://zentro-server.vercel.app/api/v1/users/signin", requestOptions)
                const data = await res.json();

                if (res.ok && data.success) {
                    return data.data
                }

                return null
            } catch (error) {
                return null
            }
        }
    })],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user
            }
            return token
        },

        async session({ session, token}) {
            session.user = token.user
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }