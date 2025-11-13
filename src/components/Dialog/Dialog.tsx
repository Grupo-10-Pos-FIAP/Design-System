import { useEffect, useState, useCallback, CSSProperties } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Dialog as RadixDialog } from 'radix-ui';
import { IconButton } from '@components/IconButton/IconButton';
import { DialogProps, DialogPosition, DialogSize, ContentAlign, SectionProps } from './interfaces';
import './Dialog.scss';

const SIZE_MAP: Record<DialogSize, string> = {
  'extra-small': '360px',
  'medium': '600px',
  'large': '900px',
  'extra-large': '1200px',
  'full': '100%',
};

const getPositionStyle = (position: DialogPosition): CSSProperties => {
  switch (position) {
    case 'center':
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    case 'top':
      return { top: '8%', left: '50%', transform: 'translateX(-50%)' };
    case 'bottom':
      return { bottom: '8%', left: '50%', transform: 'translateX(-50%)' };
    case 'left':
      return { top: '50%', left: '8%', transform: 'translateY(-50%)' };
    case 'right':
      return { top: '50%', right: '8%', transform: 'translateY(-50%)' };
    default:
      return {};
  }
};

const ALIGN_MAP: Record<ContentAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

const Dialog = ({
  isOpen = false,
  onClose,
  children,
  className = '',
  position = 'center',
  size = 'medium',
  contentAlign = 'center',
  headerAlign,
  bodyAlign,
  footerAlign,
  overlay = true,
  overlayOpacity = 0.5,
  closeOnOverlayClick = true,
  showCloseButton = false,
  title = 'Dialog',
  description = '',
  width,
  maxWidth,
  fullScreenBreakpoint = 768,
}: DialogProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsFullScreen(window.innerWidth <= fullScreenBreakpoint);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [fullScreenBreakpoint]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onClose?.();
      }
    },
    [onClose]
  );

  const handleOverlayPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose?.();
      }
    },
    [closeOnOverlayClick, onClose]
  );

  const finalHeaderAlign = headerAlign ?? contentAlign;
  const finalBodyAlign = bodyAlign ?? contentAlign;
  const finalFooterAlign = footerAlign ?? contentAlign;

  const positionStyle = getPositionStyle(position);
  const fallbackWidth = width || SIZE_MAP[size] || 'auto';

  const contentStyle: React.CSSProperties = {
    ...positionStyle,
    width: width || fallbackWidth,
    maxWidth: isFullScreen ? '100%' : maxWidth || fallbackWidth,
    maxHeight: isFullScreen ? '100vh' : '80vh',
    borderRadius: isFullScreen ? 0 : undefined,
    display: 'flex',
    flexDirection: 'column',
    alignItems: ALIGN_MAP[contentAlign] ?? 'center',
    overflowY: 'auto',
  };

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <RadixDialog.Portal>
        {overlay && (
          <RadixDialog.Overlay
            className="dialog__overlay"
            style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
            onPointerDown={handleOverlayPointerDown}
          />
        )}

        <RadixDialog.Content
          className={['dialog__content', `dialog--${size}`, className].filter(Boolean).join(' ')}
          data-fullscreen={isFullScreen}
          data-align={contentAlign}
          data-header-align={finalHeaderAlign}
          data-body-align={finalBodyAlign}
          data-footer-align={finalFooterAlign}
          style={contentStyle}
          onInteractOutside={(e) => {
            if (!closeOnOverlayClick) {
              e.preventDefault();
            }
          }}>
          <VisuallyHidden>
            <RadixDialog.Title>{title}</RadixDialog.Title>
          </VisuallyHidden>
          <VisuallyHidden>
            <RadixDialog.Description>{description || ' '}</RadixDialog.Description>
          </VisuallyHidden>

          {showCloseButton && (
            <RadixDialog.Close asChild>
              <IconButton icon="X" variant="transparent" className="dialog__close" aria-label="Fechar" />
            </RadixDialog.Close>
          )}

          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

const DialogHeader: React.FC<SectionProps> = ({ children, className = '', align }) => {
  const classes = ['dialog__header', className, align ? `dialog__header--align-${align}` : '']
    .filter(Boolean)
    .join(' ');
  return <div className={classes}>{children}</div>;
};

const DialogBody: React.FC<SectionProps> = ({ children, className = '', align }) => {
  const classes = ['dialog__body', className, align ? `dialog__body--align-${align}` : ''].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
};

const DialogFooter: React.FC<SectionProps> = ({ children, className = '', align }) => {
  const classes = ['dialog__footer', className, align ? `dialog__footer--align-${align}` : '']
    .filter(Boolean)
    .join(' ');
  return <div className={classes}>{children}</div>;
};

Dialog.displayName = 'Dialog';

export { Dialog, DialogHeader, DialogBody, DialogFooter };
export type { DialogProps } from './interfaces';
