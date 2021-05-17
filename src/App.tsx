import React from 'react';
import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DataTable2 from "components/DataTable2";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import BarChart2 from 'components/BarChart2';
import DonutChart2 from 'components/DonutChart2';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Imigrantes no Brasil</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Imigrantes vindos para o brasil de 1870 a 1950 (em mil)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Imigrante vindos para o brasil de 1870 a 1950 {'('}em %{')'}</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Motivo</h2>
          <p>A abertura dos portos, ocorrida em 1808, possibilitou a entrada de imigrantes não portugueses ao Brasil. Neste momento, várias expedições científicas europeias visitam e divulgam a colônia portuguesa na Europa. Também se registra a instalação de profissionais liberais especialmente no Rio de Janeiro.
          Com a proibição do tráfico de escravos, em 1850, o desenvolvimento das lavouras de café e o preconceito racial induziram a entrada de imigrantes europeus no país.
          Com as guerras de unificação na Itália e na Alemanha, são trazidos pelo governo brasileiro para trabalhar nos cafezais.</p>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Imigrações registradas</h2>
        </div>
        <DataTable />
      </div>

      <div className="container">
        <h1 className="text-primary py-3">Imigrantes no Brasil atual</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Imigrantes vindos para o brasil de 2006 a 2015</h5>
            <BarChart2 />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Imigrante vindos para o brasil de 1870 a 1950 {'('}em %{')'}</h5>
            <DonutChart2 />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Motivo</h2>
          <p>Em 2015, os haitianos lideraram o ranking de chegada ao país pelo segundo ano consecutivo, de acordo com os dados da Polícia Federal. Foram 14.535 haitianos registrados pela PF. A nacionalidade é a que mais se destaca pelo crescimento nos últimos cinco anos. Em 2011, segundo a PF, apenas 481 haitianos deram entrada no país – ou seja, houve um aumento de mais de 30 vezes.
          Os bolivianos também mantiveram a posição de 2014 para 2015: o segundo lugar. Foram 8.407 registros no país no ano passado, o que representa uma queda de 32% em relação aos dados de 2011, quando 12.465 bolivianos entraram no Brasil. Em 2015, eles são seguidos pelos colombianos (7.653), argentinos (6.147), chineses (5.798), portugueses (4.861) paraguaios (4.841) e norte-americanos (4.747).</p>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Imigrações registradas</h2>
        </div>
        <DataTable2 />
      </div>
      <Footer />
    </>
  );
}

export default App;
