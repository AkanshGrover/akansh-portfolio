function ECard( {info} ){
    return (
        <div className="ECard">
            <div className="ecardHeader">
                <h3>{info.title}</h3>
                <h4>{info.where}</h4>
                <h5>{info.when}</h5>
            </div>
            <p className="ecardDesc">{info.desc}</p>
        </div>
    )
}

export default ECard