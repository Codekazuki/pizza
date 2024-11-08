import Button from "./Button";
import "./eat&split.css";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const friends = initialFriends;

const EatAndSplit = () => {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />
      </div>
      <FormAddFriend />
      <Button>Add Friend</Button>
      <FormSplitBill />
    </div>
  );
};

export default EatAndSplit;
