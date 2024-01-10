const QuizSubmission= require('../models/userModel')


const addQuiz = async (req, res) => {
    try {
    const formData = req.body;
    console.log(formData)
  
    const {
        selectedradio1,
        selectedOption1,          
        selectedradio2,
        selectedOption2,
        selectedOptions,
        email,
      } = formData;

      const newSubmission = new QuizSubmission({
        1: selectedradio1,
        2: selectedOption1,
        3: selectedradio2,
        4: selectedOption2,
        5: selectedOptions,
        email:email
      });

      await newSubmission.save();
      res.status(201).json({ message: 'Quiz form data saved successfully!' });
    } catch (error) {
      console.error('Error saving quiz submission:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  };
}



  module.exports = {addQuiz}