import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <img alt='logo' className={s.img} src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1711411200&semt=ais'/>
            </div>
            <div className={s.title}>
                My social NET
            </div>
        </div>
    )}

export default Header;