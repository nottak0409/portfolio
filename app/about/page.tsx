import Header from "../header";

export default function About() {
	return (
		<div>
			<Header />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-8 row-start-2 items-center">
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full">
						私について
					</div>
					<div className="text-base text-center w-xl break-all">
						山と海に囲まれた長崎という地で25年間生まれ育つ。大学では薬学を専攻。大学卒業後、10名程度の小さなweb開発会社に入社し、システムエンジニアとしてのキャリアをスタート。現在エンジニア歴は5年目。フリーランスエンジニアとして活動中。多趣味。興味を持ったらなんでもやるタイプ。
					</div>
					<div className="text-base font-bold text-center w-xl break-all">
						スキル
						<div>フロントエンド</div>
						<ul>
							<li>HTML/CSS/JavaScript 4年</li>
							<li>TypeScript 2年半</li>
							<li>flow 2年</li>
							<li>React 2年半</li>
							<li>Vue.js(2系) 1年</li>
							<li>Next.js 業務外で学習</li>
							<li>Node.js 2年</li>
						</ul>
						<div>バックエンド</div>
						<ul>
							<li>PHP 2年半</li>
							<li>Ruby 2年</li>
							<li>Laravel 2年</li>
							<li>Ruby on Rails 2年</li>
							<li>Go 業務外で学習</li>
							<li>Rust 業務外で学習</li>
						</ul>
						<div>モバイル</div>
						<ul>
							<li>React Native 1年</li>
						</ul>
						<div>その他</div>
						<ul>
							<li>Git 4年半</li>
							<li>GithubActions 2年</li>
							<li>Terraform 業務内で少々</li>
							<li>Serverless 業務内で少々</li>
							<li>AWS EC2/S3/RDS/Lambda 業務内で少々</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
}
