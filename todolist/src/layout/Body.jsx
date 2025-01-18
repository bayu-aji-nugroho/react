import { useState } from "react"

function Add({judul,deskripsi,hendleForm,setjudul,setdeskripsi}){
    return (
        <div className="p-5 text-white">
            <form className="flex flex-col" onSubmit={hendleForm}>
                <div className="flex flex-row">
                    <span className="font-extrabold mr-1 items-center">Judul : </span>
                    <input type="commit" placeholder="masukkan judul" name="judul" value={judul} onChange={(e)=>{setjudul(e.target.value)}}
                    className="flex-1 bg-transparent text-white font-semibold md:w-1/2 md:flex-none
                     focus:outline-0 focus:border-b-white focus:border-b-2"/>
                </div>
                <div className="flex flex-row">
                    <span className="font-extrabold mr-1 items-center">deskripsi list : </span>
                    <input type="commit" placeholder="masukkan judul" name="judul"  value={deskripsi} onChange={(e)=>{setdeskripsi(e.target.value)}}
                    className="flex-1 bg-transparent text-white font-semibold md:w-1/2 md:flex-none
                     focus:outline-0 focus:border-b-white focus:border-b-2"/>
                </div>
                <button className="bg-sky-400 p-2 rounded-full px-4 text-center justify-center my-4">tambahkan</button>
            </form>
        </div>
    )
}

function Body({data,okklik,add,changeAdd}){

    let  [Judul,setJudul] = useState("");
    let [Deskripsi,setDeskripsi] = useState("");
    function formHendler(e){
        e.preventDefault();
        const newitem = {judul:Judul,deskripsi:Deskripsi,id:1,status:false}
        changeAdd(newitem);
    }
    
    return (
        <div className="flex md:flex-row flex-col">

            {
                add && (
                    <div className="md:w-1/2 w-full h-60 bg-sky-600 my-3 md:rounded-r-full animate-geser">
                        <Add judul={Judul} deskripsi={Deskripsi} hendleForm={formHendler} setjudul={setJudul} setdeskripsi={setDeskripsi}/>
                    </div>
                )
            }
            
            <div className="my-4 flex-auto w-full md:grid md:grid-cols-4">
                {
                    data.map(({judul,deskripsi,id,status})=>(
                        <List judul={judul} deskripsi={deskripsi} id={id} diklik={okklik} key={id} status={status}/>
                    ))
                }

            </div>
        </div>
    )
}


function List({judul,deskripsi,id,diklik,status}){
    return (
        <>
            <div className={` m-3 rounded-3xl py-3 transform animate-hilang duration-500 shadow-2xl text-white  ${status? "bg-green-900 hover:bg-red-900 line-through":" bg-sky-500 hover:bg-green-900"}   `}
            onClick={() => {diklik(id)}} >
                            <div className="m-5">         
                                <h1 className="font-extrabold text-xl flex-1">{judul}</h1>
                                <p>{deskripsi}</p>
                            </div>
             </div>
        </>
    )
}

export default Body
