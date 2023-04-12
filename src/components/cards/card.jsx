import './css/card.scss';


const Card = ({key,name,status,species,location,origin,image}) =>{
    return(
        <>
        <div className=" col-12 col-lg-6 card-wrapper d-flex flex-row m-3 justify-content-center align-items-center">

                <img className="p-0 m-0 card-img-top" src={image}  alt="..."/>
                <div className="card-body d-flex flex-column p-4">
                    <h3 className="fw-bold">{name}</h3>
                    <span className="card-type">{status} - {species}</span>
                    <span className="card-text">Last known location:
                        <span>{location.name}</span>
                    </span>
                    <span className="card-text">First seen in:
                        <span>{origin.name}</span>
                    </span>
                </div>   
        </div>
        </>
    )
}

export default Card;