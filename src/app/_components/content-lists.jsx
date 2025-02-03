import Link from 'next/link';

export default function ContentLists( {title, desc, slug} ) {

  function excerpt(text, length = 50) {
    return text.length > length ? text.substring(0, length) + "..." : text;
  }

  return (
          <Link href={`/blog/${slug}`}>
            <div className="card">
              <div className="card-info">
                <h3>{excerpt(title)}</h3>
                <p>{excerpt(desc)}</p>
              </div>
            </div>
          </Link>
  );
}
