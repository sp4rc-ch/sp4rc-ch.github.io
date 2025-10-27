import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/404/NotFound';
import Definitions from '@/pages/Resources/Definitions/Definitions';
import { Toaster } from '@/components/ui/sonner.tsx';
import { ThemeProvider } from '@/components/ui/theme-provider.tsx';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog.tsx';
import { useEffect, useState } from 'react';
import { Checkbox } from './components/ui/checkbox';
import { Label } from './components/ui/label';
import { toast } from 'sonner';

function App() {
    window.addEventListener('open-disclaimer-dialog', () => {
        setIsOpen(true);
    });
    const [isOpen, setIsOpen] = useState(localStorage.getItem('hideDisclaimer') !== 'true');

    useEffect(() => {
        // fix link without reload if: https://sp4rc-ch.github.io/?/resources/definitions
        // to https://sp4rc-ch.github.io/resources/definitions
        if (window.location.search.startsWith('?/')) {
            const newPath = window.location.search.slice(1) + window.location.hash;
            window.history.replaceState({}, '', newPath);
        }
    }, []);

    return (
        <>
            <DisclaimerDialog isOpen={isOpen} setIsOpen={setIsOpen} />
            <ThemeProvider defaultTheme="dark">
                <BrowserRouter>
                    <Routes>
                        {/* Home */}
                        <Route path="/" element={<Home />} />

                        {/* Definition Page */}
                        <Route path="/resources/definitions" element={<Definitions />} />

                        {/* 404 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <Toaster closeButton visibleToasts={5} />
            </ThemeProvider>
        </>
    );
}

export default App;

export function DisclaimerDialog({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
    return (
        <>
            <AlertDialog open={isOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center text-xl">Disclaimer</AlertDialogTitle>
                        <AlertDialogDescription className="mt-4 text-center text-base">
                            This is a <span className="text-primary font-semibold">community-driven project maintained by the SPARC Community</span> to provide comprehensive information and resources
                            regarding to SPARC, CyLg, and Cybat. <br></br>
                            <br></br>
                            <span className="font-semibold">All the content found here is or was found on the vast and wide internet</span>. This handbook only aggregates and organizes the information
                            for easier access. <span className="underline">We do not claim ownership of any of the content.</span> All the content found here was already approved/meant for
                            distribution.
                            <br></br>
                            <br></br>
                            We are not affiliated with SPARC, Cybat, or CyLg in any official way. We try our best to provide accurate information, but we cannot guarantee its completeness or
                            reliability, since the information is constantly changing and being updated.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex flex-col items-center gap-4">
                        <div className="flex items-center">
                            <Checkbox id="hide-disclaimer" className="pb-[2px]" defaultChecked={localStorage.getItem('hideDisclaimer') === 'true'}></Checkbox>
                            <Label htmlFor="hide-disclaimer" className="ml-2 inline-block text-sm">
                                Don't show this message again
                            </Label>
                        </div>
                        <AlertDialogAction
                            onClick={() => {
                                const el = document.getElementById('hide-disclaimer') as HTMLElement | null;
                                const input = el?.querySelector('input') as HTMLInputElement | null;
                                const checked = input?.checked === true || el?.getAttribute('data-state') === 'checked' || el?.getAttribute('aria-checked') === 'true';
                                if (checked) {
                                    localStorage.setItem('hideDisclaimer', 'true');
                                    toast.success('We will not show this message again. To read the disclaimer again, please check in the footer.', { duration: 8000 });
                                } else {
                                    localStorage.removeItem('hideDisclaimer');
                                }
                                setIsOpen(false);
                            }}
                        >
                            I understand
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
