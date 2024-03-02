import './index.scss';
import { initialComponents } from 'app/initialComponents';
import { navigate } from 'shared/utilities/navigate';

initialComponents();

document.addEventListener('DOMContentLoaded', () => navigate('welcome'));
