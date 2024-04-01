import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!credentials?.email || !credentials?.password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        const user = await User.findOne({ email:credentials.email });

        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return user;
      },
    }),
  ],
};

// const handler = NextAuth({
//     session:{strategy:'jwt'},
//     providers:[CredentialsProvider({
//         name:'credentials',
//         credentials:{email:{},password:{}},
//         async authorize(credentials, req) {
//             const user = credentials
//             console.log(user)

//             try {
//                 await connectDB()
//             } catch (error) {
//                 throw new Error('مشکلی در سرور رخ داده است')
//             }

//             if(!user?.email || !user?.password){
//                 throw new Error('لطفا اطلاعات معتبر وارد کنید')
//             }

//             const user1 = await User.findOne({email:user?.email})

//             if(!user1) throw new Error('لطفا ابتدا حساب کاربری ایجاد کنید')

//             const isValid = await verifyPassword(user?.password,user1.password)

//             if(!isValid) throw new Error('ایمیل یا رمز عبور اشتباه است')

//             return user1

//         },
//     })]
// })
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
