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
							priority={true}
						/>
					</div>
					<div className="text-base text-center w-xl sm:w-5/6 break-all">
						山と海に囲まれた長崎という地で25年間生まれ育つ。大学では薬学を専攻。大学卒業後、新卒の採用支援事業を行う企業で営業を経験後、小規模なweb開発会社でITエンジニアとしてのキャリアをスタート。現在エンジニア歴は5年目。フリーランスエンジニアとして活動中。
					</div>
					<div className="text-base text-center w-xl sm:w-5/6 break-all mt-4">
						React / Next.js / Laravel / Ruby on Rails / React Native
						などを中心に、フロントエンド・バックエンド・モバイルの実装から、設計・技術選定・チーム支援まで幅広く対応できるエンジニアです。
					</div>
					<div className="text-base text-center w-xl sm:w-5/6 break-all mt-4">
						特に「ドキュメントが整っていない」「誰が進めるか曖昧な」状態のプロジェクトにおいて、コードと会話を通じて、状況を整理し、チームが動ける状態に持っていくことを得意としています。
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl sm:w-5/6 break-all mt-8">
						これまでの主な役割
					</div>
					<div className="w-xl sm:w-5/6 text-center">
						<ul className="list-disc text-left inline-block">
							<li>
								技術的負債を抱えた既存プロダクトのリプレイス方針立案と実装リード
							</li>
							<li>
								仕様が存在しない既存コードのリバースエンジニアリングと要件整理
							</li>
							<li>
								新規参画者のオンボーディング・チケット分割・開発環境の整備
							</li>
							<li>
								WebアプリからWebViewアプリ化の技術調査・アーキテクチャ検討
							</li>
							<li>チーム内レビュー・開発効率向上施策の推進</li>
						</ul>
					</div>
					<div className="text-base text-center w-xl sm:w-5/6 break-all mt-4">
						プロダクトやチームの成功を第一に考え、「この人がいるとプロジェクトが止まらない」と思っていただけるような動き方を大切にしています。技術力だけではなく、チームやプロダクトを前に進める力を活かし、より良い体験を生み出すことを目指しています。
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl sm:w-5/6 break-all mt-8">
						趣味
					</div>
					<div className="w-xl sm:w-5/6 text-center">
						読書・散歩・ギター・バレーボール・バイク・麻雀・温泉巡り・クラフトビール・etc...
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl sm:w-5/6 break-all mt-8">
						大事にしている価値観
					</div>
					<div className="w-xl sm:w-5/6 text-center">
						寛容・感謝・尊敬・貢献・挑戦
					</div>
				</main>
			</div>
		</div>
	);
}
