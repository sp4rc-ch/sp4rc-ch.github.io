import A from '@/components/custom-a.tsx';
import HoverCard from '@/components/hover-card.tsx';

export default function Main() {
    return (
        <>
            <main className={'flex h-full min-h-screen w-full flex-col items-center p-8'}>
                <Hero />
            </main>
        </>
    );
}

function Hero() {
    return (
        <div className={'flex w-full flex-col items-center justify-center'}>
            <h1 className={'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'}>Hey There!</h1>
            <p className={'leading-7 [&:not(:first-child)]:mt-6'}>
                This is a knowledge base for <A link={'https://sp4rc.ch'}>sparc</A>. A place to find information about sparc, the cyberlehrgang and the military in general. This knowledge base is a
                community project and is{' '}
                <HoverCard information={'Although some information might have come from direct sources of these entities.'}>
                    not affiliated with any of the official sparc/cyberlehrgang/military entities
                </HoverCard>
                .
            </p>
        </div>
    );
}

function Part1() {}
