import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./Card/Card";
import MobileCard from "./MobileCard";
import { getProduct } from "../redux/appReducer/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "./LoadingIndicator";
const ProductList = () => {
  //   const { todos, loading, error } = useSelector((store) => {

  //     return {
  //         todos: store.appReducer.todos,
  //         loading: store.loading,
  //         error: store.error,
  //     }
  // }, shallowEqual)

  const { loading, featuredCollectionData, error } = useSelector((store) => {
    return {
      featuredCollectionData: store.appReducer.product,
      loading: store.appReducer.loading,
      error: store.appReducer.error,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("getting");
    // if (featuredCollectionData.length === 0) {
    dispatch(getProduct());
    console.log(loading);

    // }
  }, []);
  return (
    <Box w="100%">
      {/* {!loading && (
       <LoadingIndicator  topMargin={10}/>
      )} */}
      {/* MOBILE SCREEN */}
      {loading ? (
        <LoadingIndicator topMargin={10}/>
      ) : (
        featuredCollectionData.map((el) => (
          <MobileCard key={el.id} items={el} />
        ))
      )}

      {/* MEDIUM TO LARGE SCREEN */}
      <Card />
    </Box>
  );
};

export default ProductList;
