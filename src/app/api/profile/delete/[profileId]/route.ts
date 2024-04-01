import { authOptions } from "@/appapi/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, context: any ) => {
  try {
    await connectDB();
    console.log("connectDB",context)
    const id = context.params.profileId;
    console.log(id);
    const session = await getServerSession(authOptions);
    console.log(session)
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session?.user?.email });
    console.log(user)
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 500 }
      );
    }

    const profile = await Profile.findOne({ _id: id });
    console.log(profile)
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی مورد نظر حذف شد" },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};
