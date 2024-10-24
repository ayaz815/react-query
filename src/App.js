import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomePage } from "./components/Home";
import { RQSuperHeroesPage } from "./components/RQSuperHeroesPage";
import { SuperHeroesPage } from "./components/SuperHeroesPage";
import { RQSuperHeroPage } from "./components/RQSuperHeroPage";
import { ParallelQueriesPage } from "./components/ParallelQueriesPage";
import { DynamicParallelPage } from "./components/DynamicParallelPage";
import { DependentQueries } from "./components/DependentQueries";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-dependent"
              element={<DependentQueries email="hmayaz528@gmail.com" />}
            />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route path="/super-heroes/:heroId" element={<RQSuperHeroPage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
