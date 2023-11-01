import './Home.css';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';
import proimg from "../../../assets/R.jpg";


const Home = () => {
  let userPosts = [{
    id:1,
    userName:"User_name",
    userId:"@User_Id",
    post:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate
             optio incidunt accusantium perferendis, facilis quos doloribus adipisci reiciendis 
             quas illo, voluptas ea ad ab consequatur neque quis labore molestias.`
  },{
    id:2,
    userName:"User_name",
    userId:"@User_Id",
    post:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate
             optio incidunt accusantium perferendis, facilis quos doloribus adipisci reiciendis 
             quas illo, voluptas ea ad ab consequatur neque quis labore molestias.`
  },{
    id:3,
    userName:"User_name",
    userId:"@User_Id",
    post:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate
             optio incidunt accusantium perferendis, facilis quos doloribus adipisci reiciendis 
             quas illo, voluptas ea ad ab consequatur neque quis labore molestias.`
  },]
  return (
    <>
            {userPosts.map((user)=>{
              return(<>
             <div className="Posts" key={user.id} >
                  <div className="userpost" >
                    <div><img src={proimg} width="50px" height="50px" alt="Not_Available" /></div>
                    <div className="user">
                        <p className="id">{user.userId}</p>
                        <p className="name">{user.userName}</p>
                    </div>
                  </div>
                  <p>{user.post}</p>
                   <div className="interaction">
                      <p><AiOutlineLike/> comment </p>
                      <p><FaRegComment/> Like </p>
                      <p><BsShareFill/> Share </p>
                  </div> 
             </div>
                </>)  
            })}
            
             
       
    </>
    
  )
}

export default Home