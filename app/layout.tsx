import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import { SuperbaseProvider } from "@/providers/supabase-provider";

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
          <Sidebar>{children}</Sidebar>
        </SuperbaseProvider>
      </body>
    </html>
  );
}
