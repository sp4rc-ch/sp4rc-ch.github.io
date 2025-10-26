import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LucideHome, LucideMenu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { ModeToggle as ThemeToggle } from '@/components/ui/theme-toggle.tsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header({ shadow = true }: { shadow?: boolean }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header id="header" className="sticky top-0 z-50 h-0 w-auto">
            <div
                className={`supports-[backdrop-filter]:bg-background/10 sticky z-50 container mx-4 mt-4 flex h-16 w-auto items-center justify-between rounded-2xl border px-3 backdrop-blur ${shadow ? 'shadow-lg' : ''}`}
            >
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <h1 className="text-primary text-xl font-bold">The SPARC Handbook</h1>
                    </Link>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link
                                    to="/"
                                    className="mr-38 flex items-center gap-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/');
                                    }}
                                >
                                    <div className={'flex items-center gap-2'}>
                                        <span>Home</span>
                                        <LucideHome className="h-4 w-4" />
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    {/* Mobile Menu */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <LucideMenu />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col">
                            <div className="flex flex-col space-y-4 py-4">
                                <Link
                                    to="/"
                                    className="hover:bg-muted flex items-center gap-2 rounded-md px-4 py-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <LucideHome className="h-5 w-5" />
                                    <span>Home</span>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
