import { defineStore } from "pinia-for-react";
import avatar from "../utils/getAvatar";
const usePatientStore = defineStore({
  state() {
    return {
      data: [
        {
          id: 0,
          firstName: "aaa0",
          lastName: "bbb",
          emailId: "abc@abc.com",
          language: "english",
          contactNumber: "1231234567",
          gender: "male",
          location: "sk",
          medicalHistory: "medicalHistory",
          diagnosis: "diagnosis",
          dateOfBirth: "2022-01-01",
          guardianFirstName: "guardianFirstName.name",
          avatar: avatar(),
          therapistId:1,
        },
        {
          id: 1,
          firstName: "ccc",
          lastName: "ddd",
          emailId: "abc@abc.com",
          language: "english",
          contactNumber: "1231234567",
          gender: "male",
          location: "sk",
          medicalHistory: "medicalHistory",
          diagnosis: "diagnosis",
          dateOfBirth: "2022-02-01",
          guardianFirstName: "guardianFirstName.name",
          therapistId:1,
          avatar: avatar(),
        },
        {
          id: 2,
          firstName: "eee",
          lastName: "fff",
          emailId: "abc@abc.com",
          language: "english",
          contactNumber: "1231234567",
          gender: "male",
          location: "sk",
          medicalHistory: "medicalHistory",
          diagnosis: "diagnosis",
          dateOfBirth: "2022-03-01",
          guardianFirstName: "guardianFirstName.name",
          avatar: avatar(),
          therapistId:1,
        },
        {
          id: 3,
          firstName: "ggg",
          lastName: "hhh",
          emailId: "abc@abc.com",
          language: "english",
          contactNumber: "1231234567",
          gender: "male",
          location: "sk",
          medicalHistory: "medicalHistory",
          diagnosis: "diagnosis",
          dateOfBirth: "2022-04-01",
          guardianFirstName: "guardianFirstName.name",
          avatar: avatar(),
          therapistId:1,
        },
      ],
      selected: "",
    };
  },
  actions: {},
});

export default usePatientStore;
