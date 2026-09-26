import Link from 'next/link';
import React from 'react';

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl">Page not found</p>
      <Link href={"/"} className='btn btn-primary'>HomePage</Link>
    </div>
  );
};


export default notFound;