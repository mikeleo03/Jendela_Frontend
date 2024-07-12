import axios from "axios";

import { CoursesResponse } from "@/types";
import { API_URL_LOCAL } from "@/constant";

class CourseApi {
    private static axios = axios.create({
        baseURL: import.meta.env.VITE_API_URL + "/course" || API_URL_LOCAL + "/course",
        headers: {
            "Content-Type": "application/json",
        },
    });

    static async getAll(token: string): Promise<CoursesResponse> {
        try {
            const response = await this.axios.get<CoursesResponse>(`/list`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getLocation(token: string): Promise<SelfResponse> {
        try {
            const response = await this.axios.get<SelfResponse>(`/location`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default CourseApi;