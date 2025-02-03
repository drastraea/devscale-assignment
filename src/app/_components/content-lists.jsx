import Link from 'next/link';

export default function ContentLists( {data} ) {
  return (
    <div className="content-container">
      {data.map((item) => (
        <div key={item._id} className="content-card">
          <div className="content-info">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
          <Link href={`/blog/${item.slug}`} passHref>
            <button className="btn btn-sm read-more">Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
