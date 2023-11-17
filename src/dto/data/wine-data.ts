interface WineData {
    id: number;
    title: string;
    description: string;

    subname?: string;
    wineType?: string;
    strength?: number;
    volume?: number;
    region?: string;
    manufacter?: string;
    grapeType?: string;
    recomendations?: string;
    additionally?: string;
    image?: string;
}
export default WineData;
