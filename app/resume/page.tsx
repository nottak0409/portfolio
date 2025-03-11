"use client";

import { useState } from "react";
import Header from "../header";
import Accordion from "../Accordion";

export default function About() {
	type Windows = "frontend" | "backend" | "mobile" | "other";
	const [openWindow, setOpenWindow] = useState<null | Windows>(null);

	const changeWindow = (window: Windows): void => {
		if (openWindow === window) {
			setOpenWindow(null);
			return;
		}
		setOpenWindow(window);
	};

	return (
		<div>
			<Header />
			<div className="pt-28 min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-4 row-start-2 items-center z-10">
					<div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full">
						職務経歴
					</div>
					<div className="text-base text-center sm:text-center w-xl break-all">
						<ul>
							<li>
								2020年9月 ~ 2022年10月
								10名程度のシステム開発会社 正社員
							</li>
							<li>
								2022年11月 ~ 2025年1月 医療系のITベンチャー企業
								正社員
							</li>
							<li>2025年3月 ~ フリーランス</li>
						</ul>
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
					<Accordion
						title="フロントエンド"
						content={[
							"HTML/CSS/JavaScript 4年",
							"TypeScript 3年",
							"React 3年",
							"Redux 3年",
							"Recoil 半年",
							"Vue.js(2系) 1年",
							"Next.js 業務外で学習",
						]}
						windowType="frontend"
						openWindow={openWindow}
						changeWindow={changeWindow}
					/>
					<Accordion
						title="バックエンド"
						content={[
							"PHP 2年半",
							"Ruby 2年",
							"Laravel 2年",
							"Ruby on Rails 2年",
							"Node.js 2年",
							"express.js 半年未満",
							"Go 業務外で学習",
							"Rust 業務外で学習",
							"MySQL 4年",
							"REST API 3年",
							"GraphQL 業務外で学習",
						]}
						windowType="backend"
						openWindow={openWindow}
						changeWindow={changeWindow}
					/>
					<Accordion
						title="モバイル"
						content={["React Native 1年", "Flutter 業務外で学習"]}
						windowType="mobile"
						openWindow={openWindow}
						changeWindow={changeWindow}
					/>
					<Accordion
						title="その他"
						content={[
							"Git 4年半",
							"GithubActions 2年",
							"Terraform 業務内で少々",
							"Serverless 業務内で少々",
							"AWS EC2/S3/RDS/Lambda/CloudWatch 業務内で少々",
							"Mackerel 業務内で少々",
							"Docker 業務内で少々",
						]}
						windowType="other"
						openWindow={openWindow}
						changeWindow={changeWindow}
					/>
					<div className="text-xl sm:text-2xl font-bold text-center w-xl break-all mt-8">
						<a
							href="/resume.pdf"
							download
							className="hover:underline"
						>
							詳細な職務経歴書はこちら
						</a>
					</div>
				</main>
			</div>
		</div>
	);
}
