import { Button } from '@/components/ui/button.tsx';
import { LucideArrowBigRight } from 'lucide-react';
import { ModeToggle } from '@/components/ui/theme-toggle.tsx';

export default function Header() {
    return (
        <>
            <header className="supports-[backdrop-filter]:bg-background/30 sticky z-50 mt-4 flex h-15 w-[80%] items-center justify-between rounded-2xl border-1 px-8 text-center text-4xl font-bold italic backdrop-blur">
                <div>
                    <ModeToggle wide className={'mb-3'} />
                </div>
                <div>Sparc Knowledge Base</div>
                <div>
                    <Button
                        variant={'default'}
                        onClick={() =>
                            window.open(
                                'https://threema.id/87YD3CY3?text=Hello+There%0AI+have+a+question+regarding+%3Cfill+question%3E+and+would+like+to+join+the+sparc+community.%0ACheers%0A%3Cyour+hackername%3E',
                                '_blank'
                            )
                        }
                        className={'mb-3'}
                    >
                        Join the Community
                        <LucideArrowBigRight />
                    </Button>
                </div>
            </header>
        </>
    );
}
