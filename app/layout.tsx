import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "rikuzen portfolio",
	description: "六然システム代表 野田のポートフォリオサイトです",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<head>
				<link
					rel="preload"
					href="/stars.webp"
					as="image"
					type="image/webp"
				/>
				<link
					rel="preload"
					href="/bike.webp"
					as="image"
					type="image/webp"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
			>
				{children}
			</body>
		</html>
	);
}
