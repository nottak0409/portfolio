import Header from "./header";
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed inset-0 w-full">
				<Image
					src="/stars.webp"
					alt="main image"
					fill
					priority={true}
					className="object-cover"
				/>
			</div>
			<Header />
			<div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full z-10">
						Noda Takuma
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full z-10">
						freelance engineer/rikuzen owner
					</div>
					<div className="flex gap-4 items-center justify-center flex-col sm:flex-row w-full z-10 mt-8">
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
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full z-10 mt-8 mb-6">
						Contact me
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl z-10">
						<a
							href="mailto:rikuzen.noda0409@gmail.com"
							className="flex items-center p-4 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-200 hover:scale-105"
						>
							<div className="flex flex-col">
								<span className="text-sm text-gray-400">
									Email
								</span>
								<span className="mt-1">
									rikuzen.noda0409@gmail.com
								</span>
							</div>
						</a>
						<a
							href="https://x.com/ntk673376240323"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center p-4 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-200 hover:scale-105"
						>
							<div className="flex flex-col">
								<span className="text-sm text-gray-400">
									X (Twitter)
								</span>
								<span className="mt-1">ntk673376240323</span>
							</div>
						</a>
						<a
							href="https://github.com/nottak0409"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center p-4 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-200 hover:scale-105"
						>
							<div className="flex flex-col">
								<span className="text-sm text-gray-400">
									GitHub
								</span>
								<span className="mt-1">nottak0409</span>
							</div>
						</a>
						<a
							href="https://youtrust.jp/users/876e533eecfc1606bf495d380abae088"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center p-4 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-200 hover:scale-105"
						>
							<div className="flex flex-col">
								<span className="text-sm text-gray-400">
									YouTrust
								</span>
								<span className="mt-1">プロフィールを見る</span>
							</div>
						</a>
					</div>
				</main>
			</div>
		</div>
	);
}
