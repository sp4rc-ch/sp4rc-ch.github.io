import { HoverCard as ActualHoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import type { ReactNode } from 'react';

export default function HoverCard({ information, children }: { information: ReactNode; children: ReactNode }) {
    return (
        <ActualHoverCard>
            <HoverCardTrigger className={'underline hover:cursor-help'}>{children}</HoverCardTrigger>
            <HoverCardContent className="w-100">
                <div className="flex justify-between">
                    <p className={'leading-7 [&:not(:first-child)]:mt-6'}>{information}</p>
                </div>
            </HoverCardContent>
        </ActualHoverCard>
    );
}
