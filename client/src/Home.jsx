
import Navbar from "./components/nav"
import Gallery from "./components/Gallery"
import { useStyle } from "./contexts/StyleContext"

export default function Home() {
  const { currentStyle, styles } = useStyle();
  const style = styles[currentStyle];

  return (
    <div className={`min-h-screen ${style.background}`}>
      <Navbar position="top" />
      <div className="pt-8 pb-8">
        <Gallery header="Recent Work" type="project" detail="false" />
        <Gallery header="Job History" type="job" detail="false" />
      </div>
      {/* Optional: Bottom nav example */}
      {/* <Navbar position="bottom" /> */}
    </div>
  )
}