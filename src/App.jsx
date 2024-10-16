import React from 'react';
import Card from './Card';
import './App.css';

const data = [
  {
    img: "https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cute Dog",
    description: "A lovely dog enjoying the sunshine."
  },
  {
    img: "https://images.pexels.com/photos/688963/pexels-photo-688963.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Puppy with a Toy",
    description: "A playful puppy with a favorite toy."
  },
];

function App() {
  return (<>
  <h3> Proj React Homework </h3>
   <div className="app">
      {data.map((item, index) => (
        <Card 
          key={index}
          imageUrl={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </>
   
  );
}

export default App;
