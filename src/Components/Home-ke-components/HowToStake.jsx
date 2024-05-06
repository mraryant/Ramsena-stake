
import htb1 from "../../assets/icons/htb1.webp"
import htb2 from "../../assets/icons/htb2.webp"
import htb3 from "../../assets/icons/htb3.webp"
import htb4 from "../../assets/icons/htb4.webp"
import htbairos from "../../assets/icons/htbairos.webp"


const HowToStake = () => {
    return (
        <>
            <div id="howtostake" className=" flex flex-col  gap-16 min-h-[70vh] w-screen my-20 "  >

                <div id="heading" className=" flex flex-col items-center gap-3  " >
                    <h1 className=" text-5xl font-bold tablet:text-4xl  text-center px-4  " >How to stake Ramsena Coin </h1>
                    <p className=" text-md  text-center  max-w-[50rem] text-gray-400 px-4 " >Ramsena supports a diverse range of cryptocurrencies for staking, providing you with ample opportunities to diversify your portfolio. Explore our list of supported cryptocurrencies and seize the chance to stake your favorite assets with ease and confidence.</p>
                </div>

                <div className=" relative flex gap-3 justify-between px-5  tablet:flex-wrap tablet:justify-center tablet:gap-10 ">

                    <img loading="lazy" className="absolute tablet:hidden  w-[70vw] top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src={htbairos} alt="" />
                    
                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-5 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb1} alt="" />
                        <h3 className=" text-[--primary-color] " >Connect wallet </h3>
                        <p className="text-gray-400 font-thin" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-5 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb2} alt="" />
                        <h3 className=" text-[--primary-color] " >Connect wallet </h3>
                        <p className="text-gray-400 font-thin" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-5 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb3} alt="" />
                        <h3 className=" text-[--primary-color] " >Connect wallet </h3>
                        <p className="text-gray-400 font-thin" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className=" max-w-[20rem] tablet:max-w-[15rem] tablet:phone:max-w-[25rem] flex gap-5 flex-col items-center justify-center text-center " >
                        <img loading="lazy" src={htb4} alt="" />
                        <h3 className=" text-[--primary-color] " >Connect wallet </h3>
                        <p className="text-gray-400 font-thin" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HowToStake