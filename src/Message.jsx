import React  from "react";
import { useQuery, gql } from "@apollo/client"; 
import { TailSpin  } from "react-loader-spinner";
import './index.css' 

const CONTENT_VALUES = gql`
  query GetCore($limit:Int){
    launchesPast(limit:$limit){
      launch_date_local
      launch_date_unix
      launch_date_utc
      mission_name
      mission_id
      details
    }

  }
`
const Message=(props)=>{
  const {loading, error, data} = useQuery(CONTENT_VALUES, {variables:{limit:props.count}})
  if(loading) return(
    <div className="loader-container">
      <TailSpin  className='spinner-class'  visible={true} ariaLabel='tail-spin-loading'/>
      <p className='loading'>Loading..!</p>
    </div>
  )
  if(error) return<p>Error:{error.message}</p>
  return(
     <div className="container-main">
      
    
      
        <div className="middle-container">
      <li className="list-item">
      
        {data && data.launchesPast.map(eachCore => (<><p>Local:{eachCore.launch_date_local}</p>
        <p>unix: {eachCore.launch_date_unix}</p>
        <p>UTC: {eachCore.launch_date_utc}</p>
        <p>Name: {eachCore.mission_name}</p>
        <p>Id: {eachCore.mission_id}</p>
        <p>Details: {eachCore.details}</p>
        <hr/>
        </>))}
        
      </li>
      </div>
      </div>
      
      
     
  )
}


export default Message