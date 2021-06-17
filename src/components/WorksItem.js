import { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"
// import { setProductDetail } from "../actions";

export default function WorksItem({ work }) {
  const { dispatch } = useContext(StoreContext);
  return (
    <Link to={`/works/${work.id}`} 
      onClick={()=>{
          // setProductDetail(dispatch, work.id, 1);
      }}
    >
      <div class="album-cover">
        <img src={require(`${work.imgurl}`)} alt=""/>
        <div class="info">
          <div class="line line1">{work.name}</div>
          <div class="line line2">{work.photoNum} 張照片</div>
        </div>
      </div>
        {/* <img
            style={{ width: '100%' }}
            src={require(`${work.imgurl}`)}
            alt={work.name} /> */}
    </Link>
  );
}
