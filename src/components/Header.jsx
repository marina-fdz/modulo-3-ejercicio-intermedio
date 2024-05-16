const Header = ({filterClubs}) => {

    const handleSelect = (ev)=>{
        const optionSelect = ev.currentTarget.value;
        if(optionSelect !== 'all'){
            filterClubs(optionSelect);
        }else{
            filterClubs('');
        }
    }

  return (
    <header className="header">
        <h1>Mis clubs</h1>
        <form>
            <label htmlFor="clubs">Mostrar</label>
            <select name="clubs" id="clubs" onChange={handleSelect}>
            <option value="all">todos</option>
            <option value="openOnWeekdays">los que abren entre semana</option>
            <option value="openOnWeekend">los que abren el fin de semana</option>
            </select>
        </form>
    </header>
  )
}

export default Header