import type {ReactNode, SVGProps} from 'react';

export type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };
type IconBaseProps = IconProps & { children: ReactNode };

export function IconBase({size = 24, strokeWidth = 2, children, ...props}: IconBaseProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round"
                strokeLinejoin="round" {...props}>{children}</svg>;
}
