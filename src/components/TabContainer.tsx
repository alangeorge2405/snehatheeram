import React, { ReactNode } from 'react';

interface TabContainerProps {
  children: ReactNode;
}

// Simple wrapper that currently just renders its children.
// This placeholder can be extended later to provide real tab navigation.
const TabContainer: React.FC<TabContainerProps> = ({ children }) => {
  return <>{children}</>;
};

export default TabContainer;
