import {useState,useEffect, useDebugValue} from "react"
const ListFeedbacks = () => {
  var [feedbacks,SetFeedbacks] = useState([]);

  useEffect(() => {
    SetFeedbacks([{name:"pertti",message:"Kahvi ei maistunut",stars:<><span className="star checked"></span><span className="star checked"></span><span className="star checked"></span></>},{name:"pertti",message:"Kahvi ei maistunut",stars:<><span className="star checked"></span><span className="star checked"></span><span className="star checked"></span></>},{name:"pertti",message:"Kahvi ei maistunut",stars:<><span className="star checked"></span><span className="star checked"></span><span className="star checked"></span></>},{name:"pertti",message:"Kahvi ei maistunut",stars:<><span className="star checked"></span><span className="star checked"></span><span className="star checked"></span></>},{name:"pertti",message:"Kahvi ei maistunut",stars:<><span className="star checked"></span><span className="star checked"></span><span className="star checked"></span></>}])
  }, [])


  return <section id="feedbacks">
    {feedbacks.length > 0 && feedbacks.map(feedback => (
    <div className="feedback">
        <h3>{feedback.name}</h3>
        <textarea defaultValue={feedback.message} disabled/>
        <div>{feedback.stars}</div>
        
    </div>
    ))}    
  </section>
  };
  
  export default ListFeedbacks;