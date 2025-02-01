import Link from 'next/link';

export default async function ContentLists() {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(NEXT_PUBLIC_API_URL);
  const { data } = await response.json();

  return (
    <div className="content-container">
        {data.map((item) => (
            <div key={item._id} className="content-card">
              <div className="content-info">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
              <Link href={`/blog/${item.slug}`}>
                  <button className="btn btn-sm read-more">Read More</button>
              </Link>
            </div>
        ))}
    </div>
  );
}
