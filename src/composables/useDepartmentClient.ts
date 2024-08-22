// Import kiểu dữ liệu DepartmentDto từ module '~/apis/Api'.
// Đây là kiểu dữ liệu định nghĩa cấu trúc của Department.

// Import lớp Api từ module '~/apis/Api'.
// Lớp Api có thể chứa các phương thức để thực hiện các yêu cầu HTTP.
import { Api } from '~/apis/Api';

// Hàm `useDepartmentClient` tạo và cấu hình một client API để gửi yêu cầu đến server.
import qs from 'qs';
export default function useDepartmentClient() {
  const client = new Api();
  client.instance.defaults.baseURL = 'https://localhost:44312';
  client.instance.defaults.paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: 'repeat' });

  client.instance.interceptors.request.use(
    (request: any) => {
      request.headers['Authorization'] = `Bearer CfDJ8DvH1L4gNHhNotlUl88lL7MR5KYP_rJfkGy_ft6t8Z3KG01NKfGqMlp6yMSumGmg2-VIRHNQMd8Ev7cscsjnJ_x0KKNMt_3D9KpbU49P65leBItp1Gr8H1_tMMygdHfaZRDLkGIo2Se_aw-4gWQNU7WYVGynPgtN0shtMkbCx7Nr2QHrAq275O1Uk8FjpQmVVDXLulcRMp5SJTds7Twj5hSPIbP5PcNoC4YRoLFgjFD789BG4xK7PCd6-o51d05xOZaw36j4klMJ_xx_ogMkG9yZraBeBCHpFv8b56tLSrXsDd6e1woR95pKfglk_ndJiux8cSWHTuxUYsHlhrzZ8COPaR3qUxpa08qzEVgcQtvzc0LaAVxzxQcGroJn3Riz96RSd55M4eNwXx0xFG4OkPm9nt8712QK3u46SEYjTUeOeqMJ_1TxzdBzQRgiqUw0GZblQpdInKs_tIvzp74nQukcffn3zb0D2cFlcRTE8rEeJe7Aj93e_KtAV-HEp40JfdjB_1VCjD0uuWnLywEUnhu3Ch8ebmeYwt_rpdk2Z8rhGJQKCDJxk_vQqYTrI9urxU4a2ChpsNaHgAu3imR6_7W2WFY_OVyKwa8iC1dAHlocB8auyEe8mocPSAMuGXeLv-44fiNnPIIaUCWmldpuuwFlCCQhXuQCs9IoA8tqX6CMz6AJ3KzCamXI8SOTkTxRLz_00g6aeBWieasntjsfe1k`;
      return request;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  client.instance.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  return client;
}

