import * as  React from 'react';

type Props = {
  children: React.ReactNode
  size?: string
  className?: string
}
const NoteComponent = ({children, size, className}: Props) => {
  return (
    <div className={className} style={{
      maxWidth: size || '20%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inline-block'
    }}>
      {children}
    </div>
  );
};

export default NoteComponent;
