const Form = ({changeNewClub, addNewClub}) => {

    const handleChange = (ev) =>{
        const id = ev.target.id;
        const value = ev.target.value;
        changeNewClub(id, value);
    }

    const handleCheckbox = (ev)=>{
        const id = ev.target.id;
        const isChecked = ev.target.checked === true ? true : false;
        changeNewClub(id, isChecked);
    }

    const handleClick = (ev)=>{
        ev.preventDefault();
        addNewClub();
    }


  return (
    <form>
        <h2>Añadir un nuevo club</h2>
        <label htmlFor="name">Nombre del club</label>
        <input type="text" name="name" id="name" onChange={handleChange}/>
        <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
        <input type="checkbox" name="openOnWeekdays" id="openOnWeekdays"
        onChange={handleCheckbox}/>
        <label htmlFor="openOnWeekend">¿Abre el fin de semana?</label>
        <input type="checkbox" name="openOnWeekend" id="openOnWeekend" onChange={handleCheckbox}/>
        <input type="submit" value="Añadir un nuevo club" onClick={handleClick}/>
    </form>
  )
}

export default Form