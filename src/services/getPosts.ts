import axios, {AxiosResponse} from "axios";

const getPost = (): Promise<AxiosResponse> => axios.get('https://jsonplaceholder.typicode.com/posts');

export default getPost;