const Meme =()=>{
    const numeros=[1,2,3,4]
    let imagen="../../public/"+numeros[Math.floor(Math.random() * numeros.length)]+".png"
    
    return(
        <>
            <div className="normalize font-mont " >
                <img src={imagen} alt="" />
            </div>
        </>
    )

};

export default Meme;