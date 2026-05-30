function ECard( {info} ){
    const descPnts = info.desc.split("\n");
    
    return (
        <div className="ECard">
            <div className="ecardHeader">
                <h3>{info.title}</h3>
                <h4>{info.where}</h4>
                <h5>{info.when}</h5>
            </div>
            <ul className="ecardDesc">
                {descPnts.map((pnt, index) => (
                    <li key={index}>{pnt}</li>
                ))}
            </ul>
        </div>
    )
}

export default ECard