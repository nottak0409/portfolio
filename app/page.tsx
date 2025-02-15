import Image from "next/image";
import Header from "./header";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
					<Image src="/stars.jpg" alt="main image" fill />
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full z-10">
						ポートフォリオサイト
					</div>
					<div className="flex gap-4 items-center justify-center flex-col sm:flex-row w-full z-10">
						<a
							className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-44"
							href="/about"
							rel="noopener noreferrer"
						>
							about me
						</a>
						<a
							className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-44"
							href="/resume"
							rel="noopener noreferrer"
						>
							resume
						</a>
					</div>
				</main>
			</div>
		</div>
	);
}
