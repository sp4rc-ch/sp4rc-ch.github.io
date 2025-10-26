import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Button } from '../ui/button';

export interface FooterProps {
    footerTitle: string;
    footerDescription: string;
    sections: Array<{ title: string; links: Array<{ label: string; url: string }> }>;
}

export default function Footer() {
    const footerData: FooterProps = {
        footerTitle: 'SPARC Handbook',
        footerDescription: 'This is an inofficial handbook for all things related to SPARC, Cybat and CyLg.',
        sections: [
            {
                title: 'Links',
                links: [
                    {
                        label: 'GitHub Repository',
                        url: 'https://github.com/sp4rc-ch/sp4rc-ch',
                    },
                    {
                        label: 'About the Handbook',
                        url: 'https://github.com/sp4rc-ch/sp4rc-ch#readme',
                    },
                    {
                        label: 'Report Issue',
                        url: 'https://github.com/sp4rc-ch/sp4rc-ch/issues',
                    },
                ],
            },
            {
                title: 'Resources',
                links: [
                    {
                        label: 'Definitions',
                        url: '/resources/definitions',
                    },
                    {
                        label: 'SPARC Homepage',
                        url: 'https://sp4rc.ch',
                    },
                    {
                        label: 'Cyber Batillion 42',
                        url: 'https://cybat42.ch',
                    },
                    {
                        label: 'Cyber Lehrgang',
                        url: 'https://www.vtg.admin.ch/de/lehrgang-cyber-defence',
                    },
                ],
            },
            {
                title: 'Contact',
                links: [
                    {
                        label: 'Community & Editorial Contact',
                        url: 'https://threema.id/87YD3CY3',
                    },
                    {
                        label: 'SPARC Contact',
                        url: 'https://sparc-cyberdefence.ch/contact',
                    },
                    {
                        label: 'Cyber Batillion 42 Contact',
                        url: 'https://www.vtg.admin.ch/de/cyber-miliz',
                    },
                ],
            },
        ],
    };

    return (
        <footer id="footer" className="bg-secondary py-8 shadow-lg backdrop-blur-md md:py-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-6 grid grid-cols-2 gap-6 md:mb-8 md:grid-cols-4 md:gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-3 flex items-center gap-2 md:mb-4">
                            <h1 className="text-2xl font-bold">{footerData.footerTitle}</h1>
                        </div>
                        <p className="text-muted-foreground text-xs md:text-sm">{footerData.footerDescription}</p>
                    </div>
                    {footerData.sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-2 text-sm font-semibold md:mb-4 md:text-base">{section.title}</h3>
                            <ul className="space-y-1 md:space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.url} className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <Separator className="mb-6 md:mb-8" />
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="text-muted-foreground text-xs md:text-sm">
                        © {new Date().getFullYear()} SPARC Handbook by{' '}
                        <a href="https://github.com/sp4rc-ch" className="underline" target="_blank" rel="noopener noreferrer">
                            the SPARC <span className="font-bold">Community</span>
                        </a>
                        . No warranty implied.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-1 md:mt-0">
                        <Button
                            variant={'link'}
                            onClick={(e) => {
                                e.preventDefault();
                                window.dispatchEvent(new CustomEvent('open-disclaimer-dialog'));
                            }}
                        >
                            Disclaimer
                        </Button>
                        <Button
                            variant={'link'}
                            onClick={(e) => {
                                e.preventDefault();
                                toast.success('We do not use/collect any kinds of cookies or other tracking technologies 💪');
                            }}
                        >
                            Cookie Policy
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
