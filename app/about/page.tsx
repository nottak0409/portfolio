import Header from "../header";
import Image from "next/image";

export default function About() {
	return (
		<div>
			<Header />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-4 row-start-2 items-center z-10">
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full">
						私について
					</div>
					<div className="w-30 sm:w-60">
						<Image
							src="/bike.webp"
							width="50"
							height="50"
							layout="responsive"
							alt="my bike image"
						/>
					</div>
					<div className="text-base text-center w-xl break-all">
						山と海に囲まれた長崎という地で25年間生まれ育つ。大学では薬学を専攻。大学卒業後、新卒の採用支援事業を行う企業で営業を3ヶ月経験後、10名程度の小さなweb開発会社に入社し、ITエンジニアとしてのキャリアをスタート。現在エンジニア歴は5年目。フリーランスエンジニアとして活動中。フロントエンドが強みだが、バックエンドとモバイルの開発も可能。多趣味。興味を持ったらなんでもやるタイプ。顧客のビジネスを理解し、問題解決に貢献することを大事にしている。必要であれば新しい技術を学ぶことに抵抗がない。
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl break-all">
						趣味
					</div>
					<div>
						読書・散歩・ギター・バレーボール・バイク・麻雀・温泉巡り・クラフトビール・etc...
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl break-all">
						大事にしている価値観
					</div>
					<div>寛容・感謝・貢献・挑戦</div>
				</main>
			</div>
		</div>
	);
}
