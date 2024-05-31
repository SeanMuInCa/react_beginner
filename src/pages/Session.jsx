import { Button, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import usePatientStore from "@/store/usePatient.js";
import SessionList from "../components/SessionList";
import Chart from "../components/Chart";
import { useState } from "react";
import useSessionStore from "../store/useSession";
/**
 * patient's detail with session list
 * @returns 
 */
const Session = () => {
  const [sessionState, sessionActions] = useSessionStore.useStore();
  const [state, action] = usePatientStore.useStore();
  const [key, setKey] = useState(0); //sub components refresh by force
  const { id } = useParams();
  const patientId = id;
  const data = sessionState.sessionList[patientId];
  console.log("@", data);
  const [sessionData, setSessionData] = useState(data);
  const nav = useNavigate();
  console.log("id", state.data[patientId]);
  const patient = state.data[patientId];
  const handleMessage = () => {
    message.info("you have unfinished session");
  };
  /**
   * start a new assessment in specific session
   * @param {number} sessionId 
   */
  const goAssessment = (sessionId) => {
    console.log(sessionId);
    nav("/assessment/" + patientId + "/" + sessionId);
  };

  const [chartData, setCharData] = useState(null);
/**
 * callback of select a session
 * @param {number} sessionId 
 * @param {boolean} end end flag
 */
  const chooseSession = (sessionId, end) => {
    console.log(sessionId);
    if (end) {
      setCharData(sessionState.sessionList[patientId][sessionId - 1].data);
    } else {
      goAssessment(sessionId);
    }
  };
  /**
   * callback of click start new session
   * if there is no unfinished session then can start a new one
   */
  const startNewSession = () => {
    let unfinished = sessionState.sessionList[patientId].find(
      (item) => item.end === false,
    );
    if (unfinished) {
      handleMessage();
    } else {
      //start a new session
      let newSession = sessionActions.startNewSession(patientId);
      console.log("newSession", newSession);
      setSessionData(newSession);
      sessionActions.updateSession(patientId, newSession.sessionId, newSession);
      console.log(sessionState);
      setKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <>
      <div className="flex justify-start mb-5 p-5 flex-col bg-slate-200">
        <p className="text-2xl mb-1">
          {patient.firstName} - {patient.lastName}
        </p>
        <p className="mb-1 flex">
          <span className="min-w-44">Date of Birth:</span>{" "}
          <span>{patient.dateOfBirth}</span>
        </p>
        <p className="mb-1 flex">
          <span className="min-w-44">Gender:</span>{" "}
          <span>{patient.gender}</span>
        </p>
        <p className="mb-1 flex">
          <span className="min-w-44">Email:</span> {patient.emailId}
        </p>
        <p className="mb-1 flex">
          <span className="min-w-44">Guardian: </span>
          {patient.guardianFirstName}
        </p>
        <p className="mb-1 flex">
          <span className="min-w-44">Contact Number:</span>{" "}
          {patient.contactNumber}
        </p>
      </div>
      <p className="my-2 mx-auto text-center">Session List</p>
      <SessionList
        key={key}
        chooseSession={chooseSession}
        patientId={patientId}
        sessionData={sessionData}
      />
      {chartData && <Chart chartData={chartData} />}
      <div className="flex justify-center my-2">
        <Button type="primary" onClick={startNewSession}>
          New Session
        </Button>
      </div>
    </>
  );
};

export default Session;
