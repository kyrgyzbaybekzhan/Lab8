import './CSS/Header.css';

let Header = () => {
    return (
        <header>
            <div className='name'>Bekzhan <span>Kyrgyzbai</span></div>
            <hr/>
            <div className='nav'>
                <div className='btns b1'>Home</div>
                <div className='btns b2'>Services</div>
                <div className='btns b3'>Resources</div>
                <div className='btns b4'>Partners</div>
                <div className='btns b5'>About</div>
                <div className='btns b6'>Contacts</div>
            </div>
        </header>
    );
};

export default Header;