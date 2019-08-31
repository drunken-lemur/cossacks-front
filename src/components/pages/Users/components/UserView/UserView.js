import React from 'react';
import {Loader} from 'molecules';
import PropTypes from 'prop-types';
import {UsersStore} from 'stores';
import styled from 'styled-components';
import {getParams, history} from 'utils';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';
import {Button as Button_, PageHeader} from 'antd';

import {UserCard} from './components';

const Button = styled(Button_).attrs({type: 'primary'})``;

const Wrapper = styled.div`
  ${Button} {
    margin: 16px 0;
    
    + ${Button} {
      margin-left: 16px;
    }
  }
`;

@withRouter
@observer
class UserView extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    constructor(props) {
        super(props);

        this.usersStore = UsersStore.create();
    }

    onClose = () => {
        history.push('/users');
    };

    componentDidMount() {
        this.usersStore.get(getParams(this).id);
    }

    render() {
        const {...rest} = this.props;
        const {usersStore} = this;

        return (
            <Provider>
                <Wrapper {...rest}>
                    <PageHeader
                        onBack={history.goBack}
                        title="Users"
                        subTitle="View User"
                    />

                    <Loader store={usersStore}>
                        <UserCard {...usersStore.data}/>
                    </Loader>
                </Wrapper>
            </Provider>
        );
    }
}

export default styled(UserView)``;
