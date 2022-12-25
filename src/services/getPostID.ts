import axios, {AxiosResponse} from "axios";

const getPostID = (id: string | undefined): Promise<AxiosResponse> => (axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`));

export default getPostID;