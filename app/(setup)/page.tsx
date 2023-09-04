import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/ui/modals/initial-modal";

// export default function Home() {
    // return (
        // <div className="flex flex-col p-10 py-16">
            {/* <UserButton afterSignOutUrl="/" /> */}
            {/* This is a protected route. You are logged in thank you. */}
            {/* <ModeToggle /> */}
        {/* </div> */}
// 


        
        const SetupPage = async () => {
            const profile = await initialProfile();

            const server = await db.server.findFirst({
               where: {
                members: {
                    some: {
                        profileId: profile.Id
                    }
                
                
                 
                } 
                
            }
        });

            if (server) {
                return redirect(`/servers/${server.id}`);
            }
            return <InitialModal />
        }
        export default SetupPage;
   


