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
      request.headers['Authorization'] = `Bearer CfDJ8DvH1L4gNHhNotlUl88lL7O9QSZ8Y1x4eNkn6T6xWDpaaRb-2JkNgQkrIZqNgHLMlqMQyUuR8pGZds-SU7ck4t6nZtV4P_FtzGCwORpQqC3WRFsSQ7VFhZYhDCRj48iAdmj2jQbrT37AWYBYpSyoEPdt2ariGUxntouqnDNo4O_afOOkAO1xm2YOMhhtOHKIvsXym4b-xztl5uQkyEI7p_Kmv5bQQvuda_bQvPrfR8TYcpCYNMTx6PZ9yjaHiUSoNSWYnSgWYZs8eqSL2FJ9aM53A5-hvkfnfN6320uQi0hfESLQ4qYRzjK2KQ2KYPrMBbxhNfvMlmjfwcoFIoOdB1vbWEYdO9o8EC_9qmjoN2g2bheGJcOSwb0W24bJSNmWqpMOYG8oRGG3zqORoKmaeDBavLHfhOEtxe9loYpVlcvB-ZKPp4HElijxJK2xsnejVnPOejjjjUHBBTjfXsm_Sej4z-XSxVm_seR32KJgF--B6moO9JjSF-fKRigRc6O7lX2UkorvLOk8MdQqsZibY6TcFETl3GpySF3dRw1kNW0NNKksJ7dJsOVWVEkBRGA9wa8MNmoE_Klk8nuABmQWv5YkJIiZYzKMZUCd1aThBv0DCiymhLOBh6J73KFggp1yE2MMKDIYEmvkj_Skm8XEYRPZEj3UUIX2v9wtAh652rH13Azi1ntyug31V_fAx5FxEUMxvUWp4Qf3phZ8FF3vPY4`;
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

