import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <div className='header-logo'>
                        <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg' />
                    </div>
                    <button
                        className='header-btn'
                        onClick={() => this.handleClickLesson()}>
                        Create Todo
                    </button>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default Header;
