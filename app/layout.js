export const metadata = {
  title: 'GemTaxes',
  description: 'AI tax assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
