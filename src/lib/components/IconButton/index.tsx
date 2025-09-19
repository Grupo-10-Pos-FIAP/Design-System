import type { IconButtonProps } from './interfaces';

export const IconButton = ({ primary = false, size = 'medium', label }: IconButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return <button className={`btn ${mode} btn-${size}`}>
      {label}</button>;
};
