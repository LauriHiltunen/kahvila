import {useState,useEffect} from "react"

const OpenTime = () => {

  var [week,setWeek] = useState([])

  useEffect(() => {
    setWeek([{name:"Ma",open:false},{name:"Ti",open:true,opensAt:"8:00",closesAt:"16:00"},{name:"Ke",open:true,opensAt:"8:00",closesAt:"16:00"},{name:"To",open:true,opensAt:"8:00",closesAt:"16:00"},{name:"Pe",open:true,opensAt:"8:00",closesAt:"16:00"},{name:"La",open:true,opensAt:"8:00",closesAt:"16:00"},{name:"Su",open:true,opensAt:"8:00",closesAt:"16:00"}])
  },[])

  return <section id="opentime" className="content">
  <h2>Aukioloajat</h2>
  <ul className="opentime_days">
    {week.map((value,index) => (
      <li key={index} className="opentime_day_wrapper">
        <div className='opentime_day'>
          <h3>{value.name}</h3>
          {value.open ? `Avoin ${value.opensAt} - ${value.closesAt}`
          :  "Suljettu" }
        </div>
      </li>
    ))}
  </ul>
  </section>
}
export default OpenTime