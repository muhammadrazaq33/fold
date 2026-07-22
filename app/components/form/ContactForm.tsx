"use client";
import React, { useState } from "react";
import ThemeInput from "./ThemeInput";
import ThemeSelect from "./ThemeSelect";
import ThemeTextarea from "./ThemeTextarea";
import { ThemeButton } from "../buttons/ThemeButton";
import RightArrow from "@/public/icons/RightArrow";
import { useFormik } from "formik";
import { contactValidationSchema } from "@/app/validations/contactValidation";

const services = [
  {
    label: "Bakery",
    value: "bakery",
  },
  {
    label: "Coffee",
    value: "coffee",
  },
  {
    label: "Matcha",
    value: "matcha",
  },
];

const budgets = [
  {
    label: "$5,000",
    value: "5000",
  },
  {
    label: "$10,000",
    value: "10000",
  },
  {
    label: "$20,000",
    value: "20000",
  },
];

const subjectOptions = [
  {
    label: "General Inquiry",
    value: "general",
  },
  {
    label: "Support",
    value: "support",
  },
  {
    label: "Partnership",
    value: "partnership",
  },
];

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      service: "",
      budget: "",
      projectDetails: "",
    },

    validationSchema: contactValidationSchema,

    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("contactForm", JSON.stringify(values));

      alert("Submitted Successfully!");

      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-8 items-start"
    >
      <div className="flex flex-col gap-8">
        <div className="">
          <ThemeInput
            name="fullName"
            label="Full Name"
            placeholder="Jane Cooper"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && !!formik.errors.fullName}
            errorMessage={formik.errors.fullName}
          />
        </div>
        <div className="flex flex-row gap-8">
          <ThemeInput
            name="companyName"
            label="Company Name"
            placeholder="Ex. Tesla Inc"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ThemeInput
            name="email"
            label="Email"
            placeholder="you@example.com"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && !!formik.errors.email}
            errorMessage={formik.errors.email}
          />
        </div>
        {/* theme select */}
        <div className="flex flex-row gap-8">
          <ThemeSelect
            name="service"
            label="Service required"
            required
            placeholder="Select Your Service"
            value={formik.values.service}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            options={services}
            error={formik.touched.service && !!formik.errors.service}
            errorMessage={formik.errors.service}
          />
          <ThemeSelect
            name="budget"
            label="Project budget"
            required
            placeholder="Select Your Range"
            value={formik.values.budget}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            options={budgets}
            error={formik.touched.budget && !!formik.errors.budget}
            errorMessage={formik.errors.budget}
          />
        </div>
        {/*texta area  */}
        <div>
          <ThemeTextarea
            label="Project details"
            required
            placeholder="Tell us more about your idea"
            name="projectDetails"
            value={formik.values.projectDetails}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.projectDetails && !!formik.errors.projectDetails
            }
            errorMessage={formik.errors.projectDetails}
            rows={2}
          />
        </div>
      </div>
      <ThemeButton
        label="Send Message"
        bgcolor="#B32B49"
        color="#fff"
        // onClick={() => {handleSubmit}}
        type="submit"
        rightIcon={<RightArrow width={15} height={12} color="#fff" />}
        fontSize={20}
        paddingX={28}
        paddingY={12}
      />
    </form>
  );
};

export default ContactForm;
