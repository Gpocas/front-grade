import issues from "@/data/issues.json"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export function Home() {
    return (
        <>
            <Table>
                <TableCaption>list of issues JBS-TRS</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold w-[300px]">Repo</TableHead>
                        <TableHead className="font-bold w-[300px]">Title</TableHead>
                        <TableHead className="font-bold">Username</TableHead>
                        <TableHead className="font-bold">CreatedAt</TableHead>
                        <TableHead className="font-bold">UpdatedAt</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {issues.map((issue, idx) => (
                        <TableRow key={idx}>
                            <TableCell className="font-medium">{issue.repo}</TableCell>
                            <TableCell>
                                <a href={issue.urlIssue} className="hover:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                    {issue.title.toLowerCase()}
                                </a>
                            </TableCell>
                            <TableCell>{issue.username}</TableCell>
                            <TableCell>{new Date(issue.createdAt).toLocaleString()}</TableCell>
                            <TableCell>{new Date(issue.updateddAt).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}