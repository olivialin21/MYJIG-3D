import { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"
// import { setProductDetail } from "../actions";

export default function WorksItem({ work }) {
  const { dispatch } = useContext(StoreContext);
  return (
    <div className="col-6 col-md-4 col-xl-3 col-xl-5ths mb-4 worksItem">
      <div className="worksItem-cover">
        <Link to={`/works/${work.id}`} 
          onClick={()=>{
              // setProductDetail(dispatch, work.id, 1);
          }}
        >
          <img src={require('../images/works/'+work.imgurl+'.png').default} alt=""/>
          <div className="info">
            <div className="line line1">{work.name}</div>
            <div className="line line2">{work.photoNum} 張照片</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
