import config from "../config.json";
import http from "./httpServices";
// import jwtDecode from "jwt-decode";
const apiEndpoint = config.apiEndpoint.search;

export async function search(searchedItem) {
  return await http.get("http://libsoft.io/api/codes/search?q=" + searchedItem);
}

export default {
  search
};
