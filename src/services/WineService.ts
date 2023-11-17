import { ApiService } from './ApiService';
import WineData from '../dto/data/wine-data';
import { Axios } from 'axios';

const GALLERY_ITEMS_CONTROLLER_NAME = "gallery_items";

export class WineService extends ApiService<WineData> {
    
    constructor() {
        super(GALLERY_ITEMS_CONTROLLER_NAME)
    }

    protected override getClient(): Axios {
        const client = super.getClient()
        console.log("Wine client ", client)
        // client.defaults.params = {}
        // client.defaults.params['gallery'] = 3
        console.log("Wine client after modify", client)
        return client
    }

}