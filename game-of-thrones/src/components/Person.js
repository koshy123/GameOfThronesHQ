import React from "react";
import { useParams } from "react-router-dom";
import Quote from "./Quote";
import App from "../App";

const ShowPage = ({setData}) => {
console.log(setData)

    const {name} = useParams()

return (
        <div>
            This should show the name of person and details 

            
        </div>
      );
    };
      
  export default ShowPage;
  