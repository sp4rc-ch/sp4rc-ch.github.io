import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Server } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
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
    return (
        <section id={id} className="relative container mx-auto flex min-h-[90vh] flex-col items-center px-4 py-16 text-center">
            <div className="z-1 container mx-auto mt-8 flex flex-col items-center text-center sm:mt-16">
                <h1 className="mb-6 flex flex-wrap items-center justify-center gap-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
                    <span className="text-primary">sp4rc-ch</span>
                </h1>

                <p className="text-muted-foreground mb-8 max-w-[800px] text-base md:text-xl">
                    Tagline here.
                    <br className="hidden sm:block" />
                    Longer description can go here if needed. For example, a brief overview of the product and its benefits.
                </p>
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                        <Link target="_blank" rel="noopener noreferrer" to="https://github.com/sp4rc-ch/sp4rc-ch">
                            Link to GitHub Repo
                            <Server />
                        </Link>
                    </Button>
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
