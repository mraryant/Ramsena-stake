
import st from "../../assets/icons/safe tick.webp"
import rcoin from "../../assets/icons/ramsenaCoin.webp"
import graf1 from "../../assets/icons/graf.svg"
import approveImg from "../../assets/icons/stake-approve-img.svg"
// import logo from "../../assets/icons/logo.webp"
import { useState } from "react";
// import { Link } from "react-router-dom"

const StakeHero = () => {

    const [rightContainer, setrightContainer] = useState(true);

    const handlerightContainer = () => {
        setrightContainer(false);
    }

    return (
        <>
           
            

            <div id="hero-main" className=" min-h-[90vh]  flex items-center bg-[url('/bgimg/herobg.webp')] bg-cover bg-center px-3  py-10  mx-5 phone:mx-2 my-10 rounded-[40px]   ">

                <div className="h-full w-full flex laptop:flex-col items-center justify-center ">

                    <div id="hero-left"
                        className="w-[55%] h-[100%] flex flex-col justify-center  gap-10 desktop:w-[100%]  desktop:mt-[50px]"
                    >

                        <div id="hero-left-top" className="  flex flex-col gap-8">

                            <h1 className=" text-[75px] font-normal relative  leading-tight  laptop:text-center desktop:text-[60px]  desktop:laptop:text-[50px]  desktop:laptop:phone:text-[30px]    ">

                                Earn rewards every day
                                on Staking up to 18%
                                per year

                            </h1>

                            <p className=" flex leading-snug font-normal   text-[17px] w-[80%] tracking-[0.35px] desktop:w-[90%] laptop:text-center  laptop:m-auto desktop:phone:w-[100%] ">
                                Earn staking rewards every second with Ramsena, a staking token with slashing protection.Earn staking rewards every second with Ramsena, a staking token with slashing protection. Earn staking rewards every second with Ramsena, a staking token with slashing protection.

                            </p>
                        </div>
                    </div>

                    <div
                        id="hero-right"
                        className=" text-black relative z-10 laptop:mt-10 w-[40%] h-[100%] flex justify-center gap-0  desktop:w-[100%] "
                    >

                        {
                            rightContainer ?
                                <div id="hero-right-container"
                                    className=" flex   flex-col py-6 justify-center gap-5        w-[500px] max-w-[600px] overflow-hidden rounded-[30px]   bg-cover bg-opacity-80 bg-center  px-5"
                                >


                                    <div className="flex items-center   justify-between phone:flex-col-reverse" >
                                        <h2 className=" text-4xl font-normal">Approve Tokens</h2>
                                        <div className="flex items-center  justify-center gap-2 bg-gray-100   px-3 py-1 h-fit  rounded-lg w-fit" >
                                            <img loading="lazy" src={st} alt="" />
                                            <p className=" text-nowrap" >Safe & secured</p>
                                        </div>
                                    </div>
                                    <p className=" tablet:text-center" >Approve Ramsena Token and start to stake.</p>

                                    <div>
                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                                            </div>

                                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl  block w-full px-14 py-4 " placeholder=" Ramsena Amount " />

                                        </div>


                                        <div className="flex justify-center" >

                                            <button type="submit" onClick={() => handlerightContainer()} className="border-2 px-5 py-2 rounded-xl bg-yellow-500  ">
                                                Connect wallet
                                            </button>
                                        </div>

                                    </div>




                                </div>
                                :
                                <div id="hero-right-container"
                                    className=" flex   flex-col py-5 justify-center gap-5     min-h-[600px]  w-[500px] max-w-[600px] overflow-hidden rounded-[30px]   bg-cover bg-opacity-80 bg-center  px-4"
                                >


                                    <div className="flex items-center   justify-between phone:flex-col-reverse" >
                                        <h2 className=" text-4xl font-normal">Stake Ramsena</h2>
                                        <div className="flex items-center  justify-center gap-2 bg-gray-100   px-3 py-1 h-fit  rounded-lg w-fit" >
                                            <img loading="lazy" src={st} alt="" />
                                            <p className=" text-nowrap" >Safe & secured</p>
                                        </div>
                                    </div>
                                    <p className=" tablet:text-center" >Stake Ramsena and earn staking rewards.</p>

                                    <div>
                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                                            </div>

                                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-14 py-4 " placeholder=" Ramsena Amount " />

                                        </div>
                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                                            </div>

                                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-14 py-4         " placeholder=" Ramsena Amount " />

                                        </div>
                                        <div className="relative mb-6">
                                            <div className=" absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                                                <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                                            </div>

                                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-14 py-4         " placeholder=" Ramsena Amount " />

                                        </div>

                                        <div className="flex justify-center" >

                                            <button type="submit" className="border-2 px-5 py-2 rounded-xl bg-yellow-500  ">
                                                Connect wallet
                                            </button>
                                        </div>

                                    </div>
                                    <div className="flex  flex-col gap-2" >
                                        <div className="flex justify-between" >
                                            <p className="text-gray-900" >You will receive</p>
                                            <p>0.0 Ramsena</p>
                                        </div>
                                        <div className="flex justify-between" >
                                            <p className="text-gray-900" >Returns</p>
                                            <p>21% Monthly</p>
                                        </div>
                                        <div className="flex justify-between" >
                                            <p className="text-gray-900" >Token Price</p>
                                            <p>$2.2869</p>
                                        </div>
                                        <div className="flex justify-between" >
                                            <p className="text-gray-900" >Referral</p>
                                            <p>Nan</p>
                                        </div>
                                    </div>



                                </div>

                        }

                    </div>
                </div>


            </div>

            {
                rightContainer ?
                    " "
                    :
            <div id="approve-banner" className="flex tablet:flex-wrap tablet:gap-5 gap-3 justify-evenly my-10 px-5 " >
                <div className="flex gap-2 items-start max-w-[28rem] " >
                    <img className=" w-[2rem]" src={approveImg} alt="" />
                    <div className="flex flex-col justify-start gap-3" >
                        <h1 className="text-3xl" >Approve Tokens</h1>
                        <p className="text-gray-300 font-thin" >Approve Ramsena to interact with Ramsena Staking smart contract</p>
                    </div>
                </div>
                
                <div className="flex  w-[25rem] " >
                    <div className="relative h-fit w-full ">
                        <div className="  absolute inset-y-0 start-0 mx-3 flex items-center   pointer-events-none">
                            <img loading="lazy" src={rcoin} className="h-[30px] w-[30px] " alt="" />
                        </div>

                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-14 py-4 " placeholder=" Ramsena Amount " />

                    </div>
                </div>

                <div className="flex w-[25rem] h-fit justify-center" >

                    <button type="submit" className="border-2 w-full px-5 py-[0.8rem] rounded-xl bg-yellow-500  ">
                        Approve Token
                    </button>
                </div>
            </div>

            }
            

            <div className=" px-14 py-2 w-full laptop:px-10 laptop:tablet:px-2    " >
                <div id="banner-main" className="  rounded-[10px] flex    gap-10 laptop:tablet:gap-5 flex-wrap justify-evenly">

                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>
                    
                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>
                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>
                    <div id="banner-inner" className="flex gap-3 flex-col items-start justify-center rounded-2xl p-5 px-10 " >
                        <h5 className="text-lg text-white " >Token live price</h5>
                        <div className="flex gap-5" >

                            <p className="text-xl   " >$2.302</p>
                            <img className=" w-[7rem] " src={graf1} alt="" />
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default StakeHero