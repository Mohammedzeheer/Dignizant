const mongoose = require('mongoose');

const quizSubmissionSchema = new mongoose.Schema({
    email:{type:String,required:true},
    1: String,
    2: String,
    3: String,
    4: String,
    5: [String],
  });
  
  const QuizSubmission = mongoose.model('QuizSubmission', quizSubmissionSchema);
  
  module.exports = QuizSubmission;