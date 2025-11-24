import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Your temporary admin credentials (we'll move these to DB later)
const ADMIN_EMAIL = "admin@savi.com";
const ADMIN_PASSWORD = "Savi118@"; // later we hash it

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (
          credentials.email === ADMIN_EMAIL &&
          credentials.password === ADMIN_PASSWORD
        ) {
          return { id: "1", name: "Admin", email: ADMIN_EMAIL };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin/login",
  },
});

export { handler as GET, handler as POST };
