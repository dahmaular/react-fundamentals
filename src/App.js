import unorderedLists from './objects';
import './App.css';

//filter
//map
//reduce


let isSunny = true;

// console.log(unorderedLists)

// let weather;

// if(isSunny) {
//   weather = 'What a Bright Day'
// } else {
//   weather = 'What a drab day'
// }


// const arr = [1, 2 ,3 ,4 ,5]

// let elem1 = arr[0]
// let elem2 = arr[1]
// let elem3 = arr[2]
// let elem4 = arr[3]
// let elem5 = arr[4]
  
// const [ element1, element2, element3, element4, element5 ] = arr
//  console.log(element2)


// let name = person.name
// let anotherName = person['name']
// console.log(name, anotherName)

//object destructuring

//  const {name, age, isMarried} = person
//  console.log(name)
//  console.log(age)
//  console.log(isMarried)


const person = {
  name: "Ana de Armas",
  gender: 'female',
  age: 30
}

let entries = Object.entries(person)
console.log(entries)

//loop through all the elements

function App(props) {
const { logo, button} = props

  return (
      <div className='app'>
        <nav className='nav-container flex'>
          <h2><a href="https://www.google.com"></a>{logo.toUpperCase()}</h2>
          <ul className='list-items'>

          {unorderedLists.map((dodo) => {
        return    <li>{dodo.name}</li>
          })}   
          
          
          </ul>
          <button className='btn'>{button}</button>

          
        </nav>
        <hr className='line'/>

        <p style={{color: isSunny ? "red" : "grey", backgroundColor: isSunny ? "white" : "", paddingBlock: "1rem"}}>{isSunny ? "What a Bright Day" : "What a drab day"}</p>

        <p>{isSunny && 'Hi, im a logical "AND" operator and i will only appear IF the condition is true'}</p>
    </div>
  
  );
}

export default App;
