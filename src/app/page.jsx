import DataTableEle from "./Components/DataTable/DataTable";
import { Suspense } from 'react'
import Form from "./Components/Form/Form";


const Home = () => {
  return(
    <div>
      <h1>Client page</h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Form />
        <DataTableEle />

      </Suspense>
    </div>
  )
};

export default Home;
