import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
// import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import OnBoardRecruiter from './pages/Recruiter/OnboardRecruiter';
import DisplayOnBoardingForm from './components/Recruiterform/DisplayOnBoardingForm';
import OnboardingForm from './pages/Recruiter/OnboardingForm';
import OnboardingList from './pages/Recruiter/OnboardingList';
import AllRecruiterDetails from './pages/Recruiter/AllRecruiterDetails';
import AddNewClient from './pages/Clientmaster/AddNewClient';
import ClientDetails from './pages/Clientmaster/ClientDetails';
import DisplayRecruiterDetails from './components/Recruiterform/DisplayRecruiterDetails';
import DisplayClientDetails from './components/ClientForm/DisplayClientDetails';
import AddPortal from './pages/Postingmaster/AddPortal';
import AddPosting from './pages/Postingmaster/AddPosting';
import ViewPortals from './pages/Postingmaster/ViewPortals';
import InterviewStatusList from './pages/Generalsettings/InterviewStatusList';
import MyProfile from './pages/Generalsettings/MyProfile';
import DropReasonList from './pages/Generalsettings/DropReasonList';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!token && pathname !== '/onboarding-form') {
      // Redirect to signin if user is not authenticated
      navigate('/auth/signin', { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Check for /auth/signin route */}
      {pathname === '/auth/signin' ? (
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
        </Routes>
      ) : (
        <>
          {/* Check for /onboarding-form route */}
          {pathname === '/onboarding-form' ? (
            <Routes>
              <Route
                path="/onboarding-form"
                element={
                  <>
                    <PageTitle title="OnBoarding Form | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <OnboardingForm />
                  </>
                }
              />
            </Routes>
          ) : (
            <DefaultLayout>
              <Routes>
                <Route
                  index
                  element={
                    <>
                      <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <ECommerce />
                    </>
                  }
                />
                <Route
                  path="/recruiter-master/onboard-recruiter"
                  element={
                    <>
                      <PageTitle title="OnBoard Recruiter | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <OnBoardRecruiter />
                    </>
                  }
                />
                <Route
                  path="/recruiter-master/recruiter-details"
                  element={
                    <>
                      <PageTitle title="Recruiter Details | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <AllRecruiterDetails />
                    </>
                  }
                />
                <Route
                  path="/recruiter-master/onboarding-list/display-onboarding-form"
                  element={
                    <>
                      <PageTitle title="OnBoarding Details | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <DisplayOnBoardingForm />
                    </>
                  }
                />
                <Route
                  path="/recruiter-master/onboarding-list"
                  element={
                    <>
                      <PageTitle title="OnBoarding Details | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <OnboardingList />
                    </>
                  }
                />
                <Route
                  path="/recruiter-master/recruiter-details/display-recruiter-details"
                  element={
                    <>
                      <PageTitle title="Recruiter Details | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <DisplayRecruiterDetails />
                    </>
                  }
                />
                <Route
                  path="/client-master/add-new-client"
                  element={
                    <>
                      <PageTitle title="Add New Client | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <AddNewClient />
                    </>
                  }
                />
                <Route
                  path="/client-master/client-details"
                  element={
                    <>
                      <PageTitle title="Client Details | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <ClientDetails />
                    </>
                  }
                />
                <Route
                  path="/client-master/client-details/display-client-details"
                  element={
                    <>
                      <PageTitle title="Display Client Details | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <DisplayClientDetails />
                    </>
                  }
                />
                <Route
                  path="/posting-master/add-portal"
                  element={
                    <>
                      <PageTitle title="Add Portal | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <AddPortal />
                    </>
                  }
                />
                <Route
                  path="/posting-master/add-posting"
                  element={
                    <>
                      <PageTitle title="Add Posting | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <AddPosting />
                    </>
                  }
                />
                <Route
                  path="/posting-master/view-portals"
                  element={
                    <>
                      <PageTitle title="View Portals | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <ViewPortals />
                    </>
                  }
                />
                <Route
                  path="/general-settings/my-profile"
                  element={
                    <>
                      <PageTitle title="My Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <MyProfile />
                    </>
                  }
                />
                <Route
                  path="/general-settings/interview-status-list"
                  element={
                    <>
                      <PageTitle title="Interview Status List | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <InterviewStatusList />
                    </>
                  }
                />
                <Route
                  path="/general-settings/drop-reason-list"
                  element={
                    <>
                      <PageTitle title="Drop Reason List | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <DropReasonList />
                    </>
                  }
                />
                <Route
                  path="/calendar"
                  element={
                    <>
                      <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Calendar />
                    </>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <>
                      <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Profile />
                    </>
                  }
                />
                <Route
                  path="/forms/form-elements"
                  element={
                    <>
                      <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <FormElements />
                    </>
                  }
                />
                <Route
                  path="/forms/form-layout"
                  element={
                    <>
                      <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <FormLayout />
                    </>
                  }
                />
                <Route
                  path="/tables"
                  element={
                    <>
                      <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Tables />
                    </>
                  }
                />
                <Route
                  path="/chart"
                  element={
                    <>
                      <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Chart />
                    </>
                  }
                />
                <Route
                  path="/ui/alerts"
                  element={
                    <>
                      <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Alerts />
                    </>
                  }
                />
                <Route
                  path="/ui/buttons"
                  element={
                    <>
                      <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Buttons />
                    </>
                  }
                />
                <Route
                  path="/auth/signup"
                  element={
                    <>
                      <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <SignUp />
                    </>
                  }
                />
              </Routes>
            </DefaultLayout>
          )}
        </>
      )}
    </>
  );
}

// function App() {
//   const [loading, setLoading] = useState<boolean>(true);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <Routes>
//         {/* Check for /auth/signin route */}
//         {pathname === '/auth/signin' && (
//           <Route path="/auth/signin" element={<SignIn />} />
//         )}
//       </Routes>

//       {pathname == '/onboarding-form' ? (
//         <Routes>
//           <Route
//             path="/onboarding-form"
//             element={
//               <>
//                 <PageTitle title="OnBoarding Form | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//                 <OnboardingForm />
//               </>
//             }
//           />
//         </Routes>
//       ) : (
//       )}
//     </>
//   );
// }

export default App;
