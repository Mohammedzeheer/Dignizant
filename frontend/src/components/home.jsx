import React, { useState } from 'react';
import { Axios } from '../api/axiosInstance';
import { toast } from 'react-toastify'
import { question1, question2, question3, options1, options2 } from './Questions';
import CheckboxComponent from './Checkbox';
import SubmitButton from './SubmitButton';
import QuizHeader from './QuizHeader';
import RadioButtonComponent from './RadioButton';
import DropdownComponent from './DropDown';
import RadioDropdownComponent from './RadioDropdown';
import EmailInput from './Email'; 

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedradio1, setSelectedradio1] = useState('');
  const [selectedradio2, setSelectedradio2] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDropdownChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleDropdownChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleRadioChange1 = (e) => {
    setSelectedradio1(e.target.value);
  };

  const handleRadioChange2 = (e) => {
    setSelectedradio2(e.target.value);
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      const updatedOptions = selectedOptions.filter((option) => option !== value);
      setSelectedOptions(updatedOptions);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email === ''){
      toast.error('Please Enter Your Email');
      return;
    }
    if (
      selectedOption1 === '' ||
      selectedOption2 === '' ||
      selectedradio1 === '' ||
      selectedradio2 === '' ||
      selectedOptions.length === 0
    ) {
      toast.error('Please fill out all the fields before submitting.');
      return;
    }
    const formData = {
      selectedradio1,
      selectedOption1,
      selectedradio2,
      selectedOption2,
      selectedOptions,
      email
    };

    try {
      const response = await Axios.post('/submit-quiz',formData);
      toast.success(response.data.message)
      setSelectedOption1('');
      setSelectedOption2('');
      setSelectedradio1('');
      setSelectedradio2('');
      setSelectedOptions([]);
      setEmail('');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Google Form</h1>
        
        <QuizHeader
          title="India Quiz"
          description="Explore your knowledge about India! Answer questions"
        />
        <form onSubmit={handleSubmit}>
          <EmailInput value={email} onChange={handleEmailChange} />
          <RadioDropdownComponent
            questionText1={question1.questionText}
            questionText2="2. Which is the largest state in India by area?"
            options1={question1.options}
            options2={options1}
            selectedValue1={selectedradio1}
            selectedValue2={selectedOption1}
            handleRadioChange1={handleRadioChange1}
            handleDropdownChange1={handleDropdownChange1}
          />
          <RadioButtonComponent
            questionText={question2.questionText}
            options={question2.options}
            selectedValue={selectedradio2}
            onChange={handleRadioChange2}
          />
          <DropdownComponent
            questionText="4. Which Indian city is famously known as the 'Pink City'?"
            options={options2}
            selectedValue={selectedOption2}
            onChange={handleDropdownChange2}
          />
          <CheckboxComponent
            questionText={question3.questionText}
            options={question3.options}
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
          <SubmitButton onSubmit={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default Home;