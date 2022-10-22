import {fetchedData} from './fetchedData'
import './style.scss'

export function TerceiraAula(){    
    return (
        <div>
            <ul>
            {fetchedData.map((card)=> 
                <li key={card.key}>
                    <img src={card.img}/>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                </li>)}
            </ul>
        </div>
    )
}