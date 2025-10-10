import { Suspense } from 'react';
import AllBlogs from '@/section/blog/AllBlog';

export default function BlogPage() {
  return (
    <Suspense fallback={<p>Loading blogs...</p>}>
      <AllBlogs />
    </Suspense>
  );
}
