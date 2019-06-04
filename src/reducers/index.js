import { combineReducers } from 'redux';

const TechReducer = () => {
  return [
    { id: 0, name: 'Html', imgURL:'01.png'},
    { id: 1,name: 'Css',imgURL:'01.png'},
    { id: 2,name: 'Javascript',imgURL:'01.png'},
    { id: 3,name: 'Node.js',imgURL:'01.png'},
    { id: 4,name: 'Express.js',imgURL:'01.png'},
    { id: 5,name: 'React.js',imgURL:'01.png'},
    { id: 6,name: 'Redux.js',imgURL:'01.png'},
    { id: 7,name: 'React Native',imgURL:'01.png'},
    { id: 8,name: 'MongoDB',imgURL:'01.png'},
    { id: 9,name: 'python',imgURL:'01.png'},
    { id: 10,name: 'Django',imgURL:'01.png'},
    { id: 11,name: 'Mysql',imgURL:'01.png'},
    { id: 12,name: 'Java',imgURL:'01.png'},
    { id: 13,name: 'GraphQL',imgURL:'01.png'},
    { id: 14,name: 'VHDL',imgURL:'01.png'},
    { id: 15,name: 'C',imgURL:'01.png'},
    { id: 16,name: 'C++',imgURL:'01.png'},
    { id: 17,name: 'C#',imgURL:'01.png'},
    { id: 18,name: 'Git',imgURL:'01.png'},
    { id: 19,name: 'Bootstrap',imgURL:'01.png'},
    { id: 20,name: 'Latex',imgURL:'01.png'},
    { id: 21,name: 'Matlab',imgURL:'01.png'},
    { id: 22,name: 'Tensorflow',imgURL:'01.png'},
    { id: 23,name: 'AI',imgURL:'01.png'},
    { id: 24,name: 'ML',imgURL:'01.png'},
    { id: 25,name: 'NLP',imgURL:'01.png'},
    { id: 26,name: 'Deep Learning',imgURL:'01.png'},
    { id: 27,name: 'Web2py',imgURL:'01.png'},
    { id: 28,name: 'OCaml',imgURL:'01.png'},
    { id: 29,name: 'Prolog',imgURL:'01.png'},
    { id: 30,name: 'Amazon DynamoDB',imgURL:'01.png'},
    { id: 31,name: 'Data Stucture',imgURL:'01.png'},
    { id: 32,name: 'Algorithm',imgURL:'01.png'},
    { id: 33,name: 'PWA', imgURL:'01.png'}

    ]
}
export default combineReducers({
   TechData : TechReducer
})
