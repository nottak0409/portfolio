# プロジェクト規約 (CLINERULE)

## 1. ディレクトリ構造

-   `app/`: ページコンポーネントとレイアウト
-   `components/`: 再利用可能なコンポーネント
-   `lib/`: ユーティリティ関数、定数、型定義
-   `public/`: 静的アセット
-   `styles/`: グローバルスタイル、Tailwind カスタム設定

## 2. コンポーネント設計

-   ページコンポーネントは`app/`ディレクトリ内に配置
-   再利用可能なコンポーネントは`components/`に配置
-   サーバーコンポーネントをデフォルトとし、必要な場合のみ'use client'を使用
-   コンポーネントの props には必ず TypeScript の型定義を使用

## 3. Tailwind CSS 規約

-   カスタムクラスの作成は最小限に抑える
-   共通のスタイルはコンポーネント内で@apply を使用
-   レスポンシブデザインは Tailwind のブレークポイントを使用
-   カラーパレットは tailwind.config.ts で定義

## 4. 命名規則

-   コンポーネント: PascalCase (例: HeaderNav)
-   関数: camelCase (例: getUserData)
-   定数: UPPER_SNAKE_CASE
-   ファイル名: コンポーネントと同じ名前で.tsx または.ts
-   クラス名: kebab-case (必要な場合のみ)

## 5. パフォーマンス最適化

-   画像は最適化されたフォーマット(.webp)を使用
-   動的インポートを活用（next/dynamic）
-   アセットの事前読み込みを考慮
-   不必要なクライアントサイド JavaScript を最小限に

## 6. TypeScript 規約

-   `any`型の使用を禁止
-   型定義は`types/`ディレクトリに集約
-   interface よりも type を優先して使用
-   非 null アサーション（!）の使用を最小限に

## 7. コード品質

-   ESLint と Prettier の設定に従う
-   コメントは必要な箇所のみ（自己文書化コードを目指す）
-   コミットメッセージは従来のプレフィックスを使用

## 8. 自動チェックと強制

### ESLint 設定

```json
{
	"extends": ["next/core-web-vitals", "prettier"],
	"rules": {
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-non-null-assertion": "warn",
		"react/no-unused-prop-types": "error",
		"import/order": [
			"error",
			{
				"groups": [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index"
				],
				"newlines-between": "always",
				"alphabetize": { "order": "asc" }
			}
		]
	}
}
```

### Prettier 設定

```json
{
	"semi": false,
	"singleQuote": true,
	"tabWidth": 4,
	"printWidth": 100
}
```

### Git Hooks (pre-commit)

```bash
#!/bin/sh
# .husky/pre-commit

npm run lint
npm run type-check
```

### package.json スクリプト

```json
{
	"scripts": {
		"lint": "eslint . --ext .ts,.tsx",
		"type-check": "tsc --noEmit",
		"format": "prettier --write ."
	}
}
```

これらの設定により、以下が自動的にチェック・強制されます：

1. コミット前の静的解析チェック
2. TypeScript の型チェック
3. コードスタイルの自動フォーマット
4. インポート順序の統一
5. 未使用の props の検出
