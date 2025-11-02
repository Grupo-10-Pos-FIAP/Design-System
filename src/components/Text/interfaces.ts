export interface TextProps {
  /** Text Variant */
  variant?: 
    | 'caption' | 'small' | 'body' | 'subtitle' | 'title' 
    | 'h4' | 'h3' | 'h2' | 'h1' | 'h5';
  
  /** Text Color */
  color?: 
    | 'base' | 'white' | 'black' | 'disabled'
    | 'primary' | 'secondary'  | 'soft'
    | 'success' | 'warning' | 'error' | 'info' | 'link'
    | 'gray100' | 'gray200' | 'gray300' | 'gray400' | 'gray500'
    | 'gray600' | 'gray700' | 'gray800' | 'gray900'
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
