import axios from "axios";

const baseURL = "https://codingtest.op.gg/api";

export function getSummoner(name) {
  return axios.get(`${baseURL}/summoner/${name}`);
}

export function getMostInfo(name) {
  return axios.get(`${baseURL}/summoner/${name}/mostInfo`);
}

export function getMatches(name) {
  return axios.get(`${baseURL}/summoner/${name}/matches`);
}

export function getMatchDetail(name, gameId) {
  return axios.get(`${baseURL}/summoner/${name}/matchDetail/${gameId}`);
}
