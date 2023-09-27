// import { useQuery } from "@tanstack/react-query";
// import apiClient from "../services/api-client";

// interface FetchResponse<T> {
//     count: number,
//     results: T[] 
// }

// const useData = (queryKey: string) => useQuery({
//     queryKey: [{queryKey}],
//     queryFn: () => 
//         apiClient.get<FetchResponse<any>>('/platforms/lists/parents')
//         .then(res => res.data),
//     staleTime: 24 * 60 * 60 * 1000 * 10, //10 days
//     initialData: { count: queryKey.length, results: queryKey }
// })

// export default useData;