// Install dependencies: npm install react react-dom next tailwindcss framer-motion
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { FiArrowRight } from "react-icons/fi";

export default function EventForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    occasion: "",
    details: "",
    guestCount: "",
    location: "",
    budget: "",
    email: "",
    phone: "",
    extraDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const isValid = () => {
    switch (step) {
      case 1:
        return formData.occasion;
      case 2:
        return formData.details;
      case 3:
        return formData.guestCount && formData.location;
      case 4:
        return formData.budget && formData.email;
      default:
        return true;
    }
  };

  const steps = [
    {
      title: "Event Type",
      content: (
        <div>
          <label className="block mb-2 text-3xl font-coolvetica">What type of event are you planning?</label>
          <select
            name="occasion"
            className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option value="">Select an occasion</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Other">Other</option>
          </select>
        </div>
      ),
    },
    {
      title: "Details",
      content: (
        <div>
          {formData.occasion === "Wedding" && (
            <div>
              <label className="block mb-2 text-3xl font-coolvetica">Type of Wedding</label>
              <select
                name="details"
                className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
                value={formData.details}
                onChange={handleInputChange}
              >
                <option value="">Select a type</option>
                <option value="Traditional">Traditional</option>
                <option value="White Wedding">White Wedding</option>
              </select>
            </div>
          )}
          {formData.occasion === "Birthday" && (
            <div>
              <label className="block mb-2 text-3xl font-coolvetica">Age Group</label>
              <select
                name="details"
                className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
                value={formData.details}
                onChange={handleInputChange}
              >
                <option value="">Select an age group</option>
                <option value="Child">Child</option>
                <option value="Teen">Teen</option>
                <option value="Adult">Adult</option>
              </select>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Guest Info",
      content: (
        <div>
          <div>
            <label className="block mb-2 text-3xl font-coolvetica">Guest Count</label>
            <select
              name="guestCount"
              className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
              value={formData.guestCount}
              onChange={handleInputChange}
            >
              <option value="">Select guest count</option>
              <option value="10-20">10-20</option>
              <option value="20-50">20-50</option>
              <option value="50-100">50-100</option>
              <option value="100-500">100-500</option>
              <option value="500+">500+</option>
            </select>
          </div>
          <div>
            <label className="block mt-4 mb-2 text-3xl font-coolvetica">Location</label>
            <input
              type="text"
              name="location"
              className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
              placeholder="City, State"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Budget & Contact",
      content: (
        <div>
          <div>
            <label className="block mb-2 text-3xl font-coolvetica">Estimated Budget</label>
            <select
              name="budget"
              className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
              value={formData.budget}
              onChange={handleInputChange}
            >
              <option value="">Select budget range</option>
              <option value="₦50,000-₦100,000">₦50,000-₦100,000</option>
              <option value="₦100,000-₦500,000">₦100,000-₦500,000</option>
              <option value="₦500,000+">₦500,000+</option>
            </select>
          </div>
          <div>
            <label className="block mt-4 mb-2 text-3xl font-coolvetica">Email</label>
            <input
              type="email"
              name="email"
              className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mt-4 mb-2 text-3xl font-coolvetica">Phone</label>
            <input
              type="phone"
              name="phone"
              className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
              placeholder="070xxxxxxxx"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Review & Submit",
      content: (
        <div>
          <div>
            <label className="block mb-2 text-3xl font-coolvetica">Any other details?</label>
            <textarea
              name="extraDetails"
              className="border p-2 w-[50%] text-sm tracking-wide font-satoshi"
              rows="4"
              placeholder="Additional instructions or requests"
              value={formData.extraDetails}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <p className="mt-4 text-gray-600">
            Thank you for choosing Party Now! We’re excited to make your event
            unforgettable. A representative will reach out shortly. Have a great
            day!
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">{steps[step - 1].title}</h2>
          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="h-full bg-yellow-500 rounded-full"
              style={{ width: `${(step / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div>{steps[step - 1].content}</div>
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            // <button
            //   className="bg-gray-300 px-4 py-2 rounded"
            //   onClick={prevStep}
            // >
            //   Back
            // </button>
            <Button
                label="Next"
                variant="primary"
                size="small"
                icon={<FiArrowRight />}
                onClick={() => console.log("Button Clicked!")}
            />
          )}
          {step < steps.length ? (
            // <button
            //   className="bg-yellow-500 text-white px-4 py-2 rounded"
            //   onClick={nextStep}
            //   disabled={!isValid()}
            // >
            //   Next
            // </button>
            <Button
                label="Next"
                variant="outline"
                size="small"
                icon={<FiArrowRight />}
                onClick={() => console.log("Button Clicked!")}
          />
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => alert("Form Submitted! Check your email.")}
            >
              Submit
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
