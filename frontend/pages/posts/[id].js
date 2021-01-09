
import Head from 'next/head';
import Header from '../components/header';

const Post = ({post}) => {
    console.log(post)
    return <>
    <div className="bg-gray-100 h-screen">
        <Header />
        <article class="py-12 px-4">
            <h1 class="text-4xl text-center mb-4 font-semibold font-heading font-semibold">{post.title}</h1>
            <p class="text-center">
                <span>{post.date}, by</span>
                <a class="ml-1 text-indigo-600 hover:underline" href="#">{post.author}</a>
            </p>
            
            <div class="max-w-3xl mx-auto mt-10">
                {post.content}
            </div>
        </article>
        <div class="flex mx-auto items-center justify-center shadow-lg mt-0 mx-8 mb-4 max-w-lg">
            <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                    <div class="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                    </div>
                    <div class="w-full md:w-full flex items-start md:w-full px-3">
                        <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                            <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                        </div>
                        <div class="-mr-1">
                            <input type='submit' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
}

export async function getStaticPaths() {
    const {posts} = await fetch(`http://localhost:8000/api/posts`).then(res => res.json());
    const paths = posts.map(post => ({
        params: {id: post.id}
    }));
    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const {post} = await fetch(`http://localhost:8000/api/posts/${params.id}`).then(res => res.json());
    return {
        props: {
            post
        }
    }
}

export default Post;