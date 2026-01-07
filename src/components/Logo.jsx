
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" >
      <Image
        src="/Assets/Logos/Hygienes_logo.png"
        width={100}
        height={80}
        alt="Hygiene Solutions Logo"
        priority // improves performance for frequently used images like nav logos
      />
    </Link>
  );
};

export default Logo;
