import PropTypes from 'prop-types';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => {
    return (
      <>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
      </>
    );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

