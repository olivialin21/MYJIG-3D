import Navbar from "../components/Navbar"
import Header from "../components/Header"
import BG from "../components/BG"
import WorkAlbum from "../components/WorkAlbum"
import Footer from "../components/Footer"
import works from "../json/works.json";

function Work({ match }) {
  const work = works.find(
    (x) => x.id === match.params.workId
  );
  return (
    <>
      <Navbar />
      <Header />
      <BG />
      <WorkAlbum work={work}/>
      <Footer />
    </>
  );
}

export default Work;