// import ProductsPage from './products';
// export default ProductsPage;

// alternatively:
// export { default } from './products';

import Page from '../components/Page';

export default function IndexPage() {
  return (
    <Page cool="Heck ya!">
      <p>Hello</p>
    </Page>
  );
}
