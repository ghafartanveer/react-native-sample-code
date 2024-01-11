This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

<div style="background: linear-gradient(45deg, #FF512F, #DD2476); color: white; display: inline-block; padding: 4px 8px; border-radius: 4px;">
  Redux-Toolkit
</div>
<div style="background: linear-gradient(45deg, #FF512F, #DD2476); color: white; display: inline-block; padding: 4px 8px; border-radius: 4px;">
  Redux-Persist
</div>
<div style="background: linear-gradient(45deg, #FF512F, #DD2476); color: white; display: inline-block; padding: 4px 8px; border-radius: 4px;">
  Formik
</div>
<div style="background: linear-gradient(45deg, #FF512F, #DD2476); color: white; display: inline-block; padding: 4px 8px; border-radius: 4px;">
  Axios
</div>
<div style="background: linear-gradient(45deg, #FF512F, #DD2476); color: white; display: inline-block; padding: 4px 8px; border-radius: 4px;">
  Yup
</div>

<br/>

> **Note:** Demo video available in the root folder (product-app-demo.mov)

> **Note:** Credentials to login: kminchelle (username) / 0lelplR (password)

OR

> **Note:** You can use any user's credentials from [**DummyJSON Users**](https://dummyjson.com/users)

# Running the ProductApp

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# Use Yarn
yarn i && cd ios && pod install && cd ..
# Then...
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Then either press **i** for to run _iOS_ or **a** to run _Android_.

OR

You can open a _new_ terminal from the _root_ of your React Native project. Then run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# Use Yarn
yarn android
```

### For iOS

```bash
# Use Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Details Of Covered Points In The ProductApp

## Tab based home screen (with 3 tabs):

- Home Tab

      Displays list of products with pagination and shows add-product button if user is logged in. User can also navigate to product details page by pressing on a product.

- Search Tab

      Displays list of products with pagination and user can query the products by entering text in search bar. User can also navigate to product details page by pressing on a product.

- Account Tab

      Shows user's information if user is logged in otherwise shows login form.

## Two more pages:

- Product Details Page

      The page shows thumbnail, images & other product details by receiving data passed through navigation params.

- Add Product Page

      Following fields were considered for the add-product page.

      (title, description, price, brand, category)

      All the field are validated using Formik & Yup. After adding product successfully an alert popup shows with a success message and app navigates back to the home screen. Moreover, only logged in user can see the add-product button.

# How to improve the ProductApp

- **SplashScreen & DarkMode**: A native splash screen & dark mode support will make the app really awesome.
- **React Query**: Using this lib can will make code and app performance better.
- **Localization**: Strings used in the project should be localized using react-native-localization or some other lib to support multiple languages.
- **FastImage**: App will look better with cached images.
- **Shimmer Loader**: Skeleton loading items list can be shown while app is fetching lisitng data from server.
- **More Improvements**:

  - Option to view images in fullscreen can be added with pinch-zoom functionality.
  - _Product Details_ page could use a image slider to product image more properly.
  - Option to search products by categories can be added in _Search_ screen.
  - Listing screens can show a loading view/load-more button below the list while fetching more products.
  - Loaders can be added to imporve overall app experience
  - Need to add responsive width/height so application can support multiple orientations & devices.
  - Unit tests can be added to make component and app logic more testable and error free.
  - UI of the app can be improved : )
