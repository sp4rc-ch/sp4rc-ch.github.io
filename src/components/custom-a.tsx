import type { ReactNode } from 'react';

export default function A({ className, link, target, children }: { className?: string; link: string; target?: string; children: ReactNode }) {
    return (
        <a className={`text-primary italic underline ${className || ''}`} href={link} target={target || '_blank'} rel="noopener noreferrer">
            {children}
        </a>
    );
}
