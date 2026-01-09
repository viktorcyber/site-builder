import axios from "@/libs/axios";
import type { Project } from "@/types";

export const getProjects = async (): Promise<Project[]> => {
  return (await axios.get("/projects"))?.data;
};
