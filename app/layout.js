import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import AuthProvider from "../components/Authprovider";

export const metadata = {
  title: "NextApp",
  description: "This is the home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
