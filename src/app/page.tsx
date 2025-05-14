import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Image
					src="/caraquecoda.svg"
					alt="Caraquecoda logo"
					width={180}
					height={38}
					priority
				/>
				<h1 className="text-xl font-[family-name:var(--font-geist-mono)]">
					Soluções de Software - Tire sua ideia do papel
				</h1>
				<ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li className="tracking-[-.01em]">Frontend</li>
					<li className="tracking-[-.01em]">Backend</li>
					<li className="tracking-[-.01em]">Mobile</li>
					<li className="tracking-[-.01em]">UI/UX</li>
					<li className="tracking-[-.01em]">DevOps</li>
					<li className="tracking-[-.01em]">Infraestrutura</li>
					<li className="tracking-[-.01em]">Segurança</li>
					<li className="tracking-[-.01em]">Cloud</li>
					<li className="tracking-[-.01em]">IA</li>
					<li className="tracking-[-.01em]">Testes</li>
					<li className="tracking-[-.01em]">Documentação</li>
					<li className="tracking-[-.01em]">Suporte</li>
				</ol>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
						href="https://tally.so/r/3EgppB"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/caraquecoda-icon.svg"
							alt="Caraquecoda logomark"
							width={20}
							height={20}
						/>
						Realize seu orçamento
					</a>
					<a
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
						href="https://wa.me/11948561111?text=Olá,%20vim%20pelo%20site%20https://caraquecoda.com.br%20e%20quero%20conversar%20sobre%20realizar%20uma%20ideia%20de%20projeto."
						target="_blank"
						rel="noopener noreferrer"
					>
						Entre em contato
					</a>
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Victor Nogueira - Caraquecoda LTDA - 55.148.715/0001-88
				</span>
			</footer>
		</div>
	);
}
