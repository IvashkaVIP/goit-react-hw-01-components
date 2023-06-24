import Profile from 'components/profile';
import Statistic from 'components/statistic';
import FriendList from 'components/friendList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistic title="Upload stats" stats={data} />
      {/* <Statistic stats={data} /> */}
      
      <FriendList friends={friends} />; 
    </>
  );
};

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };