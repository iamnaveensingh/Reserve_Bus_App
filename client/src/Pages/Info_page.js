import React,{useState} from "react";
import { useSelector } from "react-redux";
import BusInfoCard from "../Components/BusInfoCard";
import DetailsInputCard from "../Components/DetailsInputCard";
import FareDetailsCard from "../Components/FareDetailsCard";

const Info_page = () => {
  const busData = useSelector((state) => state.busData);
  const fromTo = useSelector((state) => state.fromTo);
  const [userDetails, setUserDetails] = useState({
    BusID:busData.busLocation.busID,Name:'',Gender:'',Age:0,Email:'',MobileNo:'',FromDate:fromTo.INIT_STATE.FromDate.format('yyyy-MM-DD'),Seats:busData.busLocation.selectedSeat,Price:busData.busLocation.filterPrice
  })
  console.log(userDetails)
  return (
    <div className="flex mt-24 mb-8 mx-10">
      <div className="basis-3/4  mr-3 ">
        <BusInfoCard />
        <div className="font-bold text-xl text-left mt-8 mb-4">
          Enter traveller Details
        </div>
        <DetailsInputCard userDetails={userDetails} setUserDetails={setUserDetails} />
      </div>
      <FareDetailsCard userDetails={userDetails} />
    </div>
  );
};

export default Info_page;
