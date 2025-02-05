import "./globals.css";

export const metadata = {
  title: "Space Tourism",
  description: "Space Tourism Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
