import {
  fetchPrescription,
  fetchPrescriptionSuccess,
  fetchPrescriptionFailure,
  fetchPrescriptionDetail,
  fetchPrescriptionDetailSuccess,
  fetchPrescriptionDetailFailure,
} from '../redux/actions/presciptionActions';
import {getData, rest} from './REST';

const serviceGetPrescription = patiendId => {
  return dispatch => {
    dispatch(fetchPrescription());
    rest
      .get(`api/prescription/patient/${patiendId}`)
      .then(res => {
        dispatch(fetchPrescriptionSuccess(res));
      })
      .catch(error => {
        dispatch(fetchPrescriptionFailure(error));
      });
  };
};

const serviceGetDetailPrescription = (patiendId, refillHeaderId) => {
  let url = `api/prescription/patient/${patiendId}/${refillHeaderId}`
  //__DEV__ && console.log('url', url);
  return dispatch => {
    dispatch(fetchPrescriptionDetail());
    rest
      .get(url)
      .then(res => {
        dispatch(fetchPrescriptionDetailSuccess(res));
      })
      .catch(error => {
        dispatch(fetchPrescriptionDetailFailure(error));
      });
  };
};

export {serviceGetPrescription, serviceGetDetailPrescription};
