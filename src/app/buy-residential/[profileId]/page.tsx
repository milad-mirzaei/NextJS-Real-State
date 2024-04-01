import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import React from "react";

const page = async (props: any) => {
  console.log(props.params.profileId);

  await connectDB();
  
  const profile = await Profile.findOne({ _id: props.params.profileId });

  console.log(profile);

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return <DetailsPage data={profile} />;
};

export default page;
