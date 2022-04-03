import './CSS/Main.css';
import man from './../images/man.jpg';

let Main = () => {
    return (
        <main>
            <img src={man} className='photo'/>
            <p className='txt'><b>Qualified</b><br/>legal advice</p>
        </main>
    );
};

export default Main;