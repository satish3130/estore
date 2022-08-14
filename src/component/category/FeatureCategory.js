import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
  IoRemoveSharp,
} from "react-icons/io5";
import { useRouter } from "next/router";
import { IoChevronForwardSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
//internal import
// import useAsync from '@hooks/useAsync';
// import CategoryServices from '@services/CategoryServices';
import { Featuredcategoryapi } from "../../services/storeapi";
import { SetPopularcategory } from "../../../src/storage/redux/actions/detailActions";
import {
  productsBycategory,
  Subcategory,
} from "../../services/CategoryServices";

const FeatureCategory = () => {
  const shopper_id = process.env.NEXT_PUBLIC_STORE_ID;
  const [show, setShow] = useState(false);
  // const showCategory = () => setShow(!show);
  const Router = useRouter();
  const dispatch = useDispatch();
  // const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  const [test, setTest] = useState();
  const [subid, setSubid] = useState();
  const [subdata, setSubdata] = useState([]);

  const categories = useSelector((state) => state.popularcategory.popular);
  const data = categories;

  const showCategory = () => {
    setShow(!show);
    subchildren();
  };

  useEffect(() => {
    Featuredcategoryapi().then((res) =>
      dispatch(SetPopularcategory(res.data.data))
    );
  }, []);
  //  const handlechange=(e)=>{
  // setTest(e.target.value)
  // console.log(e.target.id)
  //  }
  // console.log(data)

  const subchildren = async () => {
    try {
      const data = await Subcategory(shopper_id, test);
      console.log(data);
      setSubdata(data);
    } catch (err) {
      console.log("error", err);
    }
  };
  // console.log(subdata);

  async function handleChange(e) {
    setTest(e.target.id);

    // const details = {
    //   shopper_id: shopper_id,
    //   category_id: test,
    // };
    // const data = await productsBycategory({
    //   shopper_id: details.shopper_id,
    //   category_id: details.category_id,
    // });
    // console.log(data);

    // setSubid(e.target.id)
    // Router.push({
    //   pathname:"/search1",
    //   query:{
    //     test
    //   }
    // })
  }
  async function handleSubChange(e) {
    setSubid(e.target.id);
    Router.push({
      pathname: "/search",
      query: {
        test: 6,
        subid: 8,
      },
    });
  }

  console.log(test);
  console.log(subid);
  return !data ? (
    <></>
  ) : (
    <>
      {/* {error ? (
        <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
          <span> {error}</span>
        </p>
      ) : ( */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {data &&
          data.map((category, i) => (
            <li className="group" key={i + 1}>
              <div
                name="test"
                id={category.id}
                //  onClick={handlechange}
                className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-5 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg  "
              >
                <div onClick={handleChange} className="flex items-center">
                  <div className="">
                    <Image
                      src={
                        category.file == null ? "/assets.png" : category.file
                      }
                      // src={category.files}
                      id={category.id}
                      alt={category.category}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="pl-0  inline-flex ">
                    <h3
                      onClick={handleChange}
                      id={category.id}
                      className="text-sm font-serif  leading-tight line-clamp-1 group-hover:text-emerald-500 "
                    >
                      {category.name}
                    </h3>
                    <ul className="pt-2 mt-1">
                      {/* {category.products?.slice(0, 3).map((products) => ( */}
                      {/* console.log(products), */}
                      {/* <li key={products} className="pt-1"> */}
                      {/* <Link
                            href={`/search?category=${products
                              .toLowerCase()
                              .replace('&', '')
                              .split(' ')
                              .join('-')}`}
                          > */}
                      {/* <a onClick={showCategory} className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"> */}

                      <div onClick={showCategory}>
                        <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                          {test == category.id ? (
                            <IoChevronDownOutline />
                          ) : (
                            <IoChevronForwardOutline />
                          )}
                        </span>
                      </div>
                      {test == category.id ? (
                        <ul className=" pb-1 pt-1 -mt-1">
                          {subdata.data &&
                            subdata.data.map((subcat) => (
                              <li key={subcat}>
                                <a
                                  // onClick={() => subchildren}
                                  className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer "
                                >
                                  <Image
                                    src={
                                      subcat.file == null
                                        ? "/assets.png"
                                        : subcat.file
                                    }
                                    // src={category.files}
                                    id={subcat.id}
                                    alt={subcat.parent}
                                    width={100}
                                    height={100}
                                  />
                                  {/* <span className="text-xs text-gray-500 pr-1 ">
                  <IoRemoveSharp />
                </span>  */}
                                  {/* <Link href="/search1"> */}
                                  <div
                                    name="subid"
                                    id={subcat.id}
                                    onClick={handleSubChange}
                                    className="text-sm text-gray-500 py-1 px-3"
                                  >
                                    {subcat.name}
                                  </div>
                                  {/* </Link> */}
                                </a>
                              </li>
                            ))}
                        </ul>
                      ) : null}
                      {/* </span> */}
                      {/* {categories.products} */}
                      {/* </a> */}
                      {/* </Link> */}
                      {/* </li> */}
                      {/* ))} */}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      {/* )} */}
    </>
  );
};

export default FeatureCategory;
