import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Minimum 3 characters"),

  companyName: Yup.string(),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),

  service: Yup.string()
    .required("Please select a service"),

  budget: Yup.string()
    .required("Please select a budget"),

  projectDetails: Yup.string()
    .required("Project details are required")
    .min(10, "Minimum 10 characters"),
});