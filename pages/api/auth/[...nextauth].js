import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        // OAuth authentication providers
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    },
    //SQL or MongoSB database
    database: process.env.DATABASE_URL
})