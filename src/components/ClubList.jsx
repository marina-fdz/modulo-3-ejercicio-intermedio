import ClubCard from "./ClubCard"

const ClubList = ({data, deleteCard}) => {
  return (
    <ul>
        {data.map((club, i) => <li key={i}><ClubCard index={i} data={club} deleteCard={deleteCard}/></li>)}
        
    </ul>
  )
}

export default ClubList