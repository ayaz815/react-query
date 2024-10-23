import axios from "axios";
import { useQueries, useQuery } from "react-query";

const fetchUserEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByCHannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUserEmail(email));
  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCoursesByCHannelId(channelId), {
    enabled: !!channelId,
  });
  return <div>Dependent Queries</div>;
};
