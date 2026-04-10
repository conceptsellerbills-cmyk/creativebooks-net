import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "CreativeBooks";

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "Transformative books on anxiety, emotional freedom, overthinking, and inner wealth. Available on Amazon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="/" className="site-brand">{SITE_NAME}</a>
            <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <a href="/" style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none" }}>Home</a>
              <a href="/books" style={{ fontSize: "0.875rem", color: "#a78bfa", textDecoration: "none", fontWeight: 700 }}>📚 Our Books</a>
            </nav>
          </div>
        </header>
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
