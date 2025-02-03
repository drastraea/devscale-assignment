'use client';

import Link from 'next/link';
import { ConfirmDelete } from './confirmation-box';

export default function ContentLists({ id, title, desc, slug }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="action-btn">
        <Link href={`/blog/${slug}`} target="_blank">
          <button className="btn btn-success">View</button>
        </Link>
        <Link href={`/admin/edit/${id}`}>
          <button className="btn btn-warning">Edit</button>
        </Link>
        <ConfirmDelete id={id} />
      </div>
    </>
  );
}