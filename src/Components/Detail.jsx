import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import axios from "axios";
import DetailTable from "./DetailTable";



const DetailCard = () => {
  const [data, setData] = useState([])
  const { id } = useParams();
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        setData(res.data);
      }
      )
  }, [])


  return (
    <>
      <DetailTable {...data} />
    </>
  );
};

export default DetailCard;