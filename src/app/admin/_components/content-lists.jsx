'use client';

import React, { useState, useEffect } from 'react';
import Delete from '@admin/_services/content-delete';
import Link from 'next/link';
import { contentFetch } from '@admin/_services/content-fetch';

const ContentLists = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentFetch()
      .then(setData)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const onDeleteSuccess = (id) => {
    setData((prevData) => prevData.filter((item) => item._id !== id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <div className="content-table">
        {data.map((item) => (
          <div key={item._id} className="content-lists">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="action-btns">
              <Link href={`/blog/${item.slug}`} target='_blank'>
                <button className="btn btn-success">View</button>
              </Link>
              <Link href={`/admin/edit/${item._id}`}>
                <button className="btn btn-warning">Edit</button>
              </Link>
              <Delete id={item._id} onDeleteSuccess={onDeleteSuccess} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentLists;
