import { combineReducers } from 'redux';

const TechReducer = () => {
  return [
    { id: 0, name: 'Html', imgURL:'0.png', url:'macfold.png'},
    { id: 1,name: 'Css',imgURL:'02.png', url:'macfold.png'},
    { id: 2,name: 'Javascript',imgURL:'03.png', url:'macfold.png'},
    { id: 3,name: 'Node.js',imgURL:'04.png', url:'macfold.png'},
    { id: 4,name: 'Express.js',imgURL:'macfold.png', url:'macfold.png'},
    { id: 5,name: 'React.js',imgURL:'06.png', url:'macfold.png'},
    { id: 6,name: 'Redux.js',imgURL:'07.png', url:'macfold.png'},
    { id: 7,name: 'React Native',imgURL:'08.png', url:'macfold.png'},
    { id: 8,name: 'MongoDB',imgURL:'09.png', url:'macfold.png'},
    { id: 9,name: 'python',imgURL:'10.png', url:'macfold.png'},
    { id: 10,name: 'Django',imgURL:'11.png', url:'macfold.png'},
    { id: 11,name: 'Mysql',imgURL:'12.png', url:'macfold.png'},
    { id: 12,name: 'Java',imgURL:'13.png', url:'macfold.png'},
    { id: 13,name: 'GraphQL',imgURL:'14.png', url:'macfold.png'},
    { id: 14,name: 'VHDL',imgURL:'macfold.png', url:'macfold.png'},
    { id: 15,name: 'C',imgURL:'16.png', url:'macfold.png'},
    { id: 16,name: 'C++',imgURL:'17.png', url:'macfold.png'},
    { id: 17,name: 'C#',imgURL:'18.png', url:'macfold.png'},
    { id: 18,name: 'Git',imgURL:'19.png', url:'macfold.png'},
    { id: 19,name: 'Bootstrap',imgURL:'20.png', url:'macfold.png'},
    { id: 20,name: 'Latex',imgURL:'macfold.png', url:'macfold.png'},
    { id: 21,name: 'Matlab',imgURL:'macfold.png', url:'macfold.png'},
    { id: 22,name: 'Tensorflow',imgURL:'23.png', url:'macfold.png'},
    { id: 23,name: 'AI',imgURL:'macfold.png', url:'macfold.png'},
    { id: 24,name: 'ML',imgURL:'25.png', url:'macfold.png'},
    { id: 25,name: 'NLP',imgURL:'macfold.png', url:'macfold.png'},
    { id: 26,name: 'Deep Learning',imgURL:'macfold.png', url:'macfold.png'},
    { id: 27,name: 'Web2py',imgURL:'28.png', url:'macfold.png'},
    { id: 28,name: 'OCaml',imgURL:'29.png', url:'macfold.png'},
    { id: 29,name: 'Prolog',imgURL:'30.png', url:'macfold.png'},
    { id: 30,name: 'Amazon DynamoDB',imgURL:'31.png', url:'macfold.png'},
    { id: 31,name: 'Data Stucture',imgURL:'macfold.png', url:'macfold.png'},
    { id: 32,name: 'Algorithm',imgURL:'macfold.png', url:'macfold.png'},
    { id: 33,name: 'PWA', imgURL:'34.png', url:'macfold.png'},
    { id: 33,name: 'Go', imgURL:'35.png', url:'macfold.png'}

    ]
}
export default combineReducers({
   TechData : TechReducer
})
