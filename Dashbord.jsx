import {useState, useEffect} from 'react';
import ColumnHeaders from './ColumnHeaders';
import NoMatchPage from './NoMatchPage';

const Dashboard = () => {
  const [posts, setPosts] = useState([])
  useEffect (() => {
    async function getPosts (){
      const response = await fetch ('https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts')
      const posts = await response.json();
      console.log(posts);
      setPosts (posts.data.posts);
    }
    getPosts();
  }, [])

return (
  <main>
    <h2>Posts</h2>
    <table>
      <tr>
        <ColumnHeaders/>
      </tr>
      {/*<tr>
      <td>Acer</td>
      <td>$40</td>
      <td>Min</td>
      </tr>*/}
    <div>
      {posts.map(({_id, title, price, author}) => (
        <NoMatchPage key={_id} id={_id} name={title} price={price} seller={author.username}/>
      ))}
    </div>
    </table>
  </main>
)
}

  
export default Dashboard
    














