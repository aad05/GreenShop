import heart from '../assets/icons/heart.svg';
import product from '../assets/icons/product.svg';
import user from '../assets/icons/user.svg';
import location from '../assets/icons/location.svg';
import Generic from '../pages/Generic';
import AcountDetails from '../components/Profile/AcountDetails';
import { AddressPage } from '../components/Profile/AddressPage';
import { WishListPage } from '../components/Profile/WishListPage';

export const dashboardData = [
  {
    id: 1,
    title: 'Account Details',
    pathname: 'profile/account_details',
    Component: AcountDetails,
    icon: user,
  },
  {
    id: 2,
    title: 'My Products',
    pathname: 'profile/my_products',
    Component: Generic,
    icon: product,
  },
  {
    id: 3,
    title: 'Address',
    pathname: 'profile/address',
    Component: AddressPage,
    icon: location,
  },
  {
    id: 4,
    title: 'Wishlist',
    pathname: 'profile/wishlist',
    Component: WishListPage,
    icon: heart,
  },
];
