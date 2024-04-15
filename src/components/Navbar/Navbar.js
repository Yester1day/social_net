import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"> Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'> Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'> News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends'>Friends</NavLink>
                <div className={s.friendsNavbar}>
                    <div className={s.friends}>
                        <img className={s.imgFriends}
                             src={'https://avatars.mds.yandex.net/i?id=4a7f7d1c3430b6b6dc8034d60240d300f1467ce2-12478411-images-thumbs&n=13'}/>
                        <span className={s.friendsName}>Dima</span>
                    </div>
                    <div className={s.friends}>
                        <img className={s.imgFriends}
                             src={'https://avatars.mds.yandex.net/i?id=513ca473c1441b9cb6a14f6a9a46c4f1301d77d5-4570314-images-thumbs&n=13'}/>
                        <span className={s.friendsName}>Rengoku</span>
                    </div>
                    <div className={s.friends}>
                        <img className={s.imgFriends}
                             src={'https://avatars.mds.yandex.net/i?id=756770ccbd1cb9d53311d9dda780c6f3354f8b4e-10071482-images-thumbs&n=13'}/>
                        <span className={s.friendsName}>Nezuka</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;