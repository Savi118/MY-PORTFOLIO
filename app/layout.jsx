import "./globals.css";
import { Providers } from "./Providers";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Saksham Portfolio",
  description: "Full Stack Developer | MERN | Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-white'>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
