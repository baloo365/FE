import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import * as styles from './layout.css'
import '../../styles/reset.css'
import Chat from "@/components/Chat";
import RankingUser from "@/components/SideBar/RankingUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ving",
  description: "Generated by create next app",
};

const pretendard = localFont({
  src: "../../../public/fonts/Pretendard-Regular.woff",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const initOpenState = true

  return (
    <html lang="kr">
      <body className={`${styles.layout} ${pretendard.className}`}>
        <NavBar />
        <div className={styles.contentContainer}>
          <SideBar
            title="랭킹"
            side="left"
            initOpen={initOpenState}
            width={200}
          >
            <RankingUser />
          </ SideBar>
          <div className={styles.mainContent}>
            {children}
          </div>          
          {/* <Chat /> */}
        </div>
      </body>
    </html>
  );
}
