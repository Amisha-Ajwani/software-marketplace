import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const displayData = {
  "id": "1",
  "product_name": "Learning Management System",
  "product_description": "A learning management system is a software application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, materials or learning and development programs. The learning management system concept emerged directly from e-Learning.",
  "images": ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fin22labs.com%2Flms-suite.html&psig=AOvVaw0KTgtsxMH9Udm8i68jd8yL&ust=1666456633323000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLiO-vTg8foCFQAAAAAdAAAAABAE","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mededwebs.com%2Fblog%2Fmeded-manager%2F5-factors-to-look-for-when-researching-a-learning-management-system-lms&psig=AOvVaw0KTgtsxMH9Udm8i68jd8yL&ust=1666456633323000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLiO-vTg8foCFQAAAAAdAAAAABAJ"],
  "display_image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fin22labs.com%2Flms-suite.html&psig=AOvVaw0KTgtsxMH9Udm8i68jd8yL&ust=1666456633323000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLiO-vTg8foCFQAAAAAdAAAAABAE",
  "built_by": "Priyanka",
  "rating": "4.5",
  "tags": ["LMS"],
  "reviews":[{
    "id": "1",
    "user": "Amisha",
    "rating": "4",
    "comment": "Immense features!"
  },{
    "id": "1",
    "user": "Meeta",
    "rating": "5",
    "comment": "Excellent product"
  }]
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
