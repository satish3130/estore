import "@styles/custom.css";
import { CartProvider } from "react-use-cart";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { Provider } from "react-redux";

//internal import
import store from "src/storage/redux/reducers/store";
import { UserProvider } from "@context/UserContext";
import DefaultSeo from "@component/common/DefaultSeo";
import { SidebarProvider } from "@context/SidebarContext";
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || null);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <UserProvider>
          <SidebarProvider>
            {/* <Elements stripe={stripePromise}> */}
            <CartProvider>
              <DefaultSeo />
              <Component {...pageProps} />
            </CartProvider>
            {/* </Elements> */}
          </SidebarProvider>
        </UserProvider>
      </Provider>
    </>
  );
}

export default MyApp;
