import { useEffect, useState } from 'react';
import { columns, Issue } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Issue[]> {
  const content = await fetch(import.meta.env.VITE_API_URL);
  const data = await content.json();
  return data.data;
}

export function Table() {
  const [data, setData] = useState<Issue[]>([]);
  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
