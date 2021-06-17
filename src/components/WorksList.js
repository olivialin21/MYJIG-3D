import WorksItem from "./WorksItem";
import works from "../json/works.json";

export default function WorksList() {
  return (
    <div className="">
      {works.map( work => (
        <WorksItem work={work}/>
      ))}
    </div>
  );
}

