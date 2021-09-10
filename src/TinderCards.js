import React , {useState, useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from './axios';

function TinderCards() {
    /*const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url:"https://pyxis.nymag.com/v1/imgs/b62/816/2aa9535c108234b01b8105342efee0da72-elon-musk-2.2x.rhorizontal.w700.jpg"
        },
        {
            name: "Jeff Bezoz",
            url:"https://media.gqmagazine.fr/photos/5f44c00103a812dcf4928d62/16:9/w_2560%2cc_limit/JEFF.jpg"
        }
    ]);*/

    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }

        fetchData();
        
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing: "+nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left thet screen");
    }

    return <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person) =>(
                <TinderCard 
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.imgUrl})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>

        
    </div>;
}

export default TinderCards
