import {
  fetchAllNotificationAll,
  fetchAllNotificationAllSuccess,
  fetchAllNotificationAllFailure,
  deleteNotification,
  deleteNotificationSuccess,
  deleteNotificationFailure,
  fetchPendingNotification,
  fetchPendingNotificationSuccess,
  fetchPendingNotificationFailure,
} from '../redux/actions/notificationAction';
import {rest} from './REST';

const serviceGetAllNotification = payload => {
  const {userId, page, row} = payload;
  return dispatch => {
    dispatch(fetchAllNotificationAll());
    rest
      .get(
        `api/UserInbox?userId=${userId}&page=${page}&row=${row}&category=all`,
      )
      .then(res => {
        dispatch(fetchAllNotificationAllSuccess(res));
      })
      .catch(error => {
        dispatch(fetchAllNotificationAllFailure(error));
      });
  };
};

const serviceGetPaymentNotification = payload => {
  const {userId, page, row} = payload;
  return dispatch => {
    dispatch(fetchPendingNotification());
    rest
      .get(
        `api/UserInbox?userId=${userId}&page=${page}&row=${row}&category=payment`,
      )
      .then(res => {
        dispatch(fetchPendingNotificationSuccess(res));
      })
      .catch(error => {
        dispatch(fetchPendingNotificationFailure(error));
      });
  };
};

const serviceDeleteNotification = id => {
  return dispatch => {
    dispatch(deleteNotification(id));
    rest
      .delete(`api/UserInbox?userInboxId=${id}`)
      .then(res => {
        dispatch(deleteNotificationSuccess(res));
      })
      .catch(error => {
        dispatch(deleteNotificationFailure(error));
      });
  };
};

export {
  serviceGetAllNotification,
  serviceGetPaymentNotification,
  serviceDeleteNotification,
};
