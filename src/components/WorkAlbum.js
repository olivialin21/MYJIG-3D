import imgBack from "../images/icn_back.svg"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function WorkAlbum({work}) {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])

  return(
    <div className="workAlbum mt75">
      {loading ? 
        <></>
        : 
        <>
          <Link to="/works">
            <div className="workAlbum-back">
              <img src={imgBack} alt="back to works"/>
              <span>Back to Works</span>
            </div>
          </Link>
          <div className="workAlbum-work">
            <div className="workAlbum-title">
              <p className="workAlbum-title-name">{work.name}</p>
              <p className="workAlbum-title-photoNum">{work.photoNum} photos</p>
            </div>
            <div className="row workAlbum-works">
              {work.images.map(image => (
                <div className="col-6 col-md-4">
                  <div className="workAlbum-img">
                    <img src={require('../images/works/'+image.imgurl+'.png').default} alt=""/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      }
    </div>
  );
}