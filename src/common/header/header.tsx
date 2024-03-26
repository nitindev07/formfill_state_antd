import React from 'react';
import Button from '../partial/button';
import Heading from '../partial/heading';
import Breadcrumb from "../bredcrumb/index";

interface HeaderProps {
    heading: string;
    breadcrumbItems?: string[];
    primaryActionText: string;
    onPrimaryActionClick: () => void;
    icon?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ heading, breadcrumbItems, primaryActionText, onPrimaryActionClick, icon}) => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <Heading type="h4">{heading}</Heading>
                {breadcrumbItems  ? <Breadcrumb items={breadcrumbItems} />: null}
            </div>
            <Button
                type="filled"
                className="px-[24px] py-[6px] rounded"
                onClick={onPrimaryActionClick}
                state="primary"
            >
                {icon && <span className="mr-2">{icon}</span>} 
                {primaryActionText}
            </Button>
        </div>
    );
};
export default Header;
