import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { reset } from "redux-form";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MessageType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";
import { actions } from "./../../redux/dialogs-reducer";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = typeof mapDispatchToProps;
type PropsType = MapDispatchToPropsType & MapStateToPropsType;

const DialogsContainer: React.FC<
  PropsType & RouteComponentProps<{ userID?: string }>
> = ({ createNewChat, history, match, ...props }) => {
  let messages: Array<MessageType> = [];
  let userId = Number(match.params.userID);
  if (
    !userId &&
    props.friends.length > 0 &&
    !props.friends.some((friend) => friend.id === userId)
  ) {
    history.push("/dialogs/" + props.dialogs[0].userId);
  }
  if (!!userId && !props.dialogs.some((dialog) => dialog.userId === userId)) {
    createNewChat(userId);
  } else {
    let dialog = props.dialogs.find((dialog) => dialog.userId === userId);
    if (!!userId && !!dialog) {
      messages = dialog.messages;
    }
  }
  return <Dialogs userId={userId} messages={messages} {...props} />;
};
const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.messagesPage.dialogs,
    friends: state.usersPage.friends,
  };
};
const mapDispatchToProps = {
  sendMessage: actions.sendMessage,
  createNewChat: actions.createNewChat,
  reset,
};
export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer);
