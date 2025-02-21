type Windows = "frontend" | "backend" | "mobile" | "other";

interface AccordionProps {
	title: string;
	content: string[];
	windowType: Windows;
	openWindow: Windows | null;
	changeWindow: (window: Windows) => void;
}

export default function Accordion({
	title,
	content,
	windowType,
	openWindow,
	changeWindow,
}: AccordionProps) {
	const isWindow = (window: Windows): boolean => window === openWindow;

	return (
		<div className="text-center break-all flex flex-col gap-2">
			<button
				className="text-lg font-bold"
				onClick={() => changeWindow(windowType)}
			>
				{title} ▼
			</button>
			<div
				className={`grid duration-500 ease-in-out ${
					isWindow(windowType) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
			>
				<div className="overflow-hidden">
					<ul>
						{content.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
