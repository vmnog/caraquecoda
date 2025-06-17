'use client';

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageCircleCode, SquareChartGantt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<AnimatedGroup
				className="flex flex-col gap-[32px] row-start-2 items-center"
				variants={{
					container: {
						visible: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					},
					item: {
						hidden: {
							opacity: 0,
							filter: 'blur(12px)',
							y: -60,
							rotateX: 90,
						},
						visible: {
							opacity: 1,
							filter: 'blur(0px)',
							y: 0,
							rotateX: 0,
							transition: {
								type: 'spring',
								bounce: 0.3,
								duration: 1,
							},
						},
					},
				}}
			>
				<div key="logo" className="size-14 relative cursor-pointer">
					<Tooltip>
						<TooltipTrigger asChild>
							<Link prefetch href="/" className="block">
								<Image
									className="dark:invert"
									src="/caraquecoda-logo.svg"
									alt="Caraquecoda logo"
									fill
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="top" align="center">
							<p>Voltar</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<div key="buttons" className="flex gap-4 items-center flex-col sm:flex-row">
					<Tooltip>
						<TooltipTrigger>
							<a
								className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
								href="https://tally.so/r/3EgppB"
								target="_blank"
								rel="noopener noreferrer"
							>
								<SquareChartGantt className="size-6" />
							</a>
						</TooltipTrigger>
						<TooltipContent>
							<p>Faca seu orçamento</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger>
							<a
								className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
								href="https://wa.me/11948561111?text=Olá,%20vim%20pelo%20site%20https://caraquecoda.com.br%20e%20quero%20conversar%20sobre%20realizar%20uma%20ideia%20de%20projeto."
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircleCode className="size-6" />
							</a>
						</TooltipTrigger>
						<TooltipContent>
							<p>Entre em contato</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</AnimatedGroup>
		</div>
	);
}
