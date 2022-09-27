import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //code snippet 1.   Click Events
// function Home(){

//  const handleClick = ()=>{
//     console.log('hello sakshi');
//  }    

//  const handleClickAgain = (name,e)=>{
//     console.log('hello ' + name, e.target);
//  }

//  return(
//    <div className="home">
//     <h2>Home Page</h2>
//     <button onClick={handleClick}>Click Me</button>
//     <button onClick={(e)=>{
//         handleClickAgain('mario',e);
//     }}>Click me again</button>
//    </div> 
//  );
// }
// export default Home;






//code snippet 2. useState & updating values 
// import { useState } from "react";

// const Home = () => {
//   // let name = 'mario';
//   const [name, setName] = useState('mario');
//   const [age, setAge] = useState(25);

//   const handleClick = () => {
//     // name = 'luigi';
//     setName('luigi');
//     setAge(30);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{ name } is { age } years old</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }
 
// export default Home;





//code snippet 3. : reusing component

// import { useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'sakshi', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'sakshi', id: 3 }
//   ])

//   return (
//     <div className="home">
//         <BlogList blogs = {blogs} title="All Blogs" />
//         {/* now, let's say I want only the blogs of author named sakshi, so in this case, I can reuse the same component i.e BlogList with different data in the below mentioned way:  */}
//         <BlogList blogs = {blogs.filter((blog) => blog.author === 'sakshi')} title = "Sakshi's blogs" />
//     </div>
//   );
// }
 
// export default Home;



//code snippet 4 : useEffect dependency and JSON server
// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null); 

//   const [name, setName] = useState('mario');

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//   }

//   useEffect(() => {
//     fetch('http://localhost:8000/blogs')
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       setBlogs(data);
//     })
//   }, [])

//   return (
//     <div className="home">
//       {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> */}
//       <button onClick={() => setName('luigi')}>change name</button>
//     </div>
//   );
// }
 
// export default Home;