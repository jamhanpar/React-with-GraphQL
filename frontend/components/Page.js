import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ cool, children }) {
  return (
    <div>
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <InnerStyles>{cool}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
