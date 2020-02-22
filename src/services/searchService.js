import config from "../config.json";
import http from "axios";
// import jwtDecode from "jwt-decode";
const apiEndpoint = config.apiEndpoint.search;

export async function search(searchedItem) {
  // const percentageRemoved = searchedItem.replace(" ", "+");
  // console.log(percentageRemoved);
  return await http.get(
    "https://libsoft.io/api/codes/search?q=" + searchedItem
  );
}

export default {
  search
};
