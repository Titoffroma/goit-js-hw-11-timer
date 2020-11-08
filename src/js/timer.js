import CountdownTimer from './class';
import './dateMe';
const superTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});
