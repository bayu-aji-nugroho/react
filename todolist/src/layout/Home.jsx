import Header from "./header"
import Body from "./body"
import Footer from "./Footer"
import { useEffect, useState } from "react"


function Home(){
    const db = [
        {judul:"Judul To DO list",deskripsi:"Deskripsi to do list",id:0 ,status:false},
    ]
    const [data,setData] = useState(db);
    const [add,setAdd] = useState(false);

    function changeAdd(Data){
        setData([Data,...data]);
    }

    function okklik(id){
        const updata = data.map((item)=>{
            return item.id === id? {...item,status:true} : item;
        })
        setData(updata);
    }

    const reset = () =>{
        setData([]);
    }

    const addhandler = () => {
        setAdd(!add);
        
    }


    return(
        <div className="flex flex-col h-screen">
            <Header reset={reset} addhendler={addhandler}/>
            <div className="flex-auto">
                <Body data={data} okklik={okklik} add={add} changeAdd={changeAdd}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home