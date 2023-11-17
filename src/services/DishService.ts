import axios from "axios";
import DishData from "../dto/data/dish-data";
import { ApiService } from "./ApiService";

// const MENU_ITEMS_CONTROLLER_NAME = "http://167.172.181.127:8000/api/v1/menu_items";

const CUSTOM_MOCK = "http://localhost:8080/category/";

export class DishService extends ApiService<DishData> {
  constructor() {
    super(CUSTOM_MOCK);
  }

  async getByCategory(categoryId: number) {
    try {
      const response = await axios.get(
        `${CUSTOM_MOCK}${categoryId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // async getByCategory(categoryId: number) {
  //   try {
  //     const response = await axios.get(`${CUSTOM_MOCK}/${categoryId}`);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // protected override getClient(): Axios {
  //   const client = super.getClient();
  //   return client;
  // }
}
