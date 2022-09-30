import Pagination from 'tui-pagination';
import icons from '../images/icons.svg';
import Api from './api';

const arrowIcon = `${icons}#arrow`;

const container = document.getElementById('pagination');

export const renderPagination = (api, renderer, searchFnName) => {
  const { totalResult } = api;

  if (totalResult === 0) {
    container.style.display = 'none';
  } else {
    container.style.display = 'flex';
  }

  const options = {
    totalItems: totalResult,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
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

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', async ({ page }) => {
    api.page = page;
    const resultApi = await api[searchFnName]();
    renderer(resultApi);
  });
};