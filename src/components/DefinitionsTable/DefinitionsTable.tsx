import type { JSX } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/ui/table';
import { toast } from 'sonner';

export interface DefinitionsTableProps {
    definitions: Array<{ term: string; definition: JSX.Element | string }>;
    caption?: string;
}

export default function DefinitionsTable({ definitions, caption }: DefinitionsTableProps) {
    return (
        <div className="min-h-[300px] w-full min-w-0 overflow-visible">
            <Table className="w-full table-auto border">
                {caption && <TableCaption>{caption}</TableCaption>}
                <TableHeader>
                    <TableRow className="border">
                        <TableHead className="w-1/4 border">Term</TableHead>
                        <TableHead className="border">Definition</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {definitions.map((d, i) => (
                        <TableRow
                            key={`${d.term}-${i}`}
                            id={`definition-${d.term.replace(/\s+/g, '-').toLowerCase()}`}
                            className="hover:cursor-pointer"
                            onClick={async () => {
                                try {
                                    await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#definition-${d.term.replace(/\s+/g, '-').toLowerCase()}`);
                                    toast.success('Link to definition copied to clipboard!');
                                } catch {
                                    toast.error('Failed to copy link to clipboard. Did you grant clipboard permissions?');
                                }
                            }}
                        >
                            <TableCell className="border align-top font-medium break-words whitespace-normal">{d.term}</TableCell>
                            <TableCell className="border align-top break-words whitespace-normal">{d.definition}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
