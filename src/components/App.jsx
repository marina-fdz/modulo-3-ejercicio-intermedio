// Fichero src/components/App.jsx
import '../styles/App.scss';
import ClubCard from './ClubCard';
import ClubList from './ClubList';
import Form from './Form';
import Header from './Header';
import initialData from '../services/data.json';
import { useState } from 'react';


function App() {
  const [clubList, setClubList] = useState(initialData);
  const [newClub, setNewClub] = useState({name:'', openOnWeekdays:false, openOnWeekend:false});
  const [filterOption, setFilterOption] = useState('');

  function changeNewClub(key, value){
    const newObject = {...newClub, [key]: value};
    setNewClub(newObject);
  }

  function addNewClub(){
    setClubList([...clubList, newClub]);
  }

  function filterClubs(option){
    setFilterOption(option);
  }

  const filteredClubs = clubList.filter((item) =>{
    if(filterOption === 'openOnWeekdays'){
      return item.openOnWeekdays === true;
    } else if(filterOption === 'openOnWeekend'){
      return item.openOnWeekend === true;
    }else{
      return item;
    }
    
  });

  function deleteCard(index){
    const shorterClubList = [...clubList];
    const lessClubs = shorterClubList.splice(index,1);
    console.log(shorterClubList);
    setClubList(shorterClubList);
  }

  return (
    <div>
      <Header filterClubs={filterClubs}/>
      <ClubList data={filteredClubs} deleteCard={deleteCard}/>
      <Form changeNewClub={changeNewClub} addNewClub={addNewClub}/>
    </div>
  );
}

export default App;