import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effects after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform data fetching after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // {
  //   enabled: false, // data will not be fetched on mount
  // }
  // { cacheTime: 5000 }
  // { staleTime: 30000 }
  // { refetchOnMount: true },
  // { refetchOnWindowFocus: true }, // query will be in sync with the remote data(no need to refresh the page)
  // { refetchInterval: 2000, refetchIntervalInBackground: true } // polling: data will be fetched every 2 sec

  console.log("isLoading - isFetching", isLoading, isFetching);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};
