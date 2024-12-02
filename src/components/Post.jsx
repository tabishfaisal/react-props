import cover from '../assets/Pizza.jpg'
import style from '../components/Post.module.css';
function Post (){
const posts = [
    {
      id: 1,
      title: 'Titolo del Post',
      image: cover /* compila questo campo */,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['html', 'css'],
      published: true,
    },
    {
      id: 2,
      title: 'Titolo del Post',
      image: cover /* compila questo campo */,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['js', 'css'],
      published: true,
    },
    {
      id: 3,
      title: 'Titolo del Post',
      image: cover /* compila questo campo */,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['js', 'php'],
      published: true,
    },
    {
      id: 4,
      title: 'Titolo del Post',
      image: cover /* compila questo campo */,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['html'],
      published: false,
    },
  ]
  const NewPosts = posts.filter((post)=> post.published === true)
  return (
    <div className={style.col}>
      {NewPosts.map((post)=>(
        <div key={post.id} className={style.card}>
            <img src={post.image} />
            <h1>{post.title}</h1>
            <p>{post.tags.join(" ")}</p>
            <p>{post.content}</p>
        </div>
        
      ))}
    </div>
  )
}
export default Post;