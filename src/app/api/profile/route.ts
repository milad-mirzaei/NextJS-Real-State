import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async ()=>{

  try {
    await connectDB()

    const profiles = await Profile.find().select('-userId')

    return NextResponse.json({data:profiles},{status:200})

    
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {error:'مشکلی در سرور رخ داده است'},
      {status:500}
    )
  }

}

export const POST = async (req: NextRequest) => {
  try {
      await connectDB();
    const body = await req.json();
    console.log(body)
    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      amenities,
      rules,
      category,
    } = body;


    const session = await getServerSession(authOptions);
    console.log(session);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user?.email });
    console.log(user);

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 500 }
      );
    }
    console.log(title)

    if(!title || !location || !description || !phone || !realState || !price || !constructionDate || !category){
        return NextResponse.json({error:'لطفا اطلاعات معتبر وارد کنید'},{status:400})
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId:new Types.ObjectId(user._id)
    });

    console.log(newProfile)
    
    return NextResponse.json({message:"آگهی جدید اضافه شد"},{status:201})

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};

export const PATCH = async (req:NextRequest)=>{
    try {
        await connectDB()
        const body = await req.json();
        console.log(body)
        const {
            _id,
          title,
          description,
          location,
          phone,
          realState,
          price,
          constructionDate,
          amenities,
          rules,
          category,
        } = body;
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
              { error: "لطفا وارد حساب کاربری خود شوید" },
              { status: 401 }
            );
          }
      
          const user = await User.findOne({ email: session.user?.email });
          console.log(user);
      
          if (!user) {
            return NextResponse.json(
              { error: "حساب کاربری یافت نشد" },
              { status: 500 }
            );
          }
          console.log(title)
      
          if( !_id || !title || !location || !description || !phone || !realState || !price || !constructionDate || !category){
              return NextResponse.json({error:'لطفا اطلاعات معتبر وارد کنید'},{status:400})
          }

          const profile = await Profile.findOne({_id})
        
          if(!user._id.equals(profile.userId)){
            return NextResponse.json({error:'دسترسی شما به این آگهی محدود شده است'},{status:403})
          }
      
          profile.title = title;
          profile.description = description;
          profile.location = location;
          profile.phone = phone;
          profile.realState = realState;
          profile.price = price;
          profile.constructionDate = constructionDate;
          profile.amenities = amenities;
          profile.rules = rules;
          profile.category = category;

          profile.save()

          return NextResponse.json({message:'آگهی با موفقیت ویرایش شد'},{status:200})


    } catch (error) {
        console.log(error)
        return NextResponse.json({error:'مشکلی در سرور رخ داده است'},{status:500})
    }
} 
