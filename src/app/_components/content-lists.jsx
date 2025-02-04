"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContentLists({ title, desc, slug }) {
  function excerpt(text, length = 50) {
    return text.length > length ? text.substring(0, length) + "..." : text;
  }

  return (
      <Link href={`/blog/${slug}`}>
        <motion.div
          className="card"
          whileHover={{ backgroundColor: "#4F46E5", color: "#fff" }}
          transition={{ duration: 0.2 }}
        >
          <div className="card-info">
            <h3>{excerpt(title)}</h3>
            <p>{excerpt(desc)}</p>
          </div>
        </motion.div>
      </Link>
  );
}
