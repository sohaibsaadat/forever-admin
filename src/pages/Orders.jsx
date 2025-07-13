import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/order/list`, {}, {
        headers: {
          token: localStorage.getItem('token')  // make sure this token is admin token
        }
      });
    console.log("🟢 API Response:", response.data); // ✅ Add this line

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-3">
          {orders.map((order, index) => (
            <li key={index} className="p-4 border rounded shadow-sm">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> ${order.amount}</p>
              <p><strong>Items:</strong> {order.items.length}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
