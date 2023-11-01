import "./Profile.css";
function Profile() {
  return (
    <>
     <div className="profile">
        <div className="followers">
            <h3>27K</h3>
            <p>Followers</p>  <br />
        </div>
        <div className="following">
            <h3>76</h3>
            <span>Following</span>  
        </div>  
        <br />
        <div className="info">
            <div className="user">
                <p className="name">ABC User</p>
                <p className="id">@abc_pluton,</p>
            </div>
            <p>Hey, Welcome to Pluton</p>
            <p>Share | Connect | Apply</p>
            
        </div>    
            
            <button onClick={() =>alert("Please Login")}>  Post</button>
     </div>
     
    </>
  );
}

export default Profile;