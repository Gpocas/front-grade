import { columns, Issue } from "./columns"
import { DataTable } from "./data-table"
import issues from "@/data/issues.json"


function getData(): Issue[] {
  // Fetch data from your API here.
  return issues
}

export function Table() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}