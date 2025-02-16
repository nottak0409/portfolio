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
						資格
					</div>
					<div>
						応用情報技術者試験・日商簿記2級・3級FP技能士（資産設計提案業務）
					</div>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl break-all">
						スキル
					</div>
					<div className="text-center break-all flex flex-col gap-2">
						<div className="text-lg font-bold">フロントエンド</div>
						<ul>
							<li>HTML/CSS/JavaScript 4年</li>
							<li>TypeScript 3年</li>
							<li>React 3年</li>
							<li>Vue.js(2系) 1年</li>
							<li>Next.js 業務外で学習</li>
							<li>Node.js 2年</li>
						</ul>
						<div className="text-lg font-bold">バックエンド</div>
						<ul>
							<li>PHP 2年半</li>
							<li>Ruby 2年</li>
							<li>Laravel 2年</li>
							<li>Ruby on Rails 2年</li>
							<li>Go 業務外で学習</li>
							<li>Rust 業務外で学習</li>
							<li>express.js 業務外で学習</li>
							<li>MySQL 4年</li>
							<li>REST API 3年</li>
							<li>GraphQL 業務外で学習</li>
						</ul>
						<div className="text-lg font-bold">モバイル</div>
						<ul>
							<li>React Native 1年</li>
							<li>Flutter 業務外で学習</li>
						</ul>
						<div className="text-lg font-bold">その他</div>
						<ul>
							<li>Git 4年半</li>
							<li>GithubActions 2年</li>
							<li>Terraform 業務内で少々</li>
							<li>Serverless 業務内で少々</li>
							<li>AWS EC2/S3/RDS/Lambda 業務内で少々</li>
							<li>Docker 業務内で少々</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
}
