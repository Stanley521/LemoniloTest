import React from 'react';
import {Platform, View} from 'react-native';
import {StackActions} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TabBar from '../components/TabBar';
import AppointmentScreen from '../screens/Appointment/AppointmentScreen';
import BookingScreen from '../screens/Appointment/BookingScreen';
import DoctorProfileScreen from '../screens/Appointment/DoctorProfileScreen';
import FeeDetailsScreen from '../screens/Appointment/FeeDetailsScreen';
import RescheduleScreen from '../screens/Appointment/RescheduleScreen';
import TodayAppointmentScreen from '../screens/Appointment/TodayAppointmentScreen';

// import LabAssetScreen from '../screens/Laboratories/LabAssetScreen';
import LabDetailScreen from '../screens/Laboratories/LabDetailScreen';
// import LinksScreen from '../screens/LinksScreen';
import PrivacyPolicyScreen from '../screens/Profile/PrivacyPolicyScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// import VerificationScreen from '../screens/Profile/VerificationScreen';
import TermOfUseScreen from '../screens/Profile/TermOfUseScreen';

import ChatScreen from '../screens/Chat/ChatScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatsScreen from '../screens/ChatsScreen';
import DoctorScreen from '../screens/Doctor/DoctorScreen';
import AddDiagnoseScreen from '../screens/Home/AddDiagnoseScreen';
import AddLabScreen from '../screens/Home/AddLabScreen';
import HealthScreen from '../screens/Home/HealthScreen';
import HealthtipsScreen from '../screens/Home/HealthtipsScreen';
import NotificationScreen from '../screens/NewNotification/NotificationScreen';
import SearchDoctorScreen from '../screens/Home/SearchDoctorScreen';
import HomeScreen from '../screens/HomeScreen';
import PrescriptionScreen from '../screens/Medication/PrescriptionScreen';
import RefillScreen from '../screens/Medication/RefillScreen';
import ShareToChatScreen from '../screens/Medication/ShareToChatScreen';
import SymptomScreen from '../screens/Medication/SymptomScreen';
import MedicationScreen from '../screens/MedicationScreen';
import PaymentDetailsScreen from '../screens/Notification/NotificationDetails/PaymentDetailsScreen';
import PregnancyScreen from '../screens/pregnancy/';
import ChartBlood from '../screens/pregnancy/jurney/chart-blood/';
import ChartProteinuria from '../screens/pregnancy/jurney/chart-proteinuria/';
import ChartWeight from '../screens/pregnancy/jurney/chart-weight/';
import PregnancyProfileEdit from '../screens/pregnancy/jurney/modal-delivery-date/PregnancyProfileEdit';
import PregnancyQuiz from '../screens/pregnancy/tips/PregnancyQuiz';
import AboutUsScreen from '../screens/Profile/AccountSettings/AboutUsScreen';
import FaqDetailsScreen from '../screens/Profile/AccountSettings/FaqDetailsScreen';
import FrequentlyAskQuestionScreen from '../screens/Profile/AccountSettings/FrequentlyAskQuestionScreen';
import NotificationSettingsScreen from '../screens/Profile/AccountSettings/NotificationSettingsScreen';
import RecordsSettingsScreen from '../screens/Profile/AccountSettings/RecordsSettingsScreen';
import SelectDoctor from '../screens/Profile/AccountSettings/SelectDoctor';
import SendFeedbackScreen from '../screens/Profile/AccountSettings/SendFeedbackScreen';
import AccountSettingsScreen from '../screens/Profile/AccountSettingsScreen';
import ChangePasswordScreen from '../screens/Profile/ChangePasswordScreen';
import PreviewScreen from '../screens/Profile/MedicalRecords/Add/PreviewScreen';
import AddNewReportScreen from '../screens/Profile/MedicalRecords/AddNewReportScreen';
//import InvestigationScreen from '../screens/Profile/InvestigationScreen';
import MedicalRecordsScreen from '../screens/Profile/MedicalRecords/MedicalRecordsScreen';
import RecordDetailsScreen from '../screens/Profile/MedicalRecords/RecordDetailsScreen';
import RecordsScreen from '../screens/Profile/MedicalRecords/RecordsScreen';
import AllergiesSegmentHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/AllergiesSegmentHistoryScreen';
import ChiefComplaintHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/ChiefComplaintHistoryScreen';
import DiagnosesSegmentHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/DiagnosesSegmentHistoryScreen';
import FamilyHistorySegmentHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/FamilyHistorySegmentHistoryScreen';
import InvestigationSegmentHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/InvestigationSegmentHistoryScreen';
import MedicalHistorySegmentHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/MedicalHistorySegmentHistoryScreen';
import PerscriptionSegmentHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/PrescriptionSegmentHistoryScreen';
import ProgressNotesHistoryScreen from '../screens/Profile/MedicalRecords/SegmentHistory/ProgressNotesHistoryScreen';
import MyAppoinmentScreen from '../screens/Profile/MyAppoinmentScreen';
import PaymentMethodScreen from '../screens/Profile/PaymentMethodScreen';
import AddCardScreen from '../screens/Profile/PaymentOptions/AddCardScreen';
import PaymentDoku from '../screens/Profile/PaymentOptions/PaymentDoku';
import PaymentOptionsScreen from '../screens/Profile/PaymentOptionsScreen';
import MapsScreen from '../screens/Maps/MapsScreen';
import PrescriptionDetailsScreen from '../screens/PrescriptionDetails/PrescriptionDetailsScreen';
import DrugsCollectionScreen from '../screens/DrugsCollection/DrugsCollectionScreen';
import SecurityQuestionsScreen from '../screens/Profile/SecurityQuestionScreen';
import SubscriptionTermsScreen from '../screens/Profile/SubscriptionPlan/SubscriptionTermsScreen';
import SubscriptionPlanScreen from '../screens/Profile/SubscriptionPlanScreen_New';
import SubscriptionPaymentScreen from '../screens/Profile/SubscriptionPaymentScreen';
import TransactionDetailsScreen from '../screens/Profile/TransactionHistory/TransactionDetailsScreen';
import TransactionHistoryScreen from '../screens/Profile/TransactionHistorySreen';
import VisitHistoryScreen from '../screens/Profile/VisitHistoryScreen';
import DiabetesScreen from '../screens/Score/DiabetesScreen';
import HASScreen from '../screens/Score/HASScreen';
import NextScreeningScreen from '../screens/Score/NextScreeningScreen';
import VideoCallScreen from '../screens/Home/VideoCall/VideoCallScreen';
//import PrescriptionDetailsScreen from '../screens/Medication/PrescriptionDetailsScreen';
import FavoriteLocationsScreen from '../screens/Profile/EditProfile/FavoriteLocationsScreen';
import PrescriptionDeliveryScreen from '../screens/Medication/PrescriptionDeliveryScreen';
import I18n from '../local/I18n';
import ExpectedTurnaroundTimeScreen from '../screens/Medication/ExpectedTurnaroundTimeScreen';
import NewExpectedTurnaroundTimeScreen from '../screens/prescriptions/NewExpectedTurnaroundTimeScreen';
import FinishScreen from '../screens/prescriptions/Finish';
import NewPrescriptionScreen from '../screens/prescriptions/PrescriptionRefillScreen';
import OrderSummaryScreen from '../screens/prescriptions/OrderSummary';
import OrderSummaryDetailScreen from '../screens/prescriptions/OrderSummaryDetail';
import AddPrescriptionToBeRefilledScreen from '../screens/Medication/AddPrescriptionToBeRefilledScreen';
import DeclarationScreen from '../screens/Medication/DeclarationScreen';
import InputLocationScreen from '../screens/Home/InputLocationScreen';
import ChatBillingSummaryScreen from '../screens/ChatBillingSummary/ChatBillingSummary';
import GoToChatScreen from '../screens/GoToChatScreen';
import {MainNotification} from '../screens/Home/Notifications/index';
const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'white',
      },
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
});

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: 'home',
    },
    SearchDoctor: SearchDoctorScreen,
    Pregnancy: PregnancyScreen,
    PregnancyQuiz: PregnancyQuiz,
    PregnancyProfileEdit: PregnancyProfileEdit,
    Health: HealthScreen,
    Healthtips: HealthtipsScreen,
    Diagnose: AddDiagnoseScreen,
    Prescription: PrescriptionScreen,
    TodayAppointment: TodayAppointmentScreen,
    OrderSummaryDetail: {
      screen: OrderSummaryDetailScreen,
      navigationOptions: {
        gesturesEnabled: false,
        header: null, // this will hide the header
      },
    },
    Notifications: {
      screen: MainNotification,
      path: 'inbox',
      navigationOptions: {
        gesturesEnabled: false,
        header: null, // this will hide the header
      },
    },
    PrescriptionDetails: PrescriptionDetailsScreen,
    Maps: MapsScreen,
    DrugsCollection: DrugsCollectionScreen,
    PaymentDetails: PaymentDetailsScreen,
    Symptom: SymptomScreen,
    DoctorProfile: DoctorProfileScreen,
    HAS: HASScreen,
    Diabetes: DiabetesScreen,
    Appointment: AppointmentScreen,
    Booking: BookingScreen,
    NextScreening: NextScreeningScreen,
    AddLab: AddLabScreen,
    LabDetails: LabDetailScreen,
    InputLocation: InputLocationScreen,
    // LabAsset: LabAssetScreen,
    Reschedule: RescheduleScreen,
    FeeDetails: FeeDetailsScreen,
    PaymentMethod: PaymentMethodScreen,
    AddCard: AddCardScreen,
    Doku: {
      screen: PaymentDoku,
      navigationOptions: {
        gesturesEnabled: false,
        header: null, // this will hide the header
      },
    },
    ChartWeight: ChartWeight,
    ChartBlood: ChartBlood,
    ChartProteinuria: ChartProteinuria,
    ChatBillingSummary: ChatBillingSummaryScreen,
    VideoCall: {
      screen: VideoCallScreen,
      path: 'videocall/:sessionId',
    },
    GoToChat: GoToChatScreen,
  },
  config,
);

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  let routes = navigation.state.routes;
  if (
    routes[routes.length - 1].routeName === 'Symptom' ||
    routes[routes.length - 1].routeName === 'PregnancyQuiz' ||
    routes[routes.length - 1].routeName === 'SearchDoctor' ||
    routes[routes.length - 1].routeName === 'PregnancyProfileEdit' ||
    routes[routes.length - 1].routeName === 'HAS' ||
    routes[routes.length - 1].routeName === 'Diabetes' ||
    routes[routes.length - 1].routeName === 'NextScreening' ||
    routes[routes.length - 1].routeName === 'Diagnose' ||
    routes[routes.length - 1].routeName === 'Prescription' ||
    routes[routes.length - 1].routeName === 'AddLab' ||
    routes[routes.length - 1].routeName === 'Reschedule' ||
    routes[routes.length - 1].routeName === 'Notifications' ||
    routes[routes.length - 1].routeName === 'Maps' ||
    routes[routes.length - 1].routeName === 'ChatBillingSummary' ||
    routes[routes.length - 1].routeName === 'GoToChat' ||
    routes[routes.length - 1].routeName === 'VideoCall' ||
    routes[routes.length - 1].routeName === 'Doku' ||
    routes[routes.length - 1].routeName === 'OrderSummaryDetail'
  ) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: <View />,
    tabBarIcon: ({focused}) => (
      <TabBar
        focused={focused}
        value={I18n.t('common.txt_home')}
        name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
      />
    ),
    tabBarOnPress: ({navigation, defaultHandler}) => {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            navigation.navigate({
              routeName: 'Home',
            }),
          ],
          key: 'Home',
        }),
      );
    },
  };
};

HomeStack.path = '';

const MedicationStack = createStackNavigator(
  {
    Medication: MedicationScreen,
    Prescription: PrescriptionScreen,
    NewPrescription: NewPrescriptionScreen,
    OrderSummary: OrderSummaryScreen,
    OrderSummaryDetail: OrderSummaryDetailScreen,
    Refill: RefillScreen,
    ShareToChat: ShareToChatScreen,
    ExpectedTurnaroundTime: ExpectedTurnaroundTimeScreen,
    NewExpectedTurnaroundTime: NewExpectedTurnaroundTimeScreen,
    Finish: FinishScreen,
    Maps: MapsScreen,
    AddPrescriptionToBeRefilled: AddPrescriptionToBeRefilledScreen,
    PrescriptionDelivery: PrescriptionDeliveryScreen,
    Declaration: DeclarationScreen,
  },
  config,
);

MedicationStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  let routes = navigation.state.routes;
  if (
    routes[routes.length - 1].routeName == 'Prescription' ||
    routes[routes.length - 1].routeName == 'NewPrescription' ||
    routes[routes.length - 1].routeName == 'OrderSummary' ||
    routes[routes.length - 1].routeName == 'Finish' ||
    routes[routes.length - 1].routeName == 'Map' ||
    routes[routes.length - 1].routeName == 'NewExpectedTurnaroundTime' ||
    routes[routes.length - 1].routeName == 'OrderSummaryDetail'
  ) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: <View />,
    tabBarIcon: ({focused}) => (
      <TabBar
        focused={focused}
        value={I18n.t('common.txt_medication')}
        name={Platform.OS === 'ios' ? `ios-medkit` : 'md-medkit'}
      />
    ),
    tabBarOnPress: ({navigation, defaultHandler}) => {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            navigation.navigate({
              routeName: 'Medication',
            }),
          ],
          key: 'Medication',
        }),
      );
    },
  };
};

MedicationStack.path = '';

const DoctorStack = createStackNavigator(
  {
    Doctor: DoctorScreen,
    DoctorProfile: DoctorProfileScreen,
    Booking: BookingScreen,
    Reschedule: RescheduleScreen,
    FeeDetails: FeeDetailsScreen,
    PaymentOptions: PaymentOptionsScreen,
    PaymentMethod: PaymentMethodScreen,
    AddCard: AddCardScreen,
    Doku: PaymentDoku,
    AddPrescriptionToBeRefilled: AddPrescriptionToBeRefilledScreen,
    NewExpectedTurnaroundTime: NewExpectedTurnaroundTimeScreen,
    Declaration: DeclarationScreen,
    Chat: ChatScreen,
    Maps: MapsScreen,
  },
  config,
);

DoctorStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  let routes = navigation.state.routes;
  if (
    routes[routes.length - 1].routeName == 'DoctorProfile' ||
    routes[routes.length - 1].routeName == 'Booking' ||
    routes[routes.length - 1].routeName == 'ChatBillingSummary'
  ) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: <View />,
    tabBarIcon: ({focused}) => (
      <TabBar
        focused={focused}
        value={I18n.t('common.txt_doctor')}
        name={Platform.OS === 'ios' ? `ios-contacts` : 'md-contacts'}
      />
    ),
    tabBarOnPress: ({navigation, defaultHandler}) => {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            navigation.navigate({
              routeName: 'Doctor',
            }),
          ],
          key: 'Doctor',
        }),
      );
    },
  };
};

DoctorStack.path = '';

const ChatStack = createStackNavigator(
  {
    ChatList: ChatsScreen,
    Chat: ChatScreen,
    DoctorProfile: DoctorProfileScreen,
    PaymentMethod: PaymentMethodScreen,
    AddCard: AddCardScreen,
    Doku: PaymentDoku,
    Symptom: SymptomScreen,
    ShareToChat: ShareToChatScreen,
    ChatBillingSummary: ChatBillingSummaryScreen,
  },
  config,
);

ChatStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  let routes = navigation.state.routes;
  if (
    routes[routes.length - 1].routeName == 'DoctorProfile' ||
    routes[routes.length - 1].routeName == 'Chat' ||
    routes[routes.length - 1].routeName == 'Camera' ||
    routes[routes.length - 1].routeName == 'PaymentMethod' ||
    routes[routes.length - 1].routeName == 'ChatBillingSummary' ||
    routes[routes.length - 1].routeName == 'AddCard'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: <View />,
    tabBarIcon: ({focused}) => (
      <TabBar
        routeName={routes[routes.length - 1].routeName}
        focused={focused}
        value={I18n.t('common.txt_chat')}
        name={Platform.OS === 'ios' ? `ios-chatbubbles` : 'md-chatbubbles'}
      />
    ),
    tabBarOnPress: ({navigation, defaultHandler}) => {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            navigation.navigate({
              routeName: 'ChatList',
            }),
          ],
          key: 'ChatList',
        }),
      );
    },
  };
};
ChatStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    InputLocation: InputLocationScreen,
    MyAppointment: MyAppoinmentScreen,
    EditProfile: EditProfileScreen,
    FavoriteLocations: FavoriteLocationsScreen,
    ChangePassword: ChangePasswordScreen,
    SecurityQuestion: SecurityQuestionsScreen,
    AccountSettings: AccountSettingsScreen,
    RecordsSettings: RecordsSettingsScreen,
    SelectDoctor: SelectDoctor,
    NotificationSettings: NotificationSettingsScreen,
    AboutUs: AboutUsScreen,
    MedicalRecords: MedicalRecordsScreen,
    Records: RecordsScreen,
    AddNewReport: AddNewReportScreen,
    Preview: PreviewScreen,
    VisitHistory: VisitHistoryScreen,
    OrderSummaryDetail: OrderSummaryDetailScreen,
    SubscriptionPlan: SubscriptionPlanScreen,
    SubscriptionPayment: SubscriptionPaymentScreen,
    TermOfUse: TermOfUseScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
    Reschedule: RescheduleScreen,
    // Verification: VerificationScreen,
    SendFeedback: SendFeedbackScreen,
    RecordDetails: RecordDetailsScreen,
    PrescriptionSegmentHistory: PerscriptionSegmentHistoryScreen,
    InvestigationSegmentHistory: InvestigationSegmentHistoryScreen,
    DiagnosesSegmentHistory: DiagnosesSegmentHistoryScreen,
    MedicalHistorySegmentHistory: MedicalHistorySegmentHistoryScreen,
    FamilyHistorySegmentHistory: FamilyHistorySegmentHistoryScreen,
    AllergiesSegmentHistory: AllergiesSegmentHistoryScreen,
    ChiefComplaintHistory: ChiefComplaintHistoryScreen,
    ProgressNotesHistory: ProgressNotesHistoryScreen,
    PaymentMethod: PaymentMethodScreen,
    TransactionHistory: TransactionHistoryScreen,
    TransactionDetails: TransactionDetailsScreen,
    PaymentOptions: {
      screen: PaymentOptionsScreen,
      path: 'paymentOptions',
    },
    AddCard: AddCardScreen,
    Doku: PaymentDoku,
    FAQ: FrequentlyAskQuestionScreen,
    FaqDetails: FaqDetailsScreen,
    SubscriptionTerms: SubscriptionTermsScreen,
  },
  config,
);

ProfileStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  let routes = navigation.state.routes;
  if (
    routes[routes.length - 1].routeName == 'MyAppointment' ||
    routes[routes.length - 1].routeName == 'EditProfile' ||
    routes[routes.length - 1].routeName == 'ChangePassword' ||
    routes[routes.length - 1].routeName == 'SecurityQuestion' ||
    routes[routes.length - 1].routeName == 'VisitHistory' ||
    routes[routes.length - 1].routeName == 'TransactionHistory' ||
    routes[routes.length - 1].routeName == 'TransactionDetails' ||
    routes[routes.length - 1].routeName == 'SubscriptionPlan' ||
    routes[routes.length - 1].routeName == 'SubscriptionTerms' ||
    routes[routes.length - 1].routeName == 'PaymentOptions' ||
    routes[routes.length - 1].routeName == 'NotificationSettings' ||
    routes[routes.length - 1].routeName == 'AboutUs' ||
    routes[routes.length - 1].routeName == 'TermOfUse' ||
    routes[routes.length - 1].routeName == 'PrivacyPolicy' ||
    routes[routes.length - 1].routeName == 'SendFeedback' ||
    routes[routes.length - 1].routeName == 'FAQ' ||
    routes[routes.length - 1].routeName == 'FaqDetails' ||
    routes[routes.length - 1].routeName == 'AccountSettings'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: <View />,
    tabBarIcon: ({focused}) => (
      <TabBar
        focused={focused}
        value={I18n.t('common.txt_profile')}
        name={Platform.OS === 'ios' ? `ios-person` : 'md-person'}
      />
    ),
    tabBarOnPress: ({navigation, defaultHandler}) => {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            navigation.navigate({
              routeName: 'Profile',
            }),
          ],
          key: 'Profile',
        }),
      );
    },
  };
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MedicationStack,
  DoctorStack,
  ChatStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
