import { redirect } from "next/navigation";

import * as React from 'react'

import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";


export const NavigationSidebar = async () => {
    const profile = await currentProfile();
    if(!profile) {
        return redirect("/");
    }

    const servers = await db.server.findMany({
       where: {
        members: {
            some: {
                profileId: profile.id
            }
        }
       } 
    });

    return (
        <div
            className="space-y-4 flex flex-col items-center 
            h-full text-primary w-full dark: bg-[#1E2F22] py-3"
            >
            Navigation Sidebar
        </div>
    )
}