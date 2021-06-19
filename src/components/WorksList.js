import WorksItem from "./WorksItem";
import works from "../json/works.json";
import { useEffect, useState } from 'react';

export default function WorksList() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])

  return (
    <div className="worksList mt75">
      <p className="worksList-title">Works</p>
      <div className="container-fluid row worksList-list">
        {loading ? 
          <></>
          : 
          <>
            {works.map( work => (
              <WorksItem work={work}/>
            ))}
          </>
        }
      </div>
    </div>
  );
}

