import { auth } from "@clerk/nextjs"
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
	//may need to add object to const userId
    const  { userId }  = auth();
    if(!userId) throw new Error('Unathorized user breaks addicteds law')
    return { userId: userId };
}
 
export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 }})
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
    messageFile: f([ "image", "pdf"])
		.middleware(() => handleAuth())
		.onUploadComplete(() => {})

} satisfies FileRouter;

export type ourFileRouter = typeof ourFileRouter;
