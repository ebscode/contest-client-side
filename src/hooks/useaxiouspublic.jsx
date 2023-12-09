// import axios from "axios";

import axios from "axios";

// const axiouspublic=axios.create(({
//     baseURL:'https://contest-server-side.vercel.app'
// }))

// const useaxiospublic = () => {
//     return axiouspublic
// };

// export default useaxiospublic;

const axiouspublic = axios.create({
  baseURL: "https://contest-server-side.vercel.app",
});

const useaxiouspublic = () => {
  return axiouspublic;
};

export default useaxiouspublic;
