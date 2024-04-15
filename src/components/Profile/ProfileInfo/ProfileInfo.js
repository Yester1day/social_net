import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src='https://avatars.mds.yandex.net/get-kinopoisk-post-img/1374145/245e9eaedc3ce28a4be97be3a36e05e9/960x540'/>
            </div>
            <div className={s.description}>ava+description</div>


        </div>
    )
}

export default ProfileInfo;