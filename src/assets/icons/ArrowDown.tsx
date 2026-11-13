import {IconBase, type IconProps} from './IconBase';

export function ArrowDown(props: IconProps) {
    return <IconBase {...props}>
        <path d="M12 5v14"/>
        <path d="m19 12-7 7-7-7"/>
    </IconBase>;
}
