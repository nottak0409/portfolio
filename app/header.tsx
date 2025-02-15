import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="row-start-1 flex gap-6 items-center justify-between bg-gray-800 w-full p-4 absolute top-0 z-10">
			<Link href="/" className="flex items-center">
				<Image src="/logo.svg" alt="Logo" width={50} height={50} />
			</Link>
			<nav className="flex gap-6">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/about"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					About
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="/resume"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Resume
				</a>
			</nav>
		</header>
	);
}
