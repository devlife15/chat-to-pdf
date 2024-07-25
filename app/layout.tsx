import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="overflow-hidden min-h-screen h-screen flex flex-col">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
