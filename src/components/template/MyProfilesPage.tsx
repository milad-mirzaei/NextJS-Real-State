import React from "react";
import { ProfileData } from "./AddProfilePage";
import DashboardCard from "@/module/DashboardCard";

type MyProfilesPageProps = {
  profiles: ProfileData[];
};

const MyProfilesPage = ({ profiles }: MyProfilesPageProps) => {
  // console.log(profiles)
  return (
    <div>
      {profiles.length ? (
        <div className="flex flex-col justify-start items-center gap-[10px] h-full">
          {profiles.map((profile, index) => (
            <DashboardCard
              key={index}
              data={JSON.parse(JSON.stringify(profile))}
            />
          ))}
        </div>
      ) : (
        <p>هیج آگهی ثبت نشده است</p>
      )}
    </div>
  );
};

export default MyProfilesPage;
