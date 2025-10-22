import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/404/NotFound';
import { Toaster } from '@/components/ui/sonner.tsx';
import { ThemeProvider } from '@/components/ui/theme-provider.tsx';

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark">
                <BrowserRouter>
                    <Routes>
                        {/* Home */}
                        <Route path="/" element={<Home />} />

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
