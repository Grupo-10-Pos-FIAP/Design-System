export interface TextProps {
  /** Text Variant */
  variant?: 
    | 'caption' | 'small' | 'body' | 'subtitle' | 'title' 
    | 'h4' | 'h3' | 'h2' | 'h1' | 'h5';
  
  /** Text Color */
  color?: 
    | 'base' | 'white' | 'black' | 'disabled'
    | 'primary' | 'secondary' | 'accent' | 'soft'
    | 'success' | 'warning' | 'error' | 'info' | 'link'
    | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500'
    | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900'
    | string;

  /** Font Weight */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  
  /** Text Align */
  align?: 'left' | 'center' | 'right' | 'justify';

  /** HTML Element */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';

  /** Letter Spacing */
  letterSpacing?: 'tightest' | 'tight' | 'normal' | 'relaxed' | 'wide' | 'wider';

  /** Additional CSS Class */
  className?: string;

  /** If the text should be truncated with ellipsis */
  truncate?: boolean;

  /** Maximum number of lines */
  maxLines?: 1 | 2 | 3 | 4;
  
  children: React.ReactNode;
  style?: React.CSSProperties;
}
