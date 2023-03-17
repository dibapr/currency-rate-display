import DataTable from "../moleculs/DataTable";
import Loading from "../moleculs/Loading";
import { useFetch } from "../../hooks/useFetch";

const Currencies = () => {
  const { data, isLoading } = useFetch();
  return <>{isLoading ? <Loading /> : <DataTable data={data} />}</>;
};

export default Currencies;
