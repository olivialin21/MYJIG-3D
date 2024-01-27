import { Link } from 'react-router-dom';

export default function WorksItem({ work }) {
  return (
    <div className="col-6 col-md-4 col-xl-3 col-xl-5ths mb-4 worksItem">
      <div className="worksItem-cover">
        <Link to={`/works/${work.id}`}>
          <img src={require('../images/works/'+work.imgurl+'.png').default} alt={work.id}/>
          <div className="info">
            <div className="line line1">{work.name}</div>
            <div className="line line2">{work.photoNum} photos</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
