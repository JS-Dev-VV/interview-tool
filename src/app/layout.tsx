import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interview Tool',
  description: 'Generate interview questions',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0, height: "100%", width: "100%", backgroundColor: "cadetblue" }}>{children}</body>
    </html>
  )
}
