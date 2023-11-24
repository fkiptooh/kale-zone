import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import { SuperbaseProvider } from "@/providers/supabase-provider";
import { UserProvider } from "@/providers/user-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toaster-provider";
import { getSongsByUserId } from "@/actions/getSongsByUserId";
import { Player } from "@/components/player";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Kale-Zone",
  description: "Listen to kalenjin music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SuperbaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SuperbaseProvider>
      </body>
    </html>
  );
}
