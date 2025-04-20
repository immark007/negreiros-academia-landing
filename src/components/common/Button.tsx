import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'danger';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonIconPosition = 'left' | 'right' | 'only';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
  href?: string;
  isExternal?: boolean;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> &
  MotionProps;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      href,
      isExternal = false,
      loading = false,
      disabled = false,
      fullWidth = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'font-semibold rounded-lg transition-all duration-300 ease-in-out',
      'inline-flex items-center justify-center gap-2',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900',
      disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
      fullWidth ? 'w-full' : 'w-auto',
    ].join(' ');

    const sizeClasses = {
      xs: 'py-1.5 px-3 text-xs',
      sm: 'py-2 px-4 text-sm',
      md: 'py-2.5 px-5 text-base',
      lg: 'py-3 px-6 text-lg',
      xl: 'py-4 px-7 text-xl',
    };

    const variantClasses = {
      primary: [
        'bg-red-600 text-white',
        'hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/40',
        'focus:ring-red-500',
      ].join(' '),
      secondary: [
        'bg-neutral-800 text-white',
        'hover:bg-neutral-700 hover:shadow-md hover:shadow-neutral-800/30',
        'focus:ring-neutral-600',
      ].join(' '),
      outline: [
        'bg-transparent border-2 border-red-600 text-red-600',
        'hover:bg-red-600 hover:text-white hover:shadow-md',
        'focus:ring-red-500',
      ].join(' '),
      ghost: [
        'bg-transparent text-neutral-300',
        'hover:text-white hover:bg-neutral-800/50 hover:shadow-inner',
        'focus:ring-neutral-600',
      ].join(' '),
      text: [
        'bg-transparent text-red-500 underline-offset-4',
        'hover:text-red-400 hover:underline',
        'focus:ring-red-500',
      ].join(' '),
      danger: [
        'bg-rose-600 text-white',
        'hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/40',
        'focus:ring-rose-500',
      ].join(' '),
    };

    const iconSizes = {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 22,
    };

    const motionProps: MotionProps = {
      whileHover: disabled ? {} : {
        scale: 1.04,
        y: -2,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      },
      whileTap: disabled ? {} : {
        scale: 0.96,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 25 }
      },
      ...props,
    };

    const classes = [
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className,
    ].join(' ');

    const renderIcon = () => {
      if (loading) {
        return <Loader2 size={iconSizes[size]} className="animate-spin" />;
      }
      return icon || (variant === 'primary' && <ArrowRight size={iconSizes[size]} />);
    };

    const content = (
      <>
        {(icon || (variant === 'primary' && !loading)) && iconPosition === 'left' && renderIcon()}

        {children && iconPosition !== 'only' && (
          <span className={loading ? 'opacity-0' : 'opacity-100'}>
            {children}
          </span>
        )}

        {(icon || (variant === 'primary' && !loading)) && iconPosition === 'right' && renderIcon()}
      </>
    );

    if (href && !disabled) {
      return (
        <motion.a
          {...motionProps}
          href={href}
          className={`${classes} group`}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          aria-disabled={disabled}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        {...motionProps}
        className={classes}
        disabled={disabled || loading}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        aria-busy={loading}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
