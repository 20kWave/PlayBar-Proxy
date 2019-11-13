import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

let baseURL = 'http://localhost:3000';

export let getErrorRate = new Rate('Get errors');

export let options = {
  vus: 100,
  rps: 1100,
  duration: '5m'
};

export default function() {
  let songId = Math.floor(Math.random() * (10000000 - 9999000 + 1)) + 9999000;
  //Math.floor(Math.random() * 10000000) + 1;

  let getSongUrl = `${baseURL}/playbar/song?songId=${songId}`;

  let res = http.get(getSongUrl);
  check(res, {
    'status was 200': res => res.status == 200,
    'has results': res => res.body.length > 1
  }) || getErrorRate.add(1);
}
