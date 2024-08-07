// import { Navbar } from "../../../components/navbar"
import { Navbar } from "../../components/navbar"
import { NavLinks } from "../../components/navlinks"


export function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Navbar />
            <main>
                <div className="bg-raisin-black w-full h-screen mt-24">
                    <section>
                        <div className="flex h-full lg:w-1/2">
                            <div className=" max-lg:text-center lg:ml-20 mt-36">
                                <h1 className="text-white text-5xl font-regular">Bem vindo a DevDynasty!</h1>
                                <p className="text-white text-[32px] font-extralight mt-12 max-lg:mx-16">Lorem ipsum dolor sit amet. Et velit esse sed recusandae fuga ea vero dolores id vitae veritatis.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>


            <footer>

            </footer>

        </>
    )
}