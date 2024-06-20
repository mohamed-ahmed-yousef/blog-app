import "server-only";
import { getAPI } from "./api";
import { http as httpServer } from "./axios";

export const serverAPI = getAPI(httpServer);
