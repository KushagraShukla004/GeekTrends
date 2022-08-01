import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';

export default function Home({ posts }) {
  return (
    /* mx=margin in x-axis(Horizontal) px=padding in x-axis and mb=margin-bottom*/
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Geek Trends</title>
        <link rel='icon' href='/logo512.ico' />
      </Head>
      <FeaturedPosts />
      {/* lg= on large screens and this is a Blog post area*/}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        {/* recent posts and category cards */}
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
