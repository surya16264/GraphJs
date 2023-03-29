import {
  BrowserRouter as ReactRouter,
  Routes,
  Route,
} from "react-router-dom";
import Graph from  './component/Graph';
import LineChart from "./component/Graph/LineChart";
import BarChart from "./component/Graph/BarChart";

function App() {
  return (
    <div className="App">
     <ReactRouter>
            <Routes>
                <Route path="/" element={<Graph />} />
                <Route path="/line_chart" element={<LineChart />} />
                <Route path="/bar_chart" element={<BarChart />} />
            </Routes>
        </ReactRouter>
    </div>
  );
}

export default App;
