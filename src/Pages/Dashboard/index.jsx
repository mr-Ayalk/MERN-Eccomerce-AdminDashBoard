import DashboardBoxes from "../../Components/DashboardBoxes";
import superMarketImage from "../../Assets/supermarket.png";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import Badge from "../../components/Badge/Badge";
const Dashboard = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };
  return (
    <>
      <div className="w-full py-2 bg-white px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3 ">
            Good Morning, <br /> Ayalk 👋
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium nemo cum neque repellat cupiditate id.
          </p>
          <br />
          <Button className="btn-blue !capitalize">
            <FaPlus /> Add Product
          </Button>
        </div>
        <img
          src={superMarketImage}
          alt="supermarket"
          className="w-[250px]  object-cover "
        />
      </div>
      <DashboardBoxes />
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>
        {/* <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ORDER ID
                </th>
                <th scope="col" class="px-6 py-3">
                  CUSTOMER
                </th>
                <th scope="col" class="px-6 py-3">
                  ITEMS
                </th>
                <th scope="col" class="px-6 py-3">
                  PRICE
                </th>
                <th scope="col" class="px-6 py-3">
                  CREATED
                </th>
                <th scope="col" class="px-6 py-3">
                  MODIFIED
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-[500]">
                  {" "}
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] "
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct === 0 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]  " />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]  " />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4  font-[600] text-[#3872fa]">
                  3789vmrg9h#sorigvh4$%*^&#
                </td>
                <td className="px-6 py-4   font-[600] text-[#3872fa]">
                  ur-5467
                </td>
                <td className="px-6 py-4  font-[500] whitespace-nowrap">
                  Bami Love
                </td>
                <td className="px-6 py-4  font-[500]">245 535-465-45398</td>
                <td className="px-6 py-4  font-[500]">
                  <span className="block w-[200px]">
                    lorem dfosnopfvsnp slfbnsboir sapfbinofvid peroignoe
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">1234</td>

                <td className="px-6 py-4  font-[500]">Laptop</td>
                <td className="px-6 py-4  font-[500]">$2999</td>
                <td className="px-6 py-4  font-[500] userid text-primary">
                  1234
                </td>
                <td className="px-6 py-4  font-[500]">
                  <Badge status="pending" />
                </td>
                <td className="px-6 py-4  font-[500]">$2999</td>
              </tr>

              {isOpenOrderedProduct === 0 && (
                <tr>
                  <td className="pl-20 " colSpan="6">
                    <div className="relative overflow-x-auto mt-5">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product ID
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4   font-[600] text-[#3872fa]">
                              2398327
                            </td>
                            <td className="px-6 py-4  font-[500]">Laptop</td>
                            <td className="px-6 py-4  font-[500]">
                              <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww"
                                alt=""
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">Silver</td>
                            <td className="px-6 py-4  font-[500]">
                              <span className="block w-[200px]">
                                lorem dfosnopfvsnp slfbnsboir sapfbinofvid
                                peroignoe
                              </span>
                            </td>
                            <td className="px-6 py-4  font-[500]">Laptop</td>
                          </tr>{" "}
                          <tr>
                            <td className="bg-[#f1f1f1] " colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-[500]">
                  {" "}
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] "
                    onClick={() => isShowOrderedProduct(1)}
                  >
                    {isOpenOrderedProduct === 1 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]  " />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]  " />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4   font-[600] text-[#3872fa]">
                  3789vmrg9h#sorigvh4$%*^&#
                </td>
                <td className="px-6 py-4 text-[#3872fa]  font-[600]">
                  ur-5467
                </td>
                <td className="px-6 py-4  font-[500] whitespace-nowrap">
                  Bami Love
                </td>
                <td className="px-6 py-4  font-[500]">245 535-465-45398</td>
                <td className="px-6 py-4  font-[500]">
                  <span className="block w-[200px]">
                    lorem dfosnopfvsnp slfbnsboir sapfbinofvid peroignoe
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">1234</td>

                <td className="px-6 py-4  font-[500]">Laptop</td>
                <td className="px-6 py-4  font-[500]">$2999</td>
                <td className="px-6 py-4  font-[500] userid text-primary">
                  1234
                </td>
                <td className="px-6 py-4  font-[500]">
                  <Badge status="pending" />
                </td>
                <td className="px-6 py-4  font-[500]">$2999</td>
              </tr>

              {isOpenOrderedProduct === 1 && (
                <tr>
                  <td className="pl-20 " colSpan="6">
                    <div className="relative overflow-x-auto mt-5">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product ID
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4   font-[600] text-[#3872fa]">
                              2398327
                            </td>
                            <td className="px-6 py-4  font-[500]">Laptop</td>
                            <td className="px-6 py-4  font-[500]">
                              <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww"
                                alt=""
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">Silver</td>
                            <td className="px-6 py-4  font-[500]">
                              <span className="block w-[200px]">
                                lorem dfosnopfvsnp slfbnsboir sapfbinofvid
                                peroignoe
                              </span>
                            </td>
                            <td className="px-6 py-4  font-[500]">Laptop</td>
                          </tr>{" "}
                          <tr>
                            <td className="bg-[#f1f1f1] " colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
