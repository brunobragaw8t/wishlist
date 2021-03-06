import { FC } from 'react';

interface ContentSectionProps {
  className?: string;
}

const ContentSection:FC<ContentSectionProps> = ({ children, className }) => {
  return (
    <div className={`py-5 bg-light ${className}`}>
      {children}
    </div>
  )
}

export default ContentSection;
