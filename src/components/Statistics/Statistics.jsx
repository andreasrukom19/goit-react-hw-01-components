import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  function randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  };

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stats-list']}>
        {stats.map(stat => {
          return (
            <li
              className={css.item}
              key={stat.id}
              style={{
                backgroundColor: randomColor(),
                width: `calc(100% / ${stats.length})`
              }}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

export { Statistics };