import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <h1 className="text-primary py-3">Imigrantes no Brasil</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Imigrantes vindos para o brasil de 1870 a 1950 (em mil)</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Imigrante vindos para o brasil de 1870 a 1950 {'('}em %{')'}</h5>
            <DonutChart/>
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Imigrações registradas</h2>
        </div>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
