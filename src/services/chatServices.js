import { useFormatter } from "../utils/Formatter"
import I18n from "../local/I18n";
import { getData, postData } from "./REST";

export const useChatServices = props => {
  const { formatCurrency } = useFormatter()

  const systemMessageTag = "[*SYSTEM MESSAGE*]"

  const isSystemMessage = message => !!message?.startsWith(systemMessageTag)

  const renderMessage = input => {
    if (isSystemMessage(input)) {
      let json = input.substring(18)
      try {
        let body = JSON.parse(json)
        switch (body.type) {
          case "PAYMENT_REQUEST":
            return `${I18n.t('chat.system_doctor_has_requested_1')}${formatCurrency(body.amount, body.currencySymbol)}${I18n.t('chat.system_doctor_has_requested_2')}`
          default:
            return json
        }
      } catch {
        return json
      }
    } else {
      return input
    }
  }

  return {
    systemMessageTag,
    isSystemMessage,
    renderMessage
  }
}

export const getChannelsByDoctorId = async doctorId => {
  let url = `/api/Chat/channelList/patient?doctorId=${doctorId}`;
  let response = await getData(url);
  return response.payload; 
}

export const getChannels = async (searchQuery, token) => {
  let url = `/api/Chat/channelList/patient?searchQuery=${searchQuery}&nextToken=${token || ''}`;
  let response = await getData(url);
  return response.payload; 
}

export const getPrebookingDetails = async doctorId => {
  let url = `/api/Chat/prebooking?doctorId=${doctorId}`;
  let response = await getData(url);
  return response.payload; 
}

export const createNewBooking = async input => {
  let url = '/api/Chat/newBooking'
  let response = await postData(url, input)
  return response
}

export const validateVoucher = async input => {
  let url = '/api/Chat/voucher/validate'
  let response = await postData(url, input)
  return response
}

export const getChannelByDoctorId = async (doctorId) => {
  let url = `/api/chat/channelSearch/${doctorId}`;
  let response = await getData(url);
  return response.payload; 
}

