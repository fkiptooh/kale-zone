import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import { SuperbaseProvider } from "@/providers/supabase-provider";
import { UserProvider } from "@/providers/user-provider";
import { ModalProvider } from "@/providers/modal-provider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Kale-Zone",
  description: "Listen to kalenjin music",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SuperbaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SuperbaseProvider>
      </body>
    </html>
  );
}
