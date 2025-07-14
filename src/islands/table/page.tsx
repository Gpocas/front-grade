import { columns, Issue } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Issue[]> {
  const content = await fetch('http://localhost:3000/issue/all')
  const data = await content.json()
  return data.data
}

const data = await getData()

export function Table() {
  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
