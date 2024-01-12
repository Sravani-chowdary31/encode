// SurveyForm.js
import React, { useState } from 'react';

const SurveyForm = () => {
  const [surveyData, setSurveyData] = useState({
    question: '',
    audience: '',
    channels: '',
    intervals: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSurveySubmit = () => {
    // Sending surveyData to the backend for further processing
    fetch('http://localhost:5000/create-survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyData),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <label>
        Survey Question:
        <input type="text" name="question" value={surveyData.question} onChange={handleInputChange} />
      </label>
      <label>
        Target Audience:
        <input type="text" name="audience" value={surveyData.audience} onChange={handleInputChange} />
      </label>
      <label>
        Channels (comma-separated):
        <input type="text" name="channels" value={surveyData.channels} onChange={handleInputChange} />
      </label>
      <label>
        Intervals (comma-separated):
        <input type="text" name="intervals" value={surveyData.intervals} onChange={handleInputChange} />
      </label>
      <button onClick={handleSurveySubmit}>Send Survey</button>
    </div>
  );
};

export default SurveyForm;