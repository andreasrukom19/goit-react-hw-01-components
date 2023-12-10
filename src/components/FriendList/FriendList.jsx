import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />
      })}
    </ul>
  )
}
export { FriendList };