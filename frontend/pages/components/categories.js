const Categories = () => {
    return <div className="-mx-8 w-4/12 hidden lg:block">
    <div className="px-8">
      <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
      {/** Categories */}
      <div className="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
        <ul>
          <li><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- AWS</a></li>
          <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Laravel</a></li>
          <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Vue</a></li>
          <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Design</a></li>
          <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Django</a></li>
          <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- PHP</a></li>
        </ul>
      </div>
      {/** Categories end */}
    </div>
  </div>;
}

export default Categories;