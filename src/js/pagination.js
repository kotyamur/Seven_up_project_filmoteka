import Pagination from 'tui-pagination';
import icons from '../images/icons.svg';
// import 'tui-pagination/dist/tui-pagination.css';

const arrowIcon = `${icons}#arrow`;

const options = {
  totalItems: 100,
  itemsPerPage: 10,
  visiblePages: 5,
  page: 5,
  centerAlign: true,
  usageStatistics: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
      `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
// pagination.on();
