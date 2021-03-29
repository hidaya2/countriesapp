import {Link } from "react-router-dom"

function Card({ name, img, population }) {
    return (
        <div className="card m-3 shadow-lg">
         <img src={img} alt="" className="card-img-top" style={{height:"10rem", width:"18rem" }}/>
            <div className="card-body">
                <Link to={`/detail/${name}`}>
             <h4>{name}</h4>
             <h4>{population}</h4></Link>
            </div> 
        </div>
    )
}

export default Card
