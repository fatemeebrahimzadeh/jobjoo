import classes from './avatar.module.scss'
import avatarIc from '../../assets/icons/ic-avatar.png'
const Avatar =()=>{
    return(
        <div className={classes.avatarCart}>
                <div className={classes.avatarCart__avatar}>
                    <img src={avatarIc}/>
                </div>
                <div className={classes.avatarCart__name}>نرگس غریبی</div>
        </div>
    )
}
export default Avatar