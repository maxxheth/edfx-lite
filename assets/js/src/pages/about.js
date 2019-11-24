
import { renderMenu } from '../global/menu';
import { changeBgColor } from '../logic/change-bg-color';

import '../../../css/src/style.scss';

const edfxBg = document.querySelector('.edfx__bg');

renderMenu();

changeBgColor(edfxBg)('#00a0ff','#fd3819')(10000);