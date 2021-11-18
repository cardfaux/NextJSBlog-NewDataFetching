import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from '../../components/posts/all-posts/all-posts.jsx';
//import { getAllPosts } from '../../lib/posts-util';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React Framework for production. It make sbuilding fullstack apps and sites a breeze and ships with built-in Server Side Rendering',
    date: '2022-02-10'
  },
  {
    slug: 'mastering-javascript',
    title: 'Mastering Javascript',
    image: 'mastering-js-thumb.png',
    excerpt: 'NextJS is the React Framework for production. It make sbuilding fullstack apps and sites a breeze and ships with built-in Server Side Rendering',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React Framework for production. It make sbuilding fullstack apps and sites a breeze and ships with built-in Server Side Rendering',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React Framework for production. It make sbuilding fullstack apps and sites a breeze and ships with built-in Server Side Rendering',
    date: '2022-02-10'
  }
];

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

// export function getStaticProps() {
//   const allPosts = getAllPosts();

//   return {
//     props: {
//       posts: allPosts,
//     },
//   };
// }

export default AllPostsPage;
