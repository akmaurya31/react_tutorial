//Rendering Lists
//https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
//Warning: Each child in a list should have a unique “key” prop.
// How to render components from an array using JavaScript’s map()
// How to render only specific components using JavaScript’s filter()
// When and why to use React keys
const people = [
  '1Creola Katherine Johnson: mathematician',
  '2Mario Jos Molina-Pasquel Henquez: chemist',
  '3Mohammad Abdus Salam: physicist',
  '4Percy Lavon Julian: chemist',
  '5Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function Listkey() {
  const listItems = people.map((person,index) =>
    <li key={index+1}>{index} - {person}</li>
  );
  return <ul>{listItems}</ul>;
}

//Why does React need keys? 
//Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on.
//Keys help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM
