import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
//import ScrollableFeed from "react-scrollable-feed";
//import {
 // isLastMessage,
 // isSameSender,
 // isSameSenderMargin,
 // isSameUser,
//} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <div></div>
  );
};

export default ScrollableChat;
