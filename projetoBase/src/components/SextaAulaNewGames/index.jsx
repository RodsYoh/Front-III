export function SextaAulaNewGames(props) {

        return (
            <li className='new-games'>
                <div className='listItem'>
                    <div class="gameImg">
                        <img src={props.game.picture} />
                    </div>
                    <div>
                        <div class="gameTitle"><h1>{props.game.name}</h1></div>
                        <div class="gamePlatforms"><p>{props.game.plataforms}</p></div>
                        <div class="gameCategories"><p>{(props.game.categories).map(category => {return (category+" ")})}</p></div>
                    </div>
                    <div>
                        <div  class="price"><h2>{"R$ "+props.game.price}</h2></div>
                    </div>
                </div>
           </li>
           )
}             