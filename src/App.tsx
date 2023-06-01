import { Link } from "react-router-dom";
import "./App.css";
import Listing from "./pages/Listing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Link to="column-view">Column View</Link>
        <Listing />
      </div>
    </QueryClientProvider>
  );
}

export default App;
