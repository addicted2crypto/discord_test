"use client";

import * as z from "zod";
import { zodResolver } from "@hookForm/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "../file-upload";


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server image is required by addicteds law"
    }),
    imageUrl: z.string().min(1, {
        message: "Server image is required by fed law"
    })
});



export const InitialModal = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true)
    }, []);
    


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            imageUrl: "",
        }
    });

    const isLoading = form.formState.isSubmitting;


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

   if (!isMounted) {
    return null;
   }


    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
              <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center text-bold">
                    Create and cusomize your server.
                    Log in with email,twitter or your connected wallet
                </DialogTitle>
                 <DialogDescription className="bg-sky-50 text-i text-center">
                    Name your server and Add an image.
                 </DialogDescription>
              </DialogHeader>
              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               
                    <div className="space-y-8">
                        <div className="flex items-center justify-center text-center">
                            Web3 Image Upload
                           <FormField 
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <FileUpload 
                                        endpoint="serverImage"
                                        value={field.value}
                                        onChange={field.onChange}
                                        />
                                    </FormControl>
                                     
                                     <FormControl>
                                    <Input
                                    disabled={isLoading}
                                    className="bg-zinc-300/50 border-0 focus-visible:ring-0 
                                    text-black focus-visible:ring-offset-0"
                                    placeholder="Type name here"
                                    {...field}
                                    />
                                 </FormControl>
                                 <FormMessage />
                                </FormItem>
                            )}
                           />
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                            <Button variant="primary"disabled={isLoading}>
                                Create Your Own Server
                            </Button>
                        </DialogFooter>
                    </div>

                </form>
                
              </Form>
            </DialogContent>
            
        </Dialog>
         
        
    )
}