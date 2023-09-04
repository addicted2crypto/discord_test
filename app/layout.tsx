import './globals.css'
import type { Metadata } from 'next'
import { Overpass_Mono } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/ui/providers/team-provider'
import { cn } from '@/lib/utils'

const font = Overpass_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Addicted\s Discord Clone',
  description: 'Daily builds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
     <html lang="en" suppressHydrationWarning>
      
       <body className={cn(
        font.className,
        "bg-white dark:bg-[#0c152d]"
        
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="addicted-discord"
        >
         {children}
        </ThemeProvider>
       </body>
      
     </html>
     
     </ClerkProvider>
  )
}
