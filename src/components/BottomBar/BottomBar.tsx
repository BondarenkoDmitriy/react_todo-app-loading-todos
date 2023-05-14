import classNames from 'classnames';
import { FC, memo } from 'react';
import { Filter } from '../../types/FilterEnum';

interface Props {
  countOfItems: number;
  selectedFilter: Filter;
  changeFilterOfTodo: (filter: Filter) => void;
}

export const BottomBar: FC<Props> = memo((
  { countOfItems, changeFilterOfTodo, selectedFilter },
) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const target = event.target as HTMLAnchorElement;

    changeFilterOfTodo(target.text as Filter);
  };

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${countOfItems} items left`}
      </span>
      <nav className="filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: selectedFilter === Filter.All,
          })}
          onClick={handleClick}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: selectedFilter === Filter.Active,
          })}
          onClick={handleClick}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: selectedFilter === Filter.Completed,
          })}
          onClick={handleClick}
        >
          Completed
        </a>
      </nav>

      <button type="button" className="todoapp__clear-completed">
        Clear completed
      </button>
    </footer>
  );
});