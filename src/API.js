const API_URL = "http://localhost:3000/api/v1/profiles";

export function getAll() {
  return fetch(API_URL)
    .then(res => res.json());
}

export function getOne(id) {
  return fetch(`${API_URL}/${id}`) 
    .then(res => res.json())
}