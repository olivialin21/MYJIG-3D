import WorksItem from "./WorksItem";
import works from "../json/works.json";

export default function WorksList() {
  return (
    <div className="worksList mt75">
      <p className="worksList-title">Works</p>
      <div className="container-fluid row worksList-list">
        {works.map( work => (
          <WorksItem work={work}/>
        ))}
      </div>
    </div>
  );
}

