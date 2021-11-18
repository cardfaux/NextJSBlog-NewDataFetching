import Hero from "../components/home-page/hero/hero";
import FeaturedPosts from '../components/home-page/featured-posts/featured-posts.jsx'

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

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}

export default HomePage;
