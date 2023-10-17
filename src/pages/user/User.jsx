import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { data } from "../../utils/dummyData";
import { AiTwotoneStar } from "react-icons/ai";
import calender from "../../assets/Vector.png";

const User = () => {
  const [userDetails, setUserDetails] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    data.find((item) => {
      if (item.id == userId) {
        console.log(item);
        setUserDetails(item);
      }
    });
  }, [userId]);

  return (
    <div className="w-[100vw] min-h-[100vh]  ">
      <div className="mx-auto mt-14 w-[100vw] min-h-[100vh]  md:w-[80vw] lg:w-[80vw] flex flex-col md:flex-row">
        <div className="p-4 md:p-0 w-[100%] md:w-[40%] min-h-0 flex flex-col gap-5 ">
          <div className="font-bold text-4xl">{userDetails?.name}</div>
          <div>{userDetails?.intro}</div>
          <div className="flex items-center text-blue-600 text-lg ">
            <AiTwotoneStar /> {userDetails?.rating}
          </div>

          <div className=" shadow-lg bg-gray-200 w-full flex flex-col p-5 rounded-lg gap-4">
            <div className="flex  w-full items-center justify-between p-2">
              <h1>Basic to complex tasks</h1>
              <h1>{userDetails?.price}</h1>
            </div>

            <div className="flex items-center gap-3">
              <img className="w-5 " src={calender} alt="" />
              <h1>Delivers the job within 2 days</h1>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-blue-700 px-3 py-2 text-white outline-none rounded-lg">
                Request Proposal
              </button>
              <button className=" border-2 text-blue-800 font-semibold border-blue-600 px-3 py-2 rounded-lg">
                Chat with me
              </button>
            </div>
          </div>

          <div className="mt-5 p-5  shadow-lg bg-gray-200 rounded-lg ">
            <h1 className="text-3xl font-bold">What people say?</h1>
            <p>{userDetails?.testimonial?.text}</p>
          </div>
        </div>

        <div className="w-[100vw] md:w-[60vw] min-h-[100vh]  px-10 flex flex-col gap-5">
          <div className="bg-white w-[90%] h-80 rounded-lg ">
            <img
              src={userDetails?.image}
              alt=""
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>

          <div className="font-bold text-4xl">About {userDetails?.name}</div>

          <div className="flex gap-10">
            <div>
              <h1 className="font-bold text-gray-300">FROM</h1>
              <p>{userDetails?.about?.from}</p>
            </div>

            <div>
              <h1 className="font-bold text-gray-300">PARTNER SINCE</h1>
              <p>{userDetails?.about?.partnerSince}</p>
            </div>

            <div>
              <h1 className="font-bold text-gray-300">AVERAGE RESPONSE TIME</h1>
              <p>{userDetails?.about?.averageResponseTime}</p>
            </div>
          </div>

          <div>
            <div className="text-2xl font-bold">About</div>
            <div>{userDetails?.about?.description}</div>
          </div>

          <div className=" w-full min-h-[200px] flex flex-row ">
            <div className="w-[50%] h-full  p-5">
              <h1 className=" text-xl text-gray-300 font-bold ">
                SERVICES I OFFER
              </h1>
              <ul>
                {userDetails?.about?.services?.map((item, i) => {
                  return (
                    <>
                      <li key={i} className="flex items-center gap-2 mt-2">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <p>{item}</p>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            <div className="w-[50%] h-full  p-5">
              <h1 className=" text-xl text-gray-300 font-bold ">WHY ME?</h1>
              <ul>
                {userDetails?.about?.benefits?.map((item, i) => {
                  return (
                    <>
                      <li key={i} className="flex items-center gap-2 mt-2">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <p>{item}</p>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
