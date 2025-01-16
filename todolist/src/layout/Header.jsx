import Button from "../component/input"
import Logo from "../assets/view-list.png"
import React from "react"

function Header(){
    let [kondisi, setKondisi] = React.useState(false);
    return (
        <div className="bg-sky-500 text-white rounded-br-full">
            <div>
                <h1 className="p-2 text-5xl font-extrabold text-center py-4">Aplikasi To Do List</h1>
            </div>
            <div className="flex flex-row z-10 relative">
                <Button value={(<img src={Logo} className="h-8 w-8"></img>)} 
                HandleOnClick={() => {
                    setKondisi(!kondisi);
                    }}/>


                {kondisi &&  (
                    <div className={`animate-geser flex flex-row -z-10 relative`}>
                        <Button value={(<span>tambah item</span>)} 
                        HandleOnClick={()=>{}}/>
                        <Button value={"hapus item"} 
                        HandleOnClick={()=>{}} kelas={`rounded-r-full mr-5`}/>
                    </div>
                    )
                }
                

            </div>
        </div>
    )
}


export default Header