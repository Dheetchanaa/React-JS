const userdata = [{
  name:"John",
  city:"Salem",
  description:"Front-end developer",
  skills:["HTML", "CSS","JavaScript", "React js", "UI/UX" ],
  online: false,
  profile: "Images/img1.jpg"
},
{
  name:"James",
  city:"Coimbatore",
  description:"Back-end developer",
  skills:["Java", "SQL","Python", "JavaScript", "Angular js" ],
  online: true,
  profile: "Images/img2.jpg"
},
{
  name:"Priya",
  city:"Chennai",
  description:"Full stack developer",
  skills:["MERN", "Web Development","JavaScript", "React js", "Node js" ],
  online: false,
  profile: "Images/img3.jpg"
}
];

function Card(props){
    return(
      <div className="container">
        <div className="card-container">
        <p className={props.online? "onOff online": "onOff offline"}>{props.online? "ONLINE":"OFFLINE"}</p>
        <img src = {props.profile}></img>
        <h3 className="name">{props.name}</h3>
        <h3 className="city">{props.city}</h3>
        <p className="description">{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
        <h4>Skills</h4>
        <ul>
            {props.skills.map((skill, index)=>(
              <li key={index}>{skill}</li>
            ))}
        </ul>
        </div>
    </div>
      </div>
      
    );
}

export const Cardproject = () => {
  return (
    <>
    {
      userdata.map((user,index)=>(
        <Card key={index}
        name = {user.name}
        city = {user.city}
        description = {user.description}
        skills = {user.skills}
        online = {user.online}
        profile = {user.profile}
        />
      ))
    }
    </>
  )
}
