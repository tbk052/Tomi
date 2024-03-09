import axios from 'axios';
import {useState} from 'react';

const useUserAPI = () => {
  const [items, setItems] = useState([]); // Khai báo state

  const getUserAPI = async () => {
    try {
      const {data: responseData} = await axios.get(
        'https://4swm3xjx-3000.asse.devtunnels.ms/user',
      );
      setItems(responseData); // Cập nhật state
    } catch (error) {
      console.log(error);
    }
  };

  //   const addItem = item => {
  //     // Thêm logic xử lý cho hàm addItem
  //   };

  return {
    getUserAPI,
    // addItem,
    items, // Xuất state để sử dụng ở nơi khác
  };
};

export default useUserAPI;
