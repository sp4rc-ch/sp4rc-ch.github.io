import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Footer() {
    return (
        <footer className="flex w-full justify-center py-6">
            <Card className="bg-background/80 w-fit rounded-xl border-none px-6 py-3 shadow-lg backdrop-blur-md">
                <CardContent className="flex flex-col items-center gap-2">
                    <Badge variant="outline" className="rounded-full">
                        Sparc Knowledge Base
                    </Badge>
                    <span className="text-muted-foreground text-center text-xs">
                        &copy; {new Date().getFullYear()} Sparc Knowledge Base. All rights go to their respective owners.
                        <br />
                        This site only cultivates information spread over the internet. No ownership or guarantee of accuracy.
                    </span>
                </CardContent>
            </Card>
        </footer>
    );
}
