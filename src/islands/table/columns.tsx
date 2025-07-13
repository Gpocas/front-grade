'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export type Issue = {
  repo: string;
  title: string;
  urlIssue: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<Issue>[] = [
  {
    accessorKey: 'repo',
    header: ({ column }) => {
      return (
        <Button
          className='font-bold'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Repo
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          className='font-bold'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title: string = row.getValue('title');
      const link: string = row.original.urlIssue;
      const formatted = title.toLowerCase();

      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='max-w-[300px] truncate'>
              <a
                href={link}
                className='hover:text-blue-500 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                {formatted}
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{formatted}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    accessorKey: 'username',
    header: ({ column }) => {
      return (
        <Button
          className='font-bold ml-[-16px]'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Username
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          className='font-bold'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          CreatedAt
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue('createdAt'));
      const formatted = createdAt.toLocaleString();

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => {
      return (
        <Button
          className='font-bold'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          UpdatedAt
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const updatedAt = new Date(row.getValue('updatedAt'));
      const formatted = updatedAt.toLocaleString();

      return <div>{formatted}</div>;
    },
  },
];
