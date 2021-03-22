import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { checkClassName } from './className_helper';

// Form.Item and Inputs Helpers
// Define default classNames and props

/*
 * Default Label to pass @ <Form.Item className={defaultFormItemClass()}
 *
 * @param givenClassName: defined className
 *
 * returns string
 */
export const defaultFormItemClass = (givenClassName?: string): string => {
  const classNames: string = checkClassName(givenClassName, [
    {
      searchString: 'px',
      defaultClassName: 'px-1',
    },
  ]);

  return classNames;
};

/*
 *
 * @param title: label character
 * @param givenClassName: defined classnames
 *
 * Default Label to pass @ <Form.Item label={defaultInputLabel(title, className)}]
 */
export const defaultInputLabel = (
  title: string,
  givenClassName?: string,
  suffix?: any,
  popoverContent?: string
): JSX.Element => {
  const defaultClass: string[] = [
    'text-kmcGrayBase',
    givenClassName ? givenClassName : '',
  ];

  return (
    <p className={defaultClass.join(' ')}>
      {title} {suffix && suffix}
      {popoverContent && (
        <Popover content={popoverContent}>
          <span className='ml-2'>
            <QuestionCircleOutlined />
          </span>
        </Popover>
      )}
    </p>
  );
};

/*
 * Default Label to pass @ <Inputlabel className={defaultInputLabel()}
 *
 * @param givenClassName: defined className
 *
 * returns string
 */
export const defaultInputClass = (givenClassName?: string): string => {
  const classNames: string = checkClassName(givenClassName, [
    {
      searchString: 'rounded',
      defaultClassName: 'rounded-sm',
    },
  ]);

  return classNames;
};

/*
 * Default Label to pass @ <Inputlabel className={defaultInputLabel()}
 *
 * @param givenClassName: defined className
 *
 * returns string
 */
export const defaultSelectClass = (givenClassName?: string): string => {
  const defaultClassNames: string[] = ['input__select'];

  const classNames: string = checkClassName(givenClassName, [
    {
      searchString: '',
      defaultClassName: '',
    },
  ]);

  defaultClassNames.push(classNames);

  return defaultClassNames.join(' ');
};
