import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div className="input-container">
      <div className="title">
        <span><span className="highlight">Personalize</span> Your Fitness Journey</span>
      </div>

      <div className="forms">
        {/* Basic Information Form */}
        <div className="form-section">
          <h3>Basic Information</h3>
          <input type="number" placeholder="Age" name="age" />
          <select name="gender">
            <option value="" disabled selected hidden>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="number" placeholder="Height (cm)" name="height" />
          <input type="number" placeholder="Weight (kg)" name="weight" />
        </div>

        {/* Fitness Goals Form */}
        <div className="form-section">
          <h3>Fitness Goals</h3>
          <select name="goalType">
          <option value="" disabled selected hidden>Select Goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <select name="dietType">
            <option value="" disabled selected hidden>Select Diet Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Vegan">Vegan</option>
          </select>
          <input type="number" placeholder="Workout Days/Week" name="workoutFrequency" />
          <input type="number" placeholder="Target Weight (kg)" name="targetWeight" />
        </div>

        {/* Lifestyle & Preferences Form */}
        <div className="form-section">
          <h3>Lifestyle & Preferences</h3>
          <select name="activityLevel">
            <option value="" disabled selected hidden>Select Activity Level</option>
            <option value="Sedentary">Sedentary</option>
            <option value="Lightly Active">Lightly Active</option>
            <option value="Moderately Active">Moderately Active</option>
            <option value="Very Active">Very Active</option>
          </select>
          <select name="allergies">
            <option value="" disabled selected hidden>Any Allergies?</option>
            <option value="None">None</option>
            <option value="Dairy">Dairy</option>
            <option value="Gluten">Gluten</option>
            <option value="Nuts">Nuts</option>
          </select>
          <input type="number" placeholder="Daily Water Intake (Liters)" name="waterIntake" />
          <select name="sleepPattern">
            <option value="" disabled selected hidden>Select Sleep Pattern</option>
            <option value="Less than 5 hours">Less than 5 hours</option>
            <option value="5-6 hours">5-6 hours</option>
            <option value="7-8 hours">7-8 hours</option>
            <option value="More than 8 hours">More than 8 hours</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button className="submit-btn">Generate My Plan</button>
    </div>
  );
};

export default Input;
