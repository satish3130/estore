import useSessionstorage from "@rooks/use-sessionstorage";

//internal import
import Layout from "@layout/Layout";
import Banner from "@component/banner/Banner";
import CardTwo from "@component/cta-card/CardTwo";
import OfferCard from "@component/offer/OfferCard";
import StickyCart from "@component/cart/StickyCart";
import FeatureCard from "@component/feature-card/FeatureCard";
// import ProductServices from "@services/ProductServices";
import ProductCard from "@component/product/ProductCard";
import MainCarousel from "@component/carousel/MainCarousel";
import FeatureCategory from "@component/category/FeatureCategory";
import "../services/storeapi";

const Home = ({ popularProducts, newproducts }) => {
  // const [value, set] = useSessionstorage("products", products);

  return (
    <>
      <Layout>
        <div className="min-h-screen">
          <StickyCart />
          <div className="bg-white">
            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                  <MainCarousel />
                </div>
                <div className="w-full hidden lg:flex">
                  <OfferCard />
                </div>
              </div>
              <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
                <Banner />
              </div>
            </div>
          </div>
          <br />
          <div>
            <FeatureCard />
          </div>
          {/* feature category's */}
          <div className="bg-gray-100 lg:py-16 py-10">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    Featured Categories
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    Choose your necessary products from this feature categories.
                  </p>
                </div>
              </div>
              <FeatureCategory />
            </div>
          </div>

          {/* popular products */}
          <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-2 md:gap-3 lg:gap-3">
                  {popularProducts &&
                    popularProducts
                      ?.slice(0, 18)
                      .map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                </div>
              </div>
            </div>
          </div>

          {/* promotional banner card */}
          <div className="block mx-auto max-w-screen-2xl">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
              <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
                <CardTwo />
              </div>
            </div>
          </div>

          {/* discounted products */}
          <div
            id="discount"
            className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
          >
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                  New arrival Products
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See Our latest discounted products below. Choose your daily
                  needs from here and get a special discount with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {newproducts &&
                    newproducts
                      ?.slice(0, 18)
                      .map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const products = await ProductServices.getShowingProducts();

//   return {
//     props: {
//       products,
//     },
//   };
// };
export async function getStaticProps() {
  var id = process.env.NEXT_PUBLIC_STORE_ID;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/products/best_selling_product_without_token/${id}/12/${id}`
  );
  const popularProducts = await res.json();
  const newarrivals = await fetch(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/offer_product/${id}/12`
  );
  const newproducts = await newarrivals.json();

  return {
    props: {
      popularProducts: popularProducts?.data,
      newproducts: newproducts?.data,
    },
    revalidate: 1,
  };
}
export default Home;
