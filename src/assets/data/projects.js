import { v4 as uuidv4 } from 'uuid';
import CodeQuiz from '../images/CodeQuizMain.PNG';
import DefineHub from '../images/DefineHubMain.PNG';
import FlippedPages from '../images/FlippedPages.PNG';
import WeatherDash from '../images/WeatherMain.PNG';
import WorkDay from '../images/WorkdayMain.PNG';
import WallyTracker from '../images/WallyTracker.PNG';
import PasswordGen from '../images/PasswordMain.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'DefineHub',
    desc: 'DefineHub is a site based off an in-depth explanation of the word of your choosing.',
    img: DefineHub,
  },
  {
    id: uuidv4(),
    name: 'Flipped Pages',
    desc: 'Online Library Books which allows to use to search books added to their wishlist.',
    img: FlippedPages,
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc: 'Weather Dashboard can be utilized to view the weather forecast of given city/location',
    img: WeatherDash,
  },
  {
    id: uuidv4(),
    name: 'WorkDay Scheduler',
    desc: 'A Daily Planner to create a hourly schedule',
    img: WorkDay,
  },
  {
    id: uuidv4(),
    name: 'Code Quiz',
    desc: 'A quiz is multiple-choice and relies on a timer to determine how well the user performs while taking the quiz',
    img: CodeQuiz,
  },
  {
    id: uuidv4(),
    name: 'WallyTracker',
    desc: 'WallyTracker is a fast and easy way to track your budgets',
    img: WallyTracker,
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc: 'Random Password Generator will generate a password based on your choices',
    img: PasswordGen,
  },
];

export default projects;
