const Cuestionario =()=>{

 
    
    return(
        <>
            <div className="normalize font-mont " >
                
                <div className=" bg-slate-200 p-4 mb-5">
                   <form action="">
                   <div >
                   <label className="  form-label mt-5 "  htmlFor="respuesta1">¿De quien recibimos socorro contra el enemigo?</label>
                            <div className="flex flex-col lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input className=" mr-2" type="radio" id="c" name="respuesta1" value="chapulin" />
                                    <label className=" py-2" htmlFor="respuesta1">  El Chapulín colorado</label>
                                </div>
                                <div className="flex ">
                                    <input className=" mr-2" type="radio" id="b" name="respuesta1" value="batman" />
                                    <label className=" py-2" htmlFor="respuesta1">  Batman</label>
                                </div>
                                <div className="flex">
                                    <input  className=" mr-2" type="radio" id="b" name="respuesta1" value="batman" />
                                    <label className=" py-2" htmlFor="respuesta1">  Dios</label>
                                </div>
                            </div>
                            
                        </div>
                   
                   <div className="">
                   <label className="  form-label mt-5 " htmlFor="respuesta1">¿En quién haremos proezas?</label>
                            <div className="flex flex-col lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input className=" mr-2" type="radio" id="c" name="respuesta1" value="chapulin" />
                                    <label className=" py-2" htmlFor="respuesta3">Por el poder de grayskull</label>
                                </div>
                                <div className="flex ">
                                    <input className=" mr-2" type="radio" id="b" name="respuesta1" value="batman" />
                                    <label className=" py-2" htmlFor="respuesta3">  Me va a picar una araña radioactiva y voy a tener poderes</label>
                                </div>
                                <div className="flex">
                                    <input className=" mr-2" type="radio" id="b" name="respuesta1" value="batman" />
                                    <label className=" py-2" htmlFor="respuesta3"> En Dios</label>
                                </div>
                            </div>
                            
                        </div>

                        <div className="">
                            <label className="  form-label mt-5 " htmlFor="respuesta2">¿Quién vencerá a nuestros enemigos?</label>
                            <div className="flex flex-col lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input className=" mr-2" type="radio" id="c" name="respuesta1" value="chapulin" />
                                    <label className=" py-2" htmlFor="respuesta2"> El Capitán América</label>
                                </div>
                                <div className="flex ">
                                    <input className=" mr-2" type="radio" id="b" name="respuesta1" value="batman" />
                                    <label className=" py-2" htmlFor="respuesta2"> Superman</label>
                                </div>
                                <div className="flex">
                                    <input className=" mr-2" type="radio" id="b" name="respuesta1" value="batman" />
                                    <label className=" py-2" htmlFor="respuesta2">  Dios</label>
                                </div>
                            </div>
                            
                        </div>
                   </form>
                </div>
            </div>
        </>
    )

};

export default Cuestionario;