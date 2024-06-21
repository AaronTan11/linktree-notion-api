// @ts-nocheck
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { CardBody, CardContainer, CardItem } from "@/components/custom/3d-card";

export default async function notion() {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	const data = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID!,
	});

	let links_text: string[] = [];

	data.results.forEach((element) => {
		let link = {
			name: element.properties.Name?.title[0]?.plain_text ?? "",
			link: element.properties.Links?.rich_text[0]?.plain_text ?? "",
		};

		links_text.unshift(link);
	});
	return (
		<>
			<div className='flex flex-col gap-10'>
				{links_text.map((item: { name: string; link: string }, index) => {
					return (
						<CardContainer key={index}>
							<CardItem translateZ={20} rotateX={20} rotateZ={10} rotateY={10}>
								<button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block'>
									<span className='absolute inset-0 overflow-hidden rounded-full'>
										<span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
									</span>
									<div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-8 ring-1 ring-white/10 '>
										<span>
											<a href={item.link} className='text-lg'>
												{item.name}
											</a>
										</span>
									</div>
									<span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
								</button>
							</CardItem>
						</CardContainer>
					);
				})}
			</div>
		</>
	);
}
