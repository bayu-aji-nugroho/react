//semua komponen input

function Button({value,HandleOnClick,kelas}){
    return (
        <button>
            <div onClick={HandleOnClick} 
            className={`p-3 font-semibold text-white bg-sky-400 text-center text-sm h-full w-full flex items-center justify-center ${kelas ? kelas:""} 
            hover:bg-sky-300 hover:text-black transform duration-500`} >
                <p>{value}</p>
            </div>
        </button>
    )
}

export default Button