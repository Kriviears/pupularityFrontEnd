import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import "./DoggieCards.css";

function DoggieCards() {
    const [doggies, setDoggies] = useState([
        {
            name: "Shiva",
            url: 'https://cdn.pixabay.com/photo/2024/02/08/03/45/ai-generated-8560118_1280.png'
        },
        {
            name: "Ganesha",
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Tibetan-bronze-statue-Ganesha.jpg/800px-Tibetan-bronze-statue-Ganesha.jpg'
        },
        {
            name: "Bulba",
            url: 'https://img.ifunny.co/images/7a4dddf934e0bcf7b615b9a58bdeff5eb2e283ddce955a84b106560472b14bd5_1.webp'
        },
        {
            name: "Akuma",
            url: 'https://pbs.twimg.com/media/GNPwoLLWgAAhKBS?format=jpg&name=large'
        }
    ]);

    //calls every time doggies variable changes
    useEffect(()=>{
        //this is where the sql call happens
    }, [doggies])

    //calls on render and not again
    useEffect(()=>{
        //sql call all the dogs not currently rated by the user by the user
    }, [])

    
    return (
        <div>
            <h1 className='DoggieCards__title'>DoggieCards</h1>
            <div className='DoggieCards__cardContainer'>
                {doggies.map(dog=>(   
                    <TinderCard
                        className='swipe'
                        key={dog.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{backgroundImage: `url(${dog.url})`}} 
                            className='card'
                        >
                            <h3>{dog.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default DoggieCards;