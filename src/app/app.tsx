import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Nav from "components/organisms/nav";
import QueueComponent from "components/organisms/queue";
import RegistrationForm from "components/organisms/registrationForm";
import Skeleton from "components/organisms/skeleton";

const App = (): JSX.Element => {
  return (
    <Router>
      <main className={styles.main}>
        <Nav />
        <main className={styles.main2}>
          <Routes>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/" element={<QueueComponent />} />
          </Routes>
        </main>
      </main>
    </Router>
  );
};

export default App;
