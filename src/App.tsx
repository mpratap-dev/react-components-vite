import { useState } from "react";
import "./App.css";
import Listing from "./components/Listing";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Listing/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
