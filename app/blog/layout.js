// app/blog/layout.js

export const metadata = {
    title: 'Blog - US11 Soccer',
    description: 'Latest soccer news and updates from US11 Blog',
  };
  
  export default function BlogLayout({ children }) {
    return (
      <div>
        {/* Možeš staviti layout stilove, header, footer, itd */}
        {children}
      </div>
    );
  }
  