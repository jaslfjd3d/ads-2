import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name} | ${SiteConfig.name_en}`,
  description: SiteConfig.description,
};

const header = (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/XJi1izUj/native-clickplick.netlify.app-37219/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
            `,
      }}
    />
    <script src="https://s1.mediaad.org/serve/77542/retargeting.js" async />
  </>
);

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      {header}
      <body className={inter.className}>
        <Navbar />
        <div className="m-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
