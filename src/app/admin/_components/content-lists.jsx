'use client';

import { ConfirmDelete } from './confirmation-box';
import Link from 'next/link';

export default function ContentLists({ data }) {
 
  return (
    <div className="w-full">
      <div className="content-table">
        {data.map((item) => (
          <div key={item._id} className="content-lists">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="action-btns">
              <Link href={`/blog/${item.slug}`} target="_blank">
                <button className="btn btn-success">View</button>
              </Link>
              <Link href={`/admin/edit/${item._id}`}>
                <button className="btn btn-warning">Edit</button>
              </Link>
              <ConfirmDelete id={item._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
