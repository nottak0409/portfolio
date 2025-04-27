import Header from "../header";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full">
        <Image
          src="/stars.webp"
          alt="background image"
          fill
          priority={true}
          className="object-cover"
        />
      </div>
      <Header />
      <div className="relative pt-28 min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-4 row-start-2 items-center z-10">
          <div className="text-xl sm:text-2xl font-bold text-center sm:text-center w-full">
            職務経歴
          </div>
          <div className="text-base text-center sm:text-center w-xl break-all">
            <ul>
              <li>2020年9月 ~ 2022年10月 10名程度のシステム開発会社 正社員</li>
              <li>2022年11月 ~ 2025年1月 医療系のITベンチャー企業 正社員</li>
              <li>2025年3月 ~ 六然システム代表 フリーランスエンジニア</li>
              <li>
                2025年3月 ~ HRTech系の事業会社 フロントエンドエンジニア
                チームリーダー
              </li>
            </ul>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-center w-xl break-all">
            スキル
          </div>
          <details className="w-full text-center">
            <summary className="text-lg font-bold cursor-pointer">
              フロントエンド
            </summary>
            <ul className="pl-4">
              <li>HTML/CSS/JavaScript 4年</li>
              <li>TypeScript 3年</li>
              <li>React 3年</li>
              <li>Redux 3年</li>
              <li>Recoil 半年</li>
              <li>Vue.js(2系) 1年</li>
              <li>Next.js 半年未満</li>
            </ul>
          </details>
          <details className="w-full text-center">
            <summary className="text-lg font-bold cursor-pointer">
              バックエンド
            </summary>
            <ul className="pl-4">
              <li>PHP 2年半</li>
              <li>Ruby 2年</li>
              <li>Laravel 2年</li>
              <li>Ruby on Rails 2年</li>
              <li>Node.js 2年</li>
              <li>express.js 半年未満</li>
              <li>Go 業務外で学習</li>
              <li>Rust 業務外で学習</li>
              <li>MySQL 4年</li>
              <li>REST API 3年</li>
              <li>GraphQL 業務外で学習</li>
            </ul>
          </details>
          <details className="w-full text-center">
            <summary className="text-lg font-bold cursor-pointer">
              モバイル
            </summary>
            <ul className="pl-4">
              <li>React Native 1年半</li>
              <li>Flutter 業務外で学習</li>
            </ul>
          </details>
          <details className="w-full text-center">
            <summary className="text-lg font-bold cursor-pointer">
              その他
            </summary>
            <ul className="pl-4">
              <li>Git 4年半</li>
              <li>GithubActions 2年</li>
              <li>CircleCI 業務内で少々</li>
              <li>Terraform 業務内で少々</li>
              <li>Serverless 業務内で少々</li>
              <li>
                AWS EC2/ECS/CloudFront/Amplify/Cognito/S3/RDS/Lambda/CloudWatch
                業務内で少々
              </li>
              <li>Mackerel 業務内で少々</li>
              <li>Docker 業務内で少々</li>
              <li>要件定義 一人称での経験は少なめ 1年と少し</li>
              <li>基本設計 2年</li>
              <li>詳細設計 4年</li>
              <li>テスト設計 2年半</li>
              <li>テスト実行 4年</li>
              <li>テスト自動化 2年</li>
              <li>デザインシステム構築 0⇨1の担当経験あり</li>
              <li>ピープルマネジメント経験あり</li>
              <li>チームリーダー経験あり</li>
            </ul>
          </details>
          <div className="text-xl sm:text-2xl font-bold text-center w-xl break-all mt-8">
            <a href="/resume.pdf" download className="hover:underline">
              詳細な職務経歴書はこちら
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

