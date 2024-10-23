import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 border-2 border-gray-200 rounded-xl md:p-4 p-1">
            <h2 className="text-4xl font-medium">Blogs : {blogs.length}</h2>
        </div>
    );
};

export default Blogs;