import Header from "./header"
import Body from "./body"
import Footer from "./Footer"

function Home(){
    return(
        <div className="flex flex-col border border-black h-screen">
            <Header />
            <div className="flex-auto">
                <Body/>
            </div>
            <Footer />
        </div>
    )
}

export default Home