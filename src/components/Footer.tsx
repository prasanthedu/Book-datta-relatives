import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-cream py-16 px-6 border-t border-maroon/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="telugu-heading text-3xl text-maroon mb-2">అదే నువ్వు అదే నేను</h2>
          <p className="text-gold italic font-serif">"Literature is where hearts meet beyond language."</p>
        </div>

        <div className="text-maroon/40 text-sm tracking-widest uppercase">
          <p className="mb-2">Copyright © 2026</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
