import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import DefinitionsTable, { type DefinitionsTableProps } from '@/components/DefinitionsTable/DefinitionsTable';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';

export default function Definitions() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

function MainContent({ id = 'MainContent' }: { id?: string }) {
    const definitions: DefinitionsTableProps = {
        definitions: [
            {
                term: 'SPARC',
                definition: (
                    <>
                        <blockquote className="border-l-2 italic">
                            The SPARC talent program is the Swiss Army's pre-military training program in cybersecurity. It is available, free of charge, to all Swiss citizens from the age of 16 up to
                            the start of recruit school. The entire SPARC program, platform and learning content are built and developed by Swiss private-sector companies.
                        </blockquote>
                        <br />— Official definition from the{' '}
                        <Button
                            variant={'link'}
                            className="mx-0 px-0"
                            onClick={() => window.open('https://sparc-cyberdefence.ch/us/aboutsparc/#:~:text=The%20SPARC%20talent,private%2Dsector%20companies.', '_blank', 'noreferrer')}
                        >
                            SPARC Website
                        </Button>
                    </>
                ),
            },
        ],
        caption: 'These are some common terms used in this handbook. If you have any suggestions for more terms, please let us know in the Community Chat.',
    };

    return (
        <section id={id} className="relative container mx-auto flex min-h-[90vh] flex-col items-center px-4 py-16 text-center">
            <div className="z-1 container mx-auto mt-8 flex flex-col items-center text-center sm:mt-16">
                <h1 className="mb-6 flex flex-wrap items-center justify-center gap-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
                    <span className="text-primary">Definitions</span>
                </h1>

                <p className="text-muted-foreground mb-2 max-w-[800px] text-base md:text-xl">It is important for communication to be clear, hence a definitions page.</p>
                <br className="hidden sm:block" />
                <div className="mt-6 w-full max-w-[900px]">
                    <DefinitionsTable definitions={definitions.definitions} caption={definitions.caption} />
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full">
                    <div className="bg-primary/60 absolute -top-48 -left-48 h-[40vw] max-h-[600px] min-h-[300px] w-[40vw] max-w-[600px] min-w-[300px] rounded-full blur-[128px]"></div>
                    <div className="bg-primary/20 absolute -top-32 -left-32 h-[30vw] max-h-[400px] min-h-[200px] w-[30vw] max-w-[400px] min-w-[200px] rounded-full blur-[96px]"></div>
                    <div className="bg-primary/10 absolute -top-16 -left-16 h-[20vw] max-h-[200px] min-h-[100px] w-[20vw] max-w-[200px] min-w-[100px] rounded-full blur-[64px]"></div>
                </div>
                <div className="absolute right-0 bottom-0 h-full w-full">
                    <div className="bg-primary/60 absolute -right-48 -bottom-48 h-[40vw] max-h-[600px] min-h-[300px] w-[40vw] max-w-[600px] min-w-[300px] rounded-full blur-[128px]"></div>
                    <div className="bg-primary/20 absolute -right-32 -bottom-32 h-[30vw] max-h-[400px] min-h-[200px] w-[30vw] max-w-[400px] min-w-[200px] rounded-full blur-[96px]"></div>
                    <div className="bg-primary/10 absolute -right-16 -bottom-16 h-[20vw] max-h-[200px] min-h-[100px] w-[20vw] max-w-[200px] min-w-[100px] rounded-full blur-[64px]"></div>
                </div>
            </div>
        </section>
    );
}
