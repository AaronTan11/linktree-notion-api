import { FlipWords } from "@/components/custom/flip-words";
import { Globe } from "@/components/custom/globe";
import GlobeDemo from "@/components/custom/GlobeDemo";
import Notion from "@/components/custom/Notion";
import { Vortex } from "@/components/custom/vortex";

export default function Home() {
	const words = ["Software Engineer", "Fullstack", "nerd", "use macbook"];

	return (
		<>
			<div className='w-full mx-auto h-screen overflow-hidden'>
				<Vortex
					backgroundColor='black'
					rangeY={800}
					particleCount={500}
					baseHue={69}
					className='flex items-center flex-col px-2 md:px-10  py-[69px] w-full h-full'
				>
					<h2 className='text-white text-2xl md:text-6xl font-bold text-center'>Tan Wei Hup</h2>
					<p className='text-white text-sm md:text-2xl max-w-xl mt-6 text-center'>
						Welcome to my Personal &quot;Linktree&quot;
					</p>
					<div className='text-white text-sm md:text-2xl max-w-xl mt-6 text-center'>
						I kinda <FlipWords words={words} className='text-white space-x-1' />
					</div>
					<div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
						<Notion />
					</div>
				</Vortex>
			</div>
		</>
	);
}
