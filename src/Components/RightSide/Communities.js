import  "./Communities.css";
function Communities() {
  const community = [{
    name:"",
    members:"",
    img:""

  }];
  return (
    <div className="rightside">
        <input type="text" name="search" id="search" placeholder="Search" />
        <h4>Joined Communties</h4>
        <div>
          <div>DSA Community</div>
          <div>MERN Community</div>
        </div>
    </div>
  );
}

export default Communities;