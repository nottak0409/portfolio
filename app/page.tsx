import Header from "./header";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Image src="/stars.webp" alt="main image" fill priority={true} />
			<Header />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
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
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full z-10 mt-8">
						contact me
						<div className="text-base mt-8">
							<div>
								email:{" "}
								<a href="mailto:rikuzen.noda0409@gmail.com">
									rikuzen.noda0409@gmail.com
								</a>
							</div>
							<div>
								x:{" "}
								<a
									href="https://x.com/ntk673376240323"
									rel="noopener noreferrer"
									target="_blank"
								>
									https://x.com/ntk673376240323
								</a>
							</div>
							<div>
								github:{" "}
								<a
									href="https://github.com/nottak0409"
									rel="noopener noreferrer"
									target="_blank"
								>
									https://github.com/nottak0409
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
