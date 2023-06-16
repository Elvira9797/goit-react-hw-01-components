import PropTypes from 'prop-types';
import {
  StatList,
  StatListItem,
  StatSection,
  StatTitle,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from '../../getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem
              key={id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span>{label}</span>
              <Percentage>{percentage}%</Percentage>
            </StatListItem>
          );
        })}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
