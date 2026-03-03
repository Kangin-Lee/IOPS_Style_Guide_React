import axios from "axios";

export async function fetchUsers() {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (e) {
    throw new Error("데이터 가져오기 실패", e);
  }
}