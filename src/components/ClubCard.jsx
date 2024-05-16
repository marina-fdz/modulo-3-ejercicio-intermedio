const ClubCard = ({index, data, deleteCard}) => {

const handleClose= (ev)=>{
    const index = ev.target.id;
    deleteCard(index);
    console.log(index);
}

const openWeek = data.openOnWeekdays === true ? 'Sí' : 'No';
const openWeekend = data.openOnWeekend === true ? 'Sí' : 'No';
  return (
    <article className="card">
        <div id={index} onClick={handleClose}>X</div>
        <h3>#{index}: {data.name}</h3>
        <h4>Abierto entre semana: {openWeek}</h4>
        <h4>Abierto el fin de semana: {openWeekend}</h4>
    </article>
  )
}

export default ClubCard