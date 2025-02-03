'use client';
import React, { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { deleteContent } from '../_services/content-delete';

export const ConfirmDelete = ({ id}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const result = await deleteContent(id);
    setLoading(false);
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="btn btn-danger" disabled={loading}>
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
          <AlertDialog.Title className="text-lg font-bold">Are you sure?</AlertDialog.Title>
          <AlertDialog.Description className="text-sm text-gray-600">
            This action is permanent and cannot be undone.
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel asChild>
              <button className="px-3 py-1 bg-gray-300 rounded">Cancel</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-500 text-white rounded"
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Iye, Delete'}
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
