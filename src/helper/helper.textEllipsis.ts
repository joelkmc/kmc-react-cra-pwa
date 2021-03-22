import { CSSProperties } from 'react';

export const ellipsisStyle: CSSProperties = {
  lineClamp: 1,
  WebkitLineClamp: 1,
  boxOrient: 'vertical',
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};
