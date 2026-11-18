import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileSection from "./components/ProfileSection";
import JobBoard from "./components/JobBoard";
import { user } from "./data/data.js";

function App() {
    return (
        <div>
          <Navbar />
          <ProfileSection user={user} />
          <JobBoard />
          <Footer />
        </div>
    );
}

export default App;