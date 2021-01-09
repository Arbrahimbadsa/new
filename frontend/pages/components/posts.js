import Pagination from "./pagination";
import Post from "./post";

export default function Posts({posts = []}) {
    console.log(posts);
    return <>
    {/** Post container */}
    <div className="w-full lg:w-8/12">
        {/** Post container header */}
        <div class="box pt-0">
            <div class="box-wrapper">
                <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                    <button class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    <input type="search" name="" id="" placeholder="Search for a post" x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                    <div class="select">
                        <select name="" id="" x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
                        <option value="all" selected>All</option>
                        <option value="photo">Laravel</option>
                        <option value="illustration">Django</option>
                        <option value="vector">React</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        {posts.map(post => <Post 
        id={post.id}
        date={post.date}
        category={post.category}
        title={post.title}
        shortContent={post.content}
        author={post.author}
        />)}
        <Pagination />
    </div>
        {/** Post container ends */}
    </>;
}