import "./globals.css";
import Navbar from "@/app/component/Navbar"
import Footer from "@/app/component/Footer"

export const metadata = {
  title: "Facebook-connect with the world",
  description: "This is facebook and we can connect with the world using facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto min-h-[85vh]">
          {children}
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}
