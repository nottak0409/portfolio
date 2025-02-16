import Header from "../header";

export default function About() {
	return (
		<div>
			<Header />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-4 row-start-2 items-center">
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full">
						私について
					</div>
					<div className="text-base text-center w-xl break-all">
						山と海に囲まれた長崎という地で25年間生まれ育つ。大学では薬学を専攻。大学卒業後、新卒の採用支援事業を行う企業で営業を3ヶ月経験後、10名程度の小さなweb開発会社に入社し、システムエンジニアとしてのキャリアをスタート。現在エンジニア歴は5年目。フリーランスエンジニアとして活動中。フロントエンドが強みだが、バックエンドとモバイルの開発も可能。多趣味。興味を持ったらなんでもやるタイプ。
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl break-all">
						趣味
					</div>
					<div>
						読書・散歩・ギター・バレーボール・麻雀・温泉巡り・クラフトビール・etc...
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
