import Link from 'next/link';

const Post = ({id, date, category, title, shortContent, author}) => {
    return <div className="mt-6">
    <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">{date}</span>
            <a className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{category}</a>
        </div>
        <div className="mt-2">
            <Link href={`/posts/${id}`}>
                <a className="text-2xl text-gray-700 font-bold hover:underline">{title}</a>
            </Link>
            <p className="mt-2 text-gray-600">{shortContent}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
            <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:underline">Read more</a>
            </Link>
            <div>
            <a href="#" className="flex items-center">
            <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
            <h1 className="text-gray-700 font-bold hover:underline">{author}</h1>
            </a>
            </div>
        </div>
    </div>
</div>;
}

export default Post;