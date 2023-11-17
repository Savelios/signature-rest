import axios from "axios";
import CategoryData from "../dto/data/category-data";
import { ApiService } from "./ApiService";

const MENU_CATEGORY_CONTROLLER_NAME = "menu_categories";

export class CategoryService extends ApiService<CategoryData> {
  constructor() {
    super(MENU_CATEGORY_CONTROLLER_NAME);
  }

  async getAllCategories() {
    try {
      const response = await axios.get(`${MENU_CATEGORY_CONTROLLER_NAME}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
