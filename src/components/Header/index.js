import { connect } from 'react-redux';

import { headerItemClick } from '../../actions';
import Header from './Header';

const mapStateToProps = (state) => {
    return { header: state.header };
};
export default connect(mapStateToProps, { headerItemClick })(Header);