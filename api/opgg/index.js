import axios from "axios";

const api = axios.create({
  baseURL: "https://codingtest.op.gg/api",
  // params: {
  //   hl: 'en'
  // }
});

export function getSummoner(name, locale) {
  return api.get(`/summoner/${encodeURI(name)}?hl=${locale}`);
}

export function getMostInfo(name, locale) {
  return api.get(`/summoner/${encodeURI(name)}/mostInfo?hl=${locale}`);
}

export function getMatches(name, locale) {
  return api.get(`/summoner/${encodeURI(name)}/matches?hl=${locale}`);
}

export function getMatchDetail(name, gameId, locale) {
  return api.get(
    `/summoner/${encodeURI(name)}/matchDetail/${gameId}?hl=${locale}`,
  );
}
