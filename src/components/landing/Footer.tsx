
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center text-foreground/70">
        <p>&copy; {new Date().getFullYear()} المعز لخدمات الليزر. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
