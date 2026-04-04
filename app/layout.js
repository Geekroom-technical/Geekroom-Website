import RootLayoutContent from "./layout-content";

export const metadata = {
  title: "GeekRoom | Tech Community",
  description: "Where coders connect, build, and grow. Join our tech community for events, projects, and collaboration.",
  keywords: "tech community, coders, programming, events, projects, collaboration, geekroom",
  authors: [{ name: "GeekRoom" }],
  creator: "GeekRoom",
  publisher: "GeekRoom",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://geekroom.tech",
    title: "GeekRoom | Tech Community",
    description: "Where coders connect, build, and grow.",
    siteName: "GeekRoom",
    images: [
      {
        url: "https://res.cloudinary.com/dwqzgfghq/image/upload/q_auto/f_auto/v1775288192/Geekroom_pswjia.png",
        width: 1200,
        height: 630,
        alt: "GeekRoom - Tech Community",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeekRoom | Tech Community",
    description: "Where coders connect, build, and grow.",
    images: ["https://res.cloudinary.com/dwqzgfghq/image/upload/q_auto/f_auto/v1775288192/Geekroom_pswjia.png"],
  },
  alternates: {
    canonical: "https://geekroom.tech",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
});

export default function RootLayout({ children }) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}