import {useState,useEffect} from "react"

const Sort = (props) => {
  const [sortOptions,setSortOptions] = useState([])
  const [selectedSortOption,setSelectedSortOption] = useState(-1)

  useEffect(() => {
    setSortOptions(props.sortOptions)
    setSelectedSortOption(props.sortOptions.length-1)
    console.log(props.sortOptions)
  },[])

  function sortOptionChanged(event,index) {
    // props.onSelectedIndexChange(index)
    // setSelectedSortOption(index)
    console.log(index)
  }
  return <div class="dropdown-content">
    {sortOptions.map((value,index) => (
      <label key={index}>
        <span>{value.labelText}</span>
        <input type="radio" name={props.radioBtnName} onChange={(event) => {sortOptionChanged(event,index)}}/>
      </label>
    ))}
  </div>
}
export default Sort