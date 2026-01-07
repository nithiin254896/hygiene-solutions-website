
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo2 = () => {
  return (
    <Link href="/" >
      <Image
        src="/Assets/Logos/hyg.png"
        width={120}
        height={120}
        alt="Hygiene Solutions Logo"
        priority // improves performance for frequently used images like nav logos
      />
    </Link>
  );
};

export default Logo2;
