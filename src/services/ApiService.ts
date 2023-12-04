
// const API_BASE_URL: string = "http://167.172.181.127:8000/api/v1/";

import { Axios } from "axios";

//Mock URL
const API_BASE_URL: string = "http://localhost:8080/api/";

// const API_BASE_URL: string = "http://89.147.109.197:8080/";

// Другие настройки и маршруты вашего сервера

// const CUSTOMER_CONTROLLER_NAME = "customer";
// const GALLERIES_CONTROLLER_NAME = "galleries";
// const MENU_CATEGORIES_CONTROLLER_NAME = "menu_categories";
// const MENU_ITEMS_CONTROLLER_NAME = "menu_items";

export abstract class ApiService<T> {
  private baseUrl: string;

  private client: Axios;

  constructor(domainName: string) {
    // console.log("AXIOS Default Client log", this);
    const defaultClient = this.defaultWebClient();

    defaultClient.defaults.baseURL = API_BASE_URL + domainName;

    this.client = defaultClient;

    this.baseUrl = `${API_BASE_URL}${domainName}`;
  }

  // private token(): string {
  //   return localStorage.getItem("token")?.toString() ?? "";
  // }

  private defaultWebClient(): Axios {
    const client = new Axios({
      baseURL: API_BASE_URL,
    });

    // console.log("Axios new instance", client);

    return client;
  }

  protected getClient(): Axios {
    return this.client;
  }

  // public async getAll(): Promise<T[]> {
  //   return this.getClient()
  //     .get("")
  //     .then((response) => {
  //       console.log("Result of request is ", response);
  //       if (response.status === 200) {
  //         try {
  //           const data = JSON.parse(response.data);
  //           console.log("Result of data is ", data);
  //           const results = data.results;
  //           console.log("Result of results is ", results);
  //           const pictures = results as T[];
  //           console.log("Result of pictures is ", pictures);
  //           return pictures;
  //         } catch (error) {
  //           console.error("Error parsing JSON:", error);
  //           throw new Error("Failed to parse JSON response");
  //         }
  //       }
  //       throw new Error("Failed to fetch pictures");
  //     });
  // }

  // Mock запрос
  public async getAll(): Promise<T[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error("Сервер вернул ошибку " + response.status);
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        return data as T[];
      } else {
        console.error("Error: Response data is not an array");
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data");
    }
  }
}
