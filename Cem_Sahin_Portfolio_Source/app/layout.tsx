import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Cem B. Sahin | IT Administrator & Systems Builder",
    description:
      "IT administrator building automation, internal tools, and reliable identity, endpoint, and infrastructure systems.",
    keywords: [
      "Cem Sahin",
      "IT Administrator",
      "Systems Builder",
      "Okta",
      "Jamf",
      "Python Automation",
      "Identity and Access Management",
    ],
    authors: [{ name: "Cem B. Sahin" }],
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      title: "Cem B. Sahin | IT Administrator & Systems Builder",
      description: "Identity, automation, endpoint, and infrastructure systems built for real teams.",
      siteName: "Cem B. Sahin",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "Cem B. Sahin - IT Administrator and Systems Builder" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cem B. Sahin | IT Administrator & Systems Builder",
      description: "Identity, automation, endpoint, and infrastructure systems built for real teams.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
