import { BACKEND_URL } from "@/lib/constants";
import axios from "axios";

console.info(BACKEND_URL, "BACKEND_URL");

export const http = axios.create({
	baseURL: BACKEND_URL,
});
