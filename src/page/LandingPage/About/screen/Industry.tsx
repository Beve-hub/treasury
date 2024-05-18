import  { useEffect } from "react";
import img from "../../../../assets/apple.svg";
import img2 from "../../../../assets/care.svg";
import img3 from "../../../../assets/energy.svg";
import img4 from "../../../../assets/data.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Industry = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="min-h-[30rem] bg-[--text-extra] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <div className="max-w-[1100px] flex gap-2 md:grid-cols-2 ">
          <div className="p-6 ">
            <div className=" grid justify-center items-center">
              <div className="max-w-[80rem] flex justify-center">
                <p className="  py-1 w-[15rem]  flex justify-center font-medium bg-[--button-color] text-[--text-extra]">                  
                  Our industry expertise
                </p>
              </div>
              <p className="font-bold max-w-[40rem] py-4 text-2xl text-[#121212] text-center">
              We serve large corporations, mid-sized companies, governments, and not-for profits
              </p>
            </div>

            <div className="   justify-center " data-aos="zoom-in">
              <div className="max-w-[90rem] mx-auto grid md:grid-cols-4 gap-4 px-8 py-10">
                <div className=" drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ">
                  <div className="max-w-[80rem] flex justify-start mx-2">
                    <img
                      src={img}
                      alt=""
                      className="w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="mx-2">
                      <p className="text-md font-bold">Food And Agribusiness</p>
                      <p className="text-sm ">
                      Expertise and Customized financial solution 
                       to help your business succeed
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ">
                  <div className="max-w-[80rem] flex justify-start mx-2">
                    <img
                      src={img2}
                      alt=""
                      className="w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="mx-2">
                      <p className="text-md font-bold">
                      Health Care
                      </p>
                      <p className="text-sm ">
                      Financial strategies spanning  a  range of sectors
                       within the health care industry 
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ">
                  <div className="max-w-[80rem] flex justify-start mx-2">
                    <img
                      src={img3}
                      alt=""
                      className="w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="mx-2">
                      <p className="text-md font-bold">Renewable Energy</p>
                      <p className="text-sm ">
                      Energy that help to power our global  society
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ">
                  <div className="max-w-[80rem] flex justify-start mx-2">
                    <img
                      src={img4}
                      alt=""
                      className="w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="mx-2">
                      <p className="text-md font-bold">Technology</p>
                      <p className="text-sm ">
                      Providing the Capital, connections,
                       and tools that helps technology companies succeeds 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
