import {IconBase, type IconProps} from './IconBase';

export function ArrowDownToLine(props: IconProps) {
    return <IconBase {...props}>
        <path d="M12 17V3"/>
        <path d="m6 11 6 6 6-6"/>
        <path d="M19 21H5"/>
    </IconBase>;
}
