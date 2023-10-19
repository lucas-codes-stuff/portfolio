"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContactLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Link href="/contact" legacyBehavior>
        <a
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/email.png"
            width={27}
            height={27}
            alt="Contact form button"
          />
        </a>
      </Link>
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: "-45px",
            left: "5px",
            backgroundColor: "#FFDAB3",
            color: "#333333",
            padding: "5px",
            borderRadius: "5px",
            width: "120px",
          }}
        >
          Contact me!
        </div>
      )}
    </div>
  );
}
