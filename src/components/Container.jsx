import React from "react";

export default function Container({ children }) {
  return (
    <main className='my-10 lg:my-14 overflow-hidden'>
      <div className='container mx-auto grid grid-cols-12 gap-8'>
        {children}
      </div>
    </main>
  );
}
