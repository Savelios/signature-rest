import { Axios } from "axios";
import PictureData from "../dto/data/picture-data";
import { ApiService } from "./ApiService";

// const GALLERY_ITEMS_CONTROLLER_NAME = "gallery_items";
const CUSTOM_MOCK = "pictures";

export class PictureService extends ApiService<PictureData> {
  constructor() {
    super(CUSTOM_MOCK);
  }

  protected override getClient(): Axios {
    const client = super.getClient();
    console.log("Picture client ", client);
    // client.defaults.params = {}
    // client.defaults.params['gallery'] = 1
    console.log("Picture client after modify", client);
    return client;
  }
}
