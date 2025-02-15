import Header from "../header";

export default function About() {
	return (
		<div>
			<Header />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full">
						職務経歴
					</div>
					<div className="text-base font-bold text-center sm:text-center w-xl break-all">
						<ul>
							<li>株式会社アンビシャス</li>
							<li>株式会社インテグリティ・ヘルスケア</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
}
